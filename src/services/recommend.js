import request from './index';

export function getTopBannerData(params) {
    return request({
        url: '/banner'
    })
}
export function getHotRecommend(limit) {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}

export function getNewAlbum(limit = 10) {
    return request({
        url: '/top/album',
        params: {
            limit
        }
    })
}