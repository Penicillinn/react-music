import * as types from './action-types';

const initialData = {
    bannerList: [],
    hotRecommendList: [],
    newAlbumsList: []
}

export default function reducer(state=initialData,action) {
    const newData = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case types.CHANGE_TOP_BANNER:
            newData.bannerList = action.payload
            break;
        case types.CHANGE_HOT_RECOMMEND:
            newData.hotRecommendList = action.payload;
            break;
        case types.CHANGE_TOP_ALBUM:
            newData.newAlbumsList = action.payload;
            break;
        default:
            return newData;
    }
    return newData
}