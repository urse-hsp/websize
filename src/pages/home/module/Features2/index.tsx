import ItemTitle from '../../components/ItemTitle';
import './index.less';
import Content from '@/components/Content';
import weapp_img from '@/static/images/weapp.png';
import pc_img from '@/static/images/pc.png';
import { Col, Row } from 'antd';
import { ColProps } from '../Contents';

const Index = () => {
  return (
    <Content className="features2">
      <ItemTitle
        title="双端产品，完美协同"
        desc="普通用户使用微信小程序，工作人员在电脑或手机登录web管理后台，双端产品高效协同"
      />
      <Row className="features2-content">
        <Col {...ColProps} className="features2-content__weapp-col">
          <img
            src={weapp_img}
            alt="features2"
            className="features2-content__weapp"
          />
        </Col>
        <Col {...ColProps}>
          <img src={pc_img} alt="features1" className="features2-content__pc" />
        </Col>
      </Row>
    </Content>
  );
};
export default Index;
