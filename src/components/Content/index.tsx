import React from 'react';

interface IndexType {
  className?: string;
  children?: React.ReactNode;
}

const Index: React.FC<IndexType> = (props) => {
  return (
    <div className={props.className}>
      <div className={'home-page'}>{props.children}</div>
    </div>
  );
};
export default Index;
