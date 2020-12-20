import React,{ memo, useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Slider } from 'antd';
import moment from 'moment';

import { playAction } from '../../../store/player';
import { getSongAudio } from './utils';

import {
  PlayBar,
  BarContent
} from './style';

const PlayerBar = () => {
    //state
    // current是毫秒
    const [currentTime,updateTime] = useState(0);
    const [isPlaying,setIsPlaying] = useState(false);
    const [isSliderChange,setIsSliderChange] = useState(false);

    //redux hooks
    const { currentSong } = useSelector(state => ({
      currentSong: state.playReducer.currentSong
    }),shallowEqual)
    const dispatch = useDispatch();
    const totalTime = currentSong.dt || 0;

    //hooks
    const audioRef = useRef(null);

    useEffect(() => {
      dispatch(playAction.getCurrentSong(167876));
    },[dispatch]);

    useEffect(() => {
      audioRef.current.src = getSongAudio(167876);
    },[currentSong]);

    const currentProgress = useMemo(() => {
      return (currentTime / totalTime) * 100;
    }, [currentTime,totalTime])

    //其他业务逻辑
    const imgUrl = currentSong.al && currentSong.al.picUrl;
    const startPlay = () => {
      !isPlaying ? audioRef.current.play() : audioRef.current.pause();
      setIsPlaying(!isPlaying);
    };

    const updateCurrentTime = (e) => {
      if(!isSliderChange) {
        // 没有手动拉进度条的时候才去自动更新,事件对象时间的单位是秒，此时需要的单位是毫秒
        const nowTime = e.target.currentTime * 1000;
        updateTime(nowTime);
      }
    }

    const sliderChange = useCallback((value) => {
      // 1、停止进度条和当前时间的自动更新、歌曲还是自动播放
      // 2、根据当前进度条的位置去更新时间，value的范围是 0-100之间的数值
      setIsSliderChange(true);
      const nowTime = value / 100 * totalTime;
      updateTime(nowTime)
    },[totalTime]);

    const sliderDown = useCallback(value => {
      // 更新歌曲的播放进度,需要的单位是秒
      // 将sliderChange变成false
      const targetTime = value / 100 * totalTime / 1000;
      audioRef.current.currentTime = targetTime;
      setIsSliderChange(false);
      if(!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    },[isPlaying,totalTime]);


    return(
        <PlayBar className="sprite_bar">
          <BarContent className="wrap-v2">
            <div className="img">
              <button onClick={startPlay}>{isPlaying ? '暂停' : '播放'}</button>
              <img src={imgUrl} alt="" />
            </div>
            <div className="progress">
              <Slider 
                value={currentProgress} 
                style={{flex: 1}}
                onChange={sliderChange}
                onAfterChange={sliderDown}
              />
              <div className="time">
                <span>{moment(currentTime).format('mm:ss')}/</span>
                <span>{moment(totalTime).format('mm:ss')}</span>
              </div>
            </div>
            <div className="opretion" style={{width: '100px'}}></div>
            <audio 
              ref={audioRef} 
              onTimeUpdate={updateCurrentTime}
            />
          </BarContent>
        </PlayBar>
    )
}

export default memo(PlayerBar);