import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/style/media.less';
import './index.less';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { FloatButton } from 'antd';
import { ConfigProvider } from 'antd';

AOS.init({
  duration: 800,
});

const Index = ({ children }) => {
  useEffect(() => {
    // AOS.refresh();
  }, []);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#3DCC89' } }}>
      <div className="layout">
        <Header />
        {children}
        <FloatButton.BackTop visibilityHeight={1200} />
        <Footer />
      </div>
    </ConfigProvider>
  );
};
export default Index;
