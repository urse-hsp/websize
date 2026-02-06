import style from './index.module.less';

export const ItemTitle = (props) => {
  const { title, desc } = props;
  return (
    <div className={style['item']}>
      <div className={style['item-title']}>{title}</div>
      <div className={style['item-desc']}>{desc}</div>
    </div>
  );
};

export default ItemTitle;
