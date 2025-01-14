import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6943adecda9244de9431631b7e3fba70',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '0172354f-2461-40c9-8dfd-a8e7c355a006',

  // basic site info (required)
  name: 'Bionic Otaku',
  domain: 'https://bionicotaku.notion.site/bionicotaku/Bionic-Otaku-6943adecda9244de9431631b7e3fba70',
  author: 'Li Han',

  // open graph metadata (optional)
  description: 'Personal site of Li Han',

  // social usernames (optional)
  twitter: 'Jormun_',
  github: 'bionicotaku',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blogs',
      pageId: '6943adecda9244de9431631b7e3fba70'
    },
    {
      title: 'About',
      pageId: 'e63eb3db1763441787360a0a2740f7aa'
    },
    {
      title: 'Notes',
      pageId: 'ee54e7b98b1a4c699bf360930b5b2130'
    }
  ]
})
