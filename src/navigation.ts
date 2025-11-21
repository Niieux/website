import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homepage',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/Niieux/niieux-build', target: '_blank' }],
};

export const footerData = {
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
