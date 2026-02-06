import './index.less';
import code_img from '@/static/images/codepng.png';
import email_img from '@/static/images/email.png';

import Content from '@/components/Content';

const Index = () => {
  return (
    <>
      <Content className="teams" classNames="teams-wrapper">
        <img src={code_img} alt="teams" className="teams-code" />
        <div className="teams-text">扫码加微信咨询</div>
        <div className={'teams-email-text'}>
          <img src={email_img} alt="teams" className="teams-email" />{' '}
          reason@dongya58.com
        </div>
      </Content>
    </>
  );
};
export default Index;
