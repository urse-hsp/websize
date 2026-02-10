import './index.less';
import code_img from '@/static/images/code.png';
import email_img from '@/static/images/email.png';
import { FadeUpDiv } from '@/components/Motion/AOSDiv';

import Content from '@/components/Content';

const Index = () => {
  return (
    <Content className="teams" classNames="teams-wrapper">
      <FadeUpDiv>
        <img src={code_img} alt="teams" className="teams-code" />
      </FadeUpDiv>

      <FadeUpDiv className="teams-text">扫码加微信咨询</FadeUpDiv>
      <FadeUpDiv className={'teams-email-text'}>
        <img src={email_img} alt="teams" className="teams-email" />{' '}
        eason@dongya58.com
      </FadeUpDiv>
    </Content>
  );
};
export default Index;
