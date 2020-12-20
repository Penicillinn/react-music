import * as types from './action-types';
import { getSongInfo,getLyric } from '@services/play';
import { parseLyric } from '@pages/player/player-bar/utils';

const playAction = {
  getCurrentSong(ids) {
    return async dispatch => {
      const res = await getSongInfo(ids);
      dispatch(playAction.getCurrentLyric(ids));
      res.data.songs && dispatch(playAction.changeCurrentSong(res.data.songs[0]));
    }
  },
  getCurrentLyric(id) {
    return async dispatch => {
      const res = await getLyric(id);
      res.data.lrc && dispatch(playAction.changeLyric(parseLyric(res.data.lrc.lyric)))
    }
  },
  changeCurrentSong(currentSong) {
    return {
      type: types.CHANGE_CURRENT_SONG,
      currentSong
    }
  },
  changeLyric(lyric) {
    return {
      type: types.CHANGE_CURRENT_LYRIC,
      lyric
    }
  }
};

export default playAction;