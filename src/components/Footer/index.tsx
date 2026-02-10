import classnames from 'classnames';
import { Divider } from 'antd';
import Content from '@/components/Content';
import './index.less';

const Index = () => {
  return (
    <Content
      isFadeUpDiv={false}
      className={classnames('footer')}
      classNames="footer-wrapper"
    >
      <Divider style={{ margin: 0 }} />
      <p className={'footer-content'}>
        Copyright © 2025
        <span>杭州动鸭科技有限公司</span>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          浙ICP备2025210727号
        </a>
      </p>
    </Content>
  );
};
export default Index;
