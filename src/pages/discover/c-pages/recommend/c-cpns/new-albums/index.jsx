import React,{ memo,useEffect, useRef } from 'react';
import { RecommendAction } from '@/store/recommend';
import { useDispatch, useSelector } from 'react-redux';

import ModuleTitle from '@components/module-title';
import { Carousel }  from 'antd';

import { NEW_ALBUMDS_PAGESIZE } from '../../../../../../common/constants';

import {
    AlbumsWrp,
    BtnArrow
}from './style';
const NewAlbums = () => {
    //state
    const carouselRef = useRef();
    //redux hooks
    const dispatch = useDispatch();
    const { albumsList } = useSelector(state => ({
        albumsList: state.RecommendReducer.newAlbumsList
    }))
    //hooks
    useEffect(() => {
        dispatch(RecommendAction.getAlbumsAction())
    },[dispatch])

    //其他业务逻辑
    const pageSizeArr = new Array(Math.ceil(albumsList.length / NEW_ALBUMDS_PAGESIZE)).fill(1).map((target,indey) => indey);
    return(
        <div>
            <ModuleTitle title='新碟上架' />
            <AlbumsWrp>
                <div className="page-wrp">
                    <Carousel ref={carouselRef} dots={false}>
                        {
                            pageSizeArr.map((item,index) => {
                                return (
                                    <div key={item} className="per-page">
                                        {
                                            albumsList.slice(item * NEW_ALBUMDS_PAGESIZE,(item + 1) * NEW_ALBUMDS_PAGESIZE).map(iten => {
                                                return (
                                                    <div key={iten.id} style={{maxWidth: '118px'}}>
                                                        <div className="list-item">
                                                            <img src={iten.picUrl} alt=""/>
                                                            <a href="/todo" className="sprite_00 cover">1111111</a>
                                                        </div>
                                                        <p className="text-nowrap">
                                                            <a href="/todo">{iten.name}</a>
                                                        </p>
                                                        <p className="text-nowrap">
                                                            <a href="/todo">{iten.artists.map(i => i.name).join('、')}</a>
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                        <div className="page-wrp">

                        </div>
                    </Carousel>
                </div>
                <BtnArrow>
                    <span href="/todo" className="arrow left sprite_02" onClick={e => carouselRef.current.prev()}></span>
                    <span href="/todo" className="arrow right sprite_02" onClick={e => carouselRef.current.next()}></span>
                </BtnArrow>
            <div className="test" style={{width: '140px',height: '22px',backgroundColor: 'red',display: "flex",justifyContent: 'space-between'}}>
                <span className="text-nowrap" style={{flex: 1}}>11111111111111111111</span>
                <div style={{width: '30px'}}>
                    <button>1111</button>
                </div>
            </div>
            </AlbumsWrp>
        </div>
    )
}

export default memo(NewAlbums);