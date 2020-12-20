import * as types from './action-types';
import { getTopBannerData,getHotRecommend,getNewAlbum } from '@services/recommend';
import { HOT_RECOMMEND_LIMIT } from '../../common/constants';
const action = {
    getTopBannerAction() {
        return async dispatch => {
            const { data } = await getTopBannerData();
            dispatch(action.changeBannerDataAction(data.banners))
        }
    },
    changeBannerDataAction(bannerList) {
        return {
            type: types.CHANGE_TOP_BANNER,
            payload: bannerList
        }
    },
    getHotRecommendAction() {
        return async dispatch => {
            const res = await getHotRecommend(HOT_RECOMMEND_LIMIT);
            dispatch(action.changeHotRecommendAction(res.data.result));
        }
    },
    changeHotRecommendAction(hotRecommendList) {
        return {
            type: types.CHANGE_HOT_RECOMMEND,
            payload: hotRecommendList
        }
    },
    getAlbumsAction() {
        return async dispatch => {
            const { data } = await getNewAlbum();
            dispatch(action.chnageTopAlbumsAction(data.albums));
        }
    },
    chnageTopAlbumsAction(payload) {
        return {
            type: types.CHANGE_TOP_ALBUM,
            payload
        }
    }
}

export default action;