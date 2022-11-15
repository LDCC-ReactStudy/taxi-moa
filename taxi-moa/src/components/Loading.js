import React from 'react';
import {Background, LoadingText} from './LoadingStyles';

export default () => {
    return (
      <Background>
        <LoadingText>잠시만 기다려 주세요.</LoadingText>
        <img src="img/Bean Eater-1s-200px.gif" alt="로딩중" width="15%" />
      </Background>
    );
  };