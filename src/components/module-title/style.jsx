import styled from 'styled-components';

export const ModuleWrp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 33px;
    padding: 0 10px 4px 34px;
    border-bottom: 2px solid #C10D0C;
    background-position: -225px -156px;
    a,span{
        color: #666;
        font-size: 12px;
    }
    a:hover {
        color: #666;
        text-decoration: underline;
    }
`

export const TitleLeft = styled.div`
    display: flex;
    align-items: center;
    .title {
        margin-right: 20px;
    }
    .key-list {
        display: flex;
    }
    .key-item {
        
    }
    .divider {
        margin: 0 15px;
    }
`
export const TitleRight = styled.div`
    display: flex;
    align-items: center;
    .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-position: 0 -240px;
        margin-left: 4px;
    }

`