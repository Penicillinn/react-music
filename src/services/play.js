import request from './index';

export function getSongInfo(ids) {
    return request({
        url: '/song/detail',
        params: {
          ids
        }
    })
}
export function getLyric(id) {
    return request({
        url: '/lyric',
        params: {
          id
        }
    })
}