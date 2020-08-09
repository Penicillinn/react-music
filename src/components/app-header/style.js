import styled from 'styled-components';
const hotImg = require('@/assets/images/sprite_01.png')

export const HeaderWrp = styled.div`
    height: 75px;
    color: #fff;
    background-color: #242424;
    font-size: 14px;
    
    .content {
        display: flex;
        justify-content: space-between;
        height: 70px;
    }

    .divide {
        height: 5px;
        background-color: #C20C0C;
    }
`

export const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-between;
    .logo {
        display: block;
        width: 179px;
        height: 69px;
        text-indent: -9999px;
        background-position: 0 0;
    }
    .header-select {
        display: flex;
        align-items: center;
        .select-item {
            a {
                position: relative;
                display: block;
                padding: 0 20px;
                height: 70px;
                line-height: 70px;
                &:hover,&.active {
                    background-color: #000;
                    color: #fff;
                }
            }
            .active .icon {
                position: absolute;
                bottom: -1px;
                left: 50%;
                transform: translateX(-50%);
                width: 12px;
                height: 7px;
                background-position: -226px 0;
            }
            &:last-child a {
                position: relative;
                ::after {
                    position: absolute;
                    width: 28px;
                    height: 19px;
                    content: '';
                    background-image: url(${hotImg});
                    background-position: -190px 0;
                    top: 20px;
                    right: -15px;
                }
            }
        }
        
    }
`
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;

    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
        input::placeholder {
            font-size: 12px;
        }
    }

    .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
    }

`