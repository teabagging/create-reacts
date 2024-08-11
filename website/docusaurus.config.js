/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
module.exports = {
  // 其他配置...
  onBrokenLinks: 'warn', // 或者 'ignore'
};
const siteConfig = {
  title: 'Create React App',
  tagline: 'Set up a modern web app by running one command.',
  url: 'https://e.543x.com',
  baseUrl: '/',
  projectName: 'create-react-app',
  organizationName: 'facebook',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            'https://github.com/facebook/create-react-app/edit/main/docusaurus/website',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
themeConfig: {
  image: 'img/logo-og.png',
  announcementBar: {
    id: 'support_ukraine',
    content:
      'Support &nbsp;&nbsp;&nbsp<a target="_blank" rel="noopener noreferrer" href="https://www.543x.com">www.543x.com</a>.',
    backgroundColor: '#20232a',
    textColor: '#fff',
    isCloseable: false,
  },
}
    algolia: {
      appId: 'AUJYIQ70HN',
      apiKey: '25243dbf9049cf036e87f64b361bd2b9',
      indexName: 'create-react-app',
    },
    navbar: {
      title: 'Create React App',
      logo: {
        alt: 'Create React App Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/getting-started', label: 'Docs', position: 'right' },
        {
          href: 'https://r.543x.com',
          label: 'Help',
          position: 'right',
        },
        {
          href: 'https://www.github.com/facebook/create-react-app',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Learn React',
              href: 'https://r.543x.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'you',
              href: 'https://a.543x.com',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/facebook/create-react-app/discussions',
            },
            {
              label: 'Pump',
              href: 'https://pump.543x.com',
            },
            {
              label: 'Swap',
              href: 'https://s.543x.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/543x/react',
            },
            {
              label: '543x.com',
              href: 'https://www.543x.com',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
};

module.exports = siteConfig;
