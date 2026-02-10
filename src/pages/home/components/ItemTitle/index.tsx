import style from './index.module.less';
import { FadeDiv, FadeUpDiv } from '@/components/Motion/AOSDiv';

export const ItemTitle = (props) => {
  const { title, desc } = props;
  return (
    <div className={style['item']}>
      <FadeDiv data-aos="fade" className={style['item-title']}>
        {title}
      </FadeDiv>
      <FadeUpDiv className={style['item-desc']}>{desc}</FadeUpDiv>
    </div>
  );
};

export default ItemTitle;
