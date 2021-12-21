import installFootnoteEditor from './editor';

const applyConfig = (config) => {
  config = installFootnoteEditor(config);

  return config;
};

export default applyConfig;
