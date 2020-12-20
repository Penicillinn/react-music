import styled from 'styled-components';

export const AlbumsWrp = styled.div`
    position: relative;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    .test div {
        display: none;
    }
    .test:hover div {
        display: block
    }

    .page-wrp {
        width: 645px;
        margin-left: 50%;
        transform: translateX(-50%);
        height: 100%;
        .per-page {
            display: flex !important;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 28px;
            .list-item {
                position: relative;
                width: 118px;
                height: 107px;
                img {
                    width: 100px;
                    height: 100px;
                }
                .cover {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background-position: 0 -570px;
                    text-indent: -9999px;
                }
            }
            a {
                font-size: 13px;
                color: #666;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`
export const BtnArrow = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 50%;
    left: 7px;
    right: 7px;
    transform: translateY(-50%);
    height: 17px;
    .arrow {
        display: inline-block;
        width: 17px;
        height: 17px;
    }
    .left {
        background-position: -260px -75px;
    }
    .right {
        background-position: -300px -75px;
    }
    span {
        cursor: pointer;
    }
    
`