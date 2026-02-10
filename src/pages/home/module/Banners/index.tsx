import './index.less';
import classNames from 'classnames';
import { Button } from 'antd';
import { FadeUpDiv, FlipDownFlipDiv } from '@/components/Motion/AOSDiv';
import { useEffect } from 'react';
import poster from '@/static/images/banners.jpg';

const Index = () => {
  useEffect(() => {
    // 等待用户触摸屏幕后启动视频播放
    document.addEventListener('touchstart', function () {
      const video = document.getElementById('bannerVideo');
      if (video) {
        video.play().catch((err) => {
          console.error('播放失败：', err);
        });
      }
    });
  }, []);

  const click = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', // 平滑滚动
    });
  };

  return (
    <div className={classNames('banners')}>
      <div className="banners-content">
        <div className={'banners-text'}>
          <FlipDownFlipDiv>
            共建智能、有趣、可持续的
            <div>体育运动新生态</div>
          </FlipDownFlipDiv>
          <FadeUpDiv>
            <Button
              className="banners-button"
              type="default"
              shape="round"
              onClick={click}
            >
              联系我们
            </Button>
          </FadeUpDiv>
        </div>
      </div>
      <video
        className="banners-video"
        src="https://pic.dongya58.com/dongyawebsitevideo720_01.mp4"
        autoPlay
        muted
        loop
        playsInline
        id="bannerVideo"
        poster={poster}
      />
    </div>
  );
};
export default Index;
