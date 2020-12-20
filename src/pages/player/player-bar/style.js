import styled from 'styled-components';

export const PlayBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 47px;
  background-position: 0 0;
  background-repeat: repeat;
`;

export const BarContent = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  height: 47px;
  align-items: center;
  justify-content: space-between;
  img {
    width: 35px;
    height: 35px;
  }
  .img {
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: space-around;
  }
  .progress {
    display: flex;
    width: 600px;
    align-items: center;
  .time {
    font-size: 12px;
    color: #fff;
  }
  }`