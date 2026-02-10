import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { glob } from 'glob';
import path from 'node:path';
import { pluginLess } from '@rsbuild/plugin-less';
import POSTCSS from './config/postcss.config';

export default defineConfig(async () => {
  const entryFiles = await glob('./src/**/main.{ts,tsx,js,jsx}');
  const entry = Object.fromEntries(
    entryFiles.map((file) => {
      const entryName = path.basename(path.dirname(file));
      return [entryName, `./${file}`];
    }),
  );

  return {
    plugins: [pluginReact(), pluginLess()],
    source: {
      // entry 中的每一个入口注册 html-rspack-plugin，并生成对应的 HTML 文件
      // entry: entry,
      entry: {
        // home: './src/pages/home/index.tsx',
        index: './src/pages/home/main.tsx',
      },
      alias: {
        '@': './src',
      },
    },
    html: {
      // seo 配置
      // title	全站默认标题
      // description	搜索结果简介
      // keywords	关键词补充
      // og:*	微信/社交平台分享卡片
      // twitter:*	推特分享卡片
      // canonical	防止重复页面降权
      // robots	允许搜索引擎收录

      template: './public/index.html',
      //  使用template 后需要吧模版中的title标签删除，否则不会被覆盖
      title({ entryName }) {
        const map = {
          index: '共建智慧体育新生态',
          about: '关于我们',
        };
        const title = map[entryName] || '动鸭官网';
        return `动鸭科技 | ${title}`;
      },
      meta({ value }) {
        const title =
          '动鸭科技 | 智慧体育场馆管理系统_体育培训与赛事数字化解决方案';
        const description =
          '专注体育行业数字化升级，提供体育场馆预约、会员运营、赛事系统、私教排课、一站式SaaS解决方案。已服务300+体育场馆，提升运营效率50%以上，助力体育行业数字化转型。';
        const keywords =
          '动鸭,DuckGo,动鸭科技,动鸭官网,动鸭体育平台,动鸭体育,动鸭赛事系统,动鸭小程序,订场小程序,场馆预约系统,网球场馆小程序,羽毛球场馆小程序,网球俱乐部小程序,体育培训软件,会员管理系统,体育赛事系统,UTR比赛,运动俱乐部管理,运动场馆灯控系统,智慧体育解决方案,体育场馆预约系统,SaaS体育管理平台,官网,小程序,APP';

        const logo = 'https://dongya58.com/favicon.png';

        return {
          charset: { charset: 'UTF-8' },
          viewport: 'width=device-width, initial-scale=1',
          description: description,
          keywords: keywords,
          author: '动鸭',
          robots: 'index, follow',

          // Open Graph（社交分享）【微信 / Facebook / LinkedIn / QQ 等】
          'og:title': title,
          'og:description': description,
          'og:type': 'website',
          'og:url': 'https://dongya58.com/', // 当前页面的正式线上访问地址
          'og:image': logo, // 分享时显示的大图封面

          // Twitter 卡片
          'twitter:card': 'summary_large_image',
          'twitter:title': title,
          'twitter:description': description,
          'twitter:image': logo, // 和 og:image 作用一样
        };
      },
    },
    tools: {
      postcss: (opts, { addPlugins }) => {
        const viewportPlugin = require('postcss-px-to-viewport')(POSTCSS);
        addPlugins(viewportPlugin);
      },
    },
    // server: {
    //   printUrls({ routes }) {
    //     /**
    //      * [
    //      *   { entryName: 'index', pathname: '/' },
    //      *   { entryName: 'detail', pathname: '/detail' }
    //      * ]
    //      */
    //     // console.log(routes);
    //   },
    // },
  };
});
