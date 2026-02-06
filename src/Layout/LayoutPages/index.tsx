import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/style/media.less';
import './index.less';

const Index = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Index;
