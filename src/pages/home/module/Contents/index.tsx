import { Col, Row } from 'antd';
import './index.less';
import contents1_img from '@/static/images/contents1.png';
import contents2_img from '@/static/images/contents2.png';
// import contents2_1_img from '@/static/images/contents2_1.png';
// import contents2_2_img from '@/static/images/contents2_2.png';
import Content from '@/components/Content';
import {
  FadeUpDiv,
  FlipLeftFlipDiv,
  FadeDiv,
} from '@/components/Motion/AOSDiv';
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const ColProps: any = {
  span: 24, // 栅格占位格数，为 0 时相当于 display: none
  // xs: 24, // 窗口宽度 < 576px
  sm: 24, // 窗口宽度 ≥ 576px
  md: 12, // 窗口宽度 ≥ 768px
  xl: 12, // 窗口宽度 ≥ 1200px
};

const Index = () => {
  const screens = useBreakpoint();

  return (
    <Content className="contents">
      <Row gutter={20} justify="center">
        <Col className="gutter-row" {...ColProps} order={screens.md ? 0 : 2}>
          <FlipLeftFlipDiv
            data-aos-anchor-placement="top-bottom"
            className="contents-img1"
          >
            <img src="https://pic.dongya58.com/contents1.png" alt="contents1" />
          </FlipLeftFlipDiv>
        </Col>
        <Col className="gutter-row" {...ColProps} order={screens.md ? 0 : 1}>
          <FadeDiv
            data-aos-anchor-placement="top-bottom"
            className="contents-item__type"
          >
            智能驱动
          </FadeDiv>
          <FadeDiv className="contents-item__title">
            专为运动空间打造的智能运营平台
          </FadeDiv>
          <FadeUpDiv className="contents-item__desc">
            我们相信，科技应该让管理变得更简单，而不是更复杂。我们始终坚持产品的易用性和实用性，让每一位场馆管理者都能轻松上手，告别传统管理的琐碎与低效，迎接以数据和体验为核心的新一代运动空间运营方式。
          </FadeUpDiv>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" {...ColProps} order={2}>
          <FlipLeftFlipDiv className="contents-img2">
            <img src="https://pic.dongya58.com/contents2.png" alt="contents2" />
            {/* <FadeRightDiv className={'contents-img2--2'}>
              <img src={contents2_1_img} alt="contents2" />
            </FadeRightDiv>

            <FadeSlideRightDiv className={'contents-img2--3--wrap'}>
              <img
                src={contents2_2_img}
                alt="contents2"
                className={'contents-img2--3'}
              />
            </FadeSlideRightDiv> */}
          </FlipLeftFlipDiv>
        </Col>
        <Col className="gutter-row" {...ColProps} order={1}>
          <FadeDiv className="contents-item__type">赛事平台</FadeDiv>
          <FadeDiv className="contents-item__title">
            激活运动社群增长的核心引擎
          </FadeDiv>
          <FadeUpDiv className="contents-item__desc">
            我们不止提供智能工具，更是运动场馆增长的智慧引擎。“动鸭”赛事平台已汇聚庞大、活跃且不断增长的运动社群，这里不仅是球员切磋技艺、记录成长的赛场，也帮助合作场馆轻松举办各类比赛，带来持续的人气与收入增长。
          </FadeUpDiv>
        </Col>
      </Row>
    </Content>
  );
};
export default Index;
