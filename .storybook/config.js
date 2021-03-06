import { configure } from '@storybook/react';
import '@storybook/addon-options/register';
import { setOptions } from '@storybook/addon-options';
import { setConfig } from 'react-hot-loader';

setOptions({
  name: 'React Animation Libraries',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false
})

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

setConfig({ pureSFC: true });
