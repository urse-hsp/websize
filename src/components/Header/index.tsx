import classnames from 'classnames';
import { Button } from 'antd';
import logo_img from '@/static/images/logo.png';
import logo_active_img from '@/static/images/logo_active.png';
import { useEffect, useState } from 'react';
import './index.less';
import { FadeDiv } from '@/components/Motion/AOSDiv';

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

  const click = () => {
    window.location.href = '/';
  };

  const login = () => {
    // 新标签页打开
    window.open('https://backend.dongya58.com/login', '_blank');
    // window.location.href = 'https://backend.dongya58.com/login';
  };

  return (
    <div className={classnames('header', isBlack ? 'header--black' : '')}>
      <FadeDiv className={classnames('header-content')}>
        <div>
          <img
            className={'header-logo'}
            src={!isBlack ? logo_img : logo_active_img}
            alt="logo"
            onClick={click}
          />
          {/* 动鸭 */}
        </div>
        <Button className={'header-login'} onClick={login}>
          登录
        </Button>
      </FadeDiv>
    </div>
  );
};
export default Index;
