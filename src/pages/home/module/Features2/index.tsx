import ItemTitle from '../../components/ItemTitle';
import './index.less';
import Content from '@/components/Content';
import weapp_img from '@/static/images/weapp.png';
import weapp_after_img from '@/static/images/weapp_after.png';

import pc_img from '@/static/images/pc.png';
import pc_after_img from '@/static/images/pc_after.png';

import { Col, Row } from 'antd';
import { ColProps } from '../Contents';
import {
  FadeSlideLeftDiv,
  FadeSlideRightDiv,
} from '@/components/Motion/AOSDiv';

const ColProps_ = {
  ...ColProps,
  md: 24,
};

const Index = () => {
  return (
    <Content className="features2" isFadeUpDiv={false}>
      <ItemTitle
        title="双端产品，完美协同"
        desc="普通用户使用微信小程序，工作人员在电脑或手机登录web管理后台，双端产品高效协同"
      />
      <Row className="features2-content" gutter={10} justify={'center'}>
        <Col {...ColProps_} className="features2-content-item">
          <FadeSlideRightDiv className={'features2-content-item-wrap'}>
            <img
              src={weapp_img}
              alt="features2"
              className="features2-content__weapp"
            />
            <img
              src={weapp_after_img}
              alt="features2"
              className="features2-content__after"
            />
          </FadeSlideRightDiv>
        </Col>
        <Col {...ColProps_} className="features2-content-item">
          <FadeSlideLeftDiv className={'features2-content-item-wrap'}>
            <img
              src={pc_img}
              alt="features1"
              className="features2-content__pc"
            />
            <img
              src={pc_after_img}
              alt="features2"
              className="features2-content__after"
            />
          </FadeSlideLeftDiv>
        </Col>
      </Row>
    </Content>
  );
};
export default Index;
