import classNames from 'classnames';
import React from 'react';
import { FadeUpDiv } from '@/components/Motion/AOSDiv';
import './index.less';

interface IndexType {
  className?: string;
  classNames?: string;
  children?: React.ReactNode;
  isFadeUpDiv?: boolean;
}

const Index: React.FC<IndexType> = (props) => {
  const { isFadeUpDiv = true } = props;
  return (
    <div className={classNames('content', props.classNames)}>
      {isFadeUpDiv ? (
        <FadeUpDiv className={classNames('home-page', props.className)}>
          {props.children}
        </FadeUpDiv>
      ) : (
        <div className={classNames('home-page', props.className)}>
          {props.children}
        </div>
      )}
    </div>
  );
};
export default Index;
