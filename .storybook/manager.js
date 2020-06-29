import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  showRoots: true,
  theme: create({
    base: 'light',
    brandTitle: 'Bïfrost',
    brandUrl: 'https://videotron.com/',
    brandImage: '../projects/front-end-library/src/assets/bifrost-logo.png',
  })
});
