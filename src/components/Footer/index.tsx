import style from './index.module.less';
import classnames from 'classnames';
import { Divider } from 'antd';
import Content from '@/components/Content';

const Index = () => {
  return (
    <Content
      className={classnames(style['footer'])}
      classNames={style['footer-wrapper']}
    >
      <Divider style={{ margin: 0 }} />
      <div className={style['footer-content']}>
        Copyright © 2026 杭州动鸭科技有限公司 浙ICP备2025210727号
      </div>
    </Content>
  );
};
export default Index;
