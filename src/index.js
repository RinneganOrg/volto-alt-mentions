import { ALTMENTIONS } from './constants';
import installFootnoteEditor from './editor';

const applyConfig = (config) => {
  config.blocks.blocksConfig.slateAltMentions = {
    id: 'slateAltMentions',
    title: 'AltMentions',
    group: 'text',
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    autoAdd: false,
  };

  config.settings.AltMentions = [
    ...(config.settings.AltMentions || []),
    ALTMENTIONS,
  ];
  config = installFootnoteEditor(config);

  return config;
};

export default applyConfig;
