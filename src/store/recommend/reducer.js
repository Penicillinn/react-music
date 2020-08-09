import * as types from './action-types';

const initialData = {
    bannerList: []
}

export default function reducer(state=initialData,action) {
    const newData = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case types.CHANGE_TOP_BANNER:
            newData.bannerList = action.payload
            break;
        default:
                return newData;
    }
    return newData
}