import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { glob } from 'glob';
import path from 'node:path';
import { pluginLess } from '@rsbuild/plugin-less';

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
      entry: entry,
      // entry: {
      //   // home: './src/pages/home/index.tsx',
      //   home: './src/pages2/home/main.tsx',
      // },
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

      //  template: './public/index.html',
      title({ entryName }) {
        const map = {
          home: '动鸭官网 - 首页',
          about: '关于我们 - 动鸭官网',
        };
        return map[entryName] || '动鸭官网';
        // return `${entryName} - 动鸭官网`;
      },
      // meta({ value }) {
      //   // console.log(value, 2222);

      //   // value.description = '公司官网首页介绍';
      //   // value.keywords = '公司, 官网, 产品';

      //   // return value;
      //   return {
      //     charset: { charset: 'UTF-8' },
      //     viewport: 'width=device-width, initial-scale=1',
      //     description:
      //       '动鸭是一家专注于XXX的公司，致力于为用户提供XXX解决方案。',
      //     keywords: '动鸭, XXX, XXX平台, XXX服务',
      //     author: '动鸭',
      //     robots: 'index, follow',

      //     // Open Graph（社交分享）
      //     'og:title': '动鸭官网 - 专注于XXX的专业平台',
      //     'og:description':
      //       '动鸭是一家专注于XXX的公司，致力于为用户提供XXX解决方案。',
      //     'og:type': 'website',
      //     'og:url': 'https://www.dongya.com/',
      //     'og:image': 'https://www.dongya.com/cover.jpg',

      //     // Twitter 卡片
      //     'twitter:card': 'summary_large_image',
      //     'twitter:title': '动鸭官网 - 专注于XXX的专业平台',
      //     'twitter:description':
      //       '动鸭是一家专注于XXX的公司，致力于为用户提供XXX解决方案。',
      //     'twitter:image': 'https://www.dongya.com/cover.jpg',
      //   };
      // },
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
