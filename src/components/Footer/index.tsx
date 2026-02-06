import style from './index.module.less';
import classnames from 'classnames';

const Index = () => {
  return (
    <div className={classnames(style['footer'])}>
      <div className="home-page">
        Copyright © 2026 杭州动鸭科技有限公司 浙ICP备2025210727号
      </div>
    </div>
  );
};
export default Index;
