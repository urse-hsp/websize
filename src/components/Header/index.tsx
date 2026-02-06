import classnames from 'classnames';
import { Button } from 'antd';
import logo_img from '@/static/images/logo.png';
import logo_active_img from '@/static/images/logo_active.png';
import React, { useEffect, useState } from 'react';
import './index.less';

const Index = () => {
  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      // console.log('滚动中：', scrollTop, isBlack);
      const height = 80;
      if (scrollTop > height && !isBlack) {
        setIsBlack(true);
      } else if (scrollTop <= height && isBlack) {
        setIsBlack(false);
      }
    });
  }, [isBlack]);

  return (
    <div className={classnames('header', isBlack ? 'header--black' : '')}>
      <div className={classnames('header-content')}>
        <div>
          <img
            className={'header-logo'}
            src={!isBlack ? logo_img : logo_active_img}
            alt="logo"
          />
          动鸭
        </div>
        <Button className={'header-login'}>登录</Button>
      </div>
    </div>
  );
};
export default Index;
