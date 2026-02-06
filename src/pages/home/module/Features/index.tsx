import './index.less';
import Content from '@/components/Content';
import features2_img from '@/static/images/features2.png';
import features1_img from '@/static/images/features1.png';
import { Col, Row } from 'antd';
import { ColProps } from '../Contents';
import ItemTitle from '../../components/ItemTitle';

const Index = () => {
  return (
    <Content className="features" classNames="features-wrapper">
      <ItemTitle
        title="完整的生态系统"
        desc="场馆管理系统 + 赛事平台，智能化运营与引流转化形成闭环，助力场馆全方位发展"
      />
      <Row className="features-row">
        <Col {...ColProps}>
          <img src={features2_img} alt="features2" />
        </Col>
        <Col {...ColProps}>
          <img src={features1_img} alt="features1" />
        </Col>
      </Row>
    </Content>
  );
};
export default Index;
