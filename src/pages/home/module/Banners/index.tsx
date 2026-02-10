import './index.less';
import classNames from 'classnames';
import { Button } from 'antd';
import { FadeUpDiv, FlipDownFlipDiv } from '@/components/Motion/AOSDiv';

const Index = () => {
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
            共建智能、有趣、可持续的体育运动新生态
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
      {/* <img src={banners_img} alt="banners" className="banners-img" /> */}
      <video
        className="banners-video"
        src="https://pic.dongya58.com/dongyawebsitevideo720_01.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};
export default Index;
