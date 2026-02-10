interface Props {
  className?: string;
  children?: React.ReactNode;
  'data-aos'?: string;
}

// ## 1️⃣ Fade（淡入/淡出动画）

// 淡入
export const FadeDiv = (props: Props) => {
  return <div data-aos="fade" {...props} />;
};

// 从下方淡入
export const FadeUpDiv = (props: Props) => {
  return <div data-aos="fade-up" {...props} />;
};

// 从上方淡入
export const FadeDownDiv = (props: Props) => {
  return <div data-aos="fade-down" {...props} />;
};
// 从左侧淡入
export const FadeLeftDiv = (props: Props) => {
  return <div data-aos="fade-left" {...props} />;
};
// 从右侧淡入
export const FadeRightDiv = (props: Props) => {
  return <div data-aos="fade-right" {...props} />;
};

// ## 2️⃣ Flip（翻转动画）

// 左翻
export const FlipLeftFlipDiv = (props: Props) => {
  return <div data-aos="flip-left" {...props} />;
};
// 下翻
export const FlipDownFlipDiv = (props: Props) => {
  return <div data-aos="flip-down" {...props} />;
};

// ## 3️⃣ Slide（滑动动画）

// 向左滑入
export const FadeSlideLeftDiv = (props: Props) => {
  return <div data-aos="slide-left" {...props} />;
};
// 向右滑入
export const FadeSlideRightDiv = (props: Props) => {
  return <div data-aos="slide-right" {...props} />;
};

// ## 4️⃣ Zoom（缩放动画）

// 从下缩小进入
export const FadeZoomOutUpDiv = (props: Props) => {
  return <div data-aos="zoom-out-up" {...props} />;
};

// 从左缩小进入
export const FadeZoomOutLeftDiv = (props: Props) => {
  return <div data-aos="zoom-out-left" {...props} />;
};

// 从右缩小进入
export const FadeZoomOutRightDiv = (props: Props) => {
  return <div data-aos="zoom-out-right" {...props} />;
};
