import styled from 'styled-components';

export const RecommedTop = styled.div`
    height: 30px;
    background-color: #C20C0C
`
export const RecommendList = styled.div `
    position: relative;
    top: -4px;
    display: flex;
    padding-left: 180px;

    .recommend-item {
        a {
            display: inline-block;
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            padding: 0 13px;
            margin: 7px 17px 0;
            color: #fff;
            &.active,&:hover {
                background-color: #9B0909;
                border-radius: 20px;
            }
        }
    }
`