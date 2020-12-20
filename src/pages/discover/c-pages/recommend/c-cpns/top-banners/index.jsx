import React,{ useEffect,useState,memo } from 'react';
import { useDispatch, useSelector,shallowEqual }from 'react-redux';
import { Carousel } from 'antd';

import { RecommendAction } from '@store/recommend'

import { BannerWrp,BannerLeft,BannerRight,BannerControl } from './style';
import { useRef } from 'react';
import { useCallback } from 'react';
const TopBanners = (props) => {

    const [ currentIndex,setIndex ] = useState(0);
    const bannersRef = useRef();

    const dispath = useDispatch();
    const { topBanners } = useSelector(state => ({
        topBanners: state.RecommendReducer.bannerList
    }),shallowEqual)
    useEffect(() => {
        dispath(RecommendAction.getTopBannerAction());
    },[dispath])


    const bannerChange = useCallback((from,to) => {
        setTimeout(() => {
            setIndex(to)
        },0)
    },[])

    const currentPic = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20');
    return (
        <BannerWrp currentpic={currentPic}>
            <div className="wrap-v2 banner-content">
                <BannerLeft>
                    <Carousel autoplay effect="fade" ref={bannersRef} beforeChange={bannerChange}>
                        {
                            topBanners.map(item => {
                                return (
                                    <div key={item.imageUrl} className="banner-item">
                                        <img src={item.imageUrl} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn btn-left" onClick={e => bannersRef.current.prev()}></button>
                    <button className="btn btn-right" onClick={ e => bannersRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrp>
    )
}

export default memo(TopBanners);