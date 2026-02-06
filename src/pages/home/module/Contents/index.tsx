import { Col, Row } from 'antd';
import './index.less';
import contents1_img from '@/static/images/contents1.png';
import contents2_img from '@/static/images/contents2.png';
import Content from '@/components/Content';

export const ColProps = {
  span: 24,
  md: 12,
  xl: 12,
};

const Index = () => {
  return (
    <Content className="contents">
      <Row className="contents-row">
        <Col className="gutter-row" {...ColProps}>
          <img src={contents1_img} alt="contents1" className="contents-img1" />
        </Col>
        <Col className="gutter-row" {...ColProps}>
          <div className="contents-item__type">智能驱动</div>
          <div className="contents-item__title">
            专为运动空间打造的智能运营平台
          </div>
          <div className="contents-item__desc">
            我们相信，科技应该让管理变得更简单，而不是更复杂。我们始终坚持产品的易用性和实用性，让每一位场馆管理者都能轻松上手，告别传统管理的琐碎与低效，迎接以数据和体验为核心的新一代运动空间运营方式。
          </div>
        </Col>
      </Row>
      <Row className="contents-row">
        <Col className="gutter-row" {...ColProps}>
          <div className="contents-item__type">赛事平台</div>
          <div className="contents-item__title">激活运动社群增长的核心引擎</div>
          <div className="contents-item__desc">
            我们不止提供智能工具，更是运动场馆增长的智慧引擎。“动鸭”赛事平台已汇聚庞大、活跃且不断增长的运动社群，这里不仅是球员切磋技艺、记录成长的赛场，也帮助合作场馆轻松举办各类比赛，带来持续的人气与收入增长。
          </div>
        </Col>
        <Col className="gutter-row" {...ColProps}>
          <div className="contents-img2">
            <img src={contents2_img} alt="contents2" />
          </div>
        </Col>
      </Row>
    </Content>
  );
};
export default Index;
