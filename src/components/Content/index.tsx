import classNames from 'classnames';
import React from 'react';

interface IndexType {
  className?: string;
  classNames?: string;
  children?: React.ReactNode;
}

const Index: React.FC<IndexType> = (props) => {
  return (
    <div className={props.classNames}>
      <div className={classNames('home-page', props.className)}>
        {props.children}
      </div>
    </div>
  );
};
export default Index;
