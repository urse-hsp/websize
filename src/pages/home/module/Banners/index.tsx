import './index.less';
import classNames from 'classnames';
// import banners_img from '@/static/images/banners.png';
import { Button } from 'antd';

const Index = (props) => {
  return (
    <div className={classNames('banners')}>
      <div className="banners-content">
        <div className={'banners-text'}>
          <div>共建智能、有趣、可持续的 体育运动新生态</div>
          <Button className="banners-button" type="default" shape="round">
            联系我们
          </Button>
        </div>
      </div>
      {/* <img src={banners_img} alt="banners" className="banners-img" /> */}
    </div>
  );
};
export default Index;
