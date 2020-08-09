import * as types from './action-types';
import { getTopBannerData } from '@services/recommend';
const action = {
    getTopBanner() {
        return async dispatch => {
            const { data } = await getTopBannerData();
            dispatch(action.changeBannerData(data.banners))
        }
    },
    changeBannerData(bannerList) {
        return {
            type: types.CHANGE_TOP_BANNER,
            payload: bannerList
        }
    }
}

export default action;