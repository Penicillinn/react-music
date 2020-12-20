import styled from 'styled-components';

export const BannerWrp = styled.div `
    background: url(${props => props.currentpic}) center center/6000px;
    height: 270px;
    background-color: red;
    .banner-content {
        position: relative;
        display: flex;
    }
`

export const BannerLeft = styled.div`
    flex: 1;
    overflow: hidden;
    .banner-item {
        height: 270px;
    }
    img {
        width: 100%;
    }
`
export const BannerRight = styled.a.attrs({
    href: "https://music.163.com/#/download",
    target: "_blank"
})`
    display: inline-block;
    width: 250px;
    height: 270px;
    background: url(${require("@assets/images/download.png")});
`

export const BannerControl = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 50%;
    left: -68px;
    right: -68px;
    transform: translateY(-50%);
    .btn {
        width: 37px;
        height: 63px;
        background-image: url(${require("@assets/images/banner_sprite.png")});
        background-color: transparent;
        border: none;
        outline: none;
        &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, .1);
        }
    }
    .btn-left {
        background-position: 0 -360px;
    }
    .btn-right {
        background-position: 0 -508px;
    }
`