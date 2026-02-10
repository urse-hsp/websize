import './index.less';
import classNames from 'classnames';
import { Button } from 'antd';
import { FadeUpDiv, FlipDownFlipDiv } from '@/components/Motion/AOSDiv';
import { useEffect } from 'react';
// import poster from '@/static/images/banners.jpg';

const Index = () => {
  // 播放视频的函数
  const playVideo = () => {
    const video = document.getElementById('bannerVideo');
    if (video) {
      // 设置为 muted 以支持自动播放
      video.muted = true;
      video.play().catch((err) => {
        console.error('播放失败：', err);
      });
    }
  };

  useEffect(() => {
    // 触摸事件（安卓和苹果都可以触发）
    const handleTouchStart = () => {
      playVideo();
    };

    // 点击事件（确保在安卓设备上触发）
    const handleClick = () => {
      playVideo();
    };

    // 触摸结束事件（安卓设备有时需要 touchend ）
    const handleTouchEnd = () => {
      playVideo();
    };

    // 注册事件监听器
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('click', handleClick);
    document.addEventListener('touchend', handleTouchEnd);

    // 清理事件监听器
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchend', handleTouchEnd);
    };
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
        poster="https://pic.dongya58.com/banners.jpg"
      />
    </div>
  );
};
export default Index;
