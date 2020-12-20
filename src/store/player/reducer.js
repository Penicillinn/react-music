import * as types from './action-types';

const initialState = {
  currentSong: {},
  lyricList: []
};

export default (state=initialState,action) => {
  const newData = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case types.CHANGE_CURRENT_SONG:
      newData.currentSong = action.currentSong;
      break;
    case types.CHANGE_CURRENT_LYRIC:
      newData.lyricList = action.lyric;
      break;
    default:
      return newData;
  }
  return newData;
};
