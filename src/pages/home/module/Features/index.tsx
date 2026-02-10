import './index.less';
import Content from '@/components/Content';

import { Col, Row } from 'antd';
import { ColProps } from '../Contents';
import ItemTitle from '../../components/ItemTitle';
import { FadeZoomOutUpDiv, FadeDiv } from '@/components/Motion/AOSDiv';
import Competition from '@/static/images/competition.png';
import Algorithm from '@/static/images/algorithm.png';
import check_png from '@/static/images/check.png';

const CompetitionData = {
  icon: Competition,
  title: '场馆管理系统',
  data: [
    '在线订场与支付',
    '会员卡储值与管理',
    '学员课程管理与记录',
    '体验课与促销卡券',
    '智能灯控与门禁',
    '系统数据分析报表',
  ],
};
const AlgorithmData = {
  icon: Algorithm,
  title: '赛事平台',
  data: [
    '智能评级算法系统',
    '赛事发布与管理',
    '在线报名与收款',
    '赛程编排与比分记录',
    '实时排名与积分系统',
    '持续增长的球员社群',
  ],
};

const Item = (props) => {
  const { data } = props;

  return (
    <FadeZoomOutUpDiv className={'features-col'}>
      <Col {...ColProps}>
        <div className={'features-item'}>
          <FadeDiv>
            <img
              src={data.icon}
              className="features-item__img"
              alt={data.title}
            />
          </FadeDiv>

          <FadeDiv>
            <h3 className="features-item__title">{data.title}</h3>
          </FadeDiv>
          <ul>
            {data.data.map((item, index) => (
              <FadeDiv
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay={index * 2 * 100}
                key={index}
              >
                <li className={'features-item__li'}>
                  <img
                    src={check_png}
                    className="features-item__check"
                    alt="check"
                  />
                  {item}
                </li>
              </FadeDiv>
            ))}
          </ul>
        </div>
      </Col>
    </FadeZoomOutUpDiv>
  );
};
const Index = () => {
  return (
    <Content
      isFadeUpDiv={false}
      className="features"
      classNames="features-wrapper"
    >
      <ItemTitle
        title="完整的生态系统"
        desc="场馆管理系统 + 赛事平台，智能化运营与引流转化形成闭环，助力场馆全方位发展"
      />
      <Row className="features-row" gutter={41} justify={'center'}>
        <Item data={CompetitionData} />
        <Item data={AlgorithmData} />
      </Row>
    </Content>
  );
};
export default Index;
