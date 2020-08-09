import request from './index';

export function getTopBannerData(params) {
    return request({
        url: '/banner'
    })
}