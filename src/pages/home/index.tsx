import LayoutPages from '@/Layout/LayoutPages';
import Banners from './module/Banners';
import Contents from './module/Contents';
import Features from './module/Features';
import Features2 from './module/Features2';
import Teams from './module/Teams';

export default function Home() {
  return (
    <LayoutPages>
      <Banners />
      <Contents />
      <Features />
      <Features2 />
      <Teams />
    </LayoutPages>
  );
}
