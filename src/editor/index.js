import { defineMessages } from 'react-intl'; // , defineMessages
import { makeInlineElementPlugin } from 'volto-slate/components/ElementEditor';
import { ALTMENTIONS } from '../constants';
import { AltMentionsElement } from './render';
import AltMentionsEditor from './AltMentionsEditor';
import { AltMentionsEditorSchema } from './schema';
import mentionsSVG from '@plone/volto/icons/add-user.svg';
import { withAltMentions } from './extensions';

const messages = defineMessages({
  edit: {
    id: 'Edit alt mentions',
    defaultMessage: 'Edit alt mentions',
  },
  delete: {
    id: 'Remove alt mentions',
    defaultMessage: 'Remove alt mentions',
  },
});

export default function install(config) {
  const opts = {
    title: 'AltMentions',
    pluginId: ALTMENTIONS,
    elementType: ALTMENTIONS,
    pluginEditor: AltMentionsEditor,
    element: AltMentionsElement,
    isInlineElement: true,
    extensions: [withAltMentions],
    hasValue: (formData) => !!formData.altMentions,
    toolbarButtonIcon: mentionsSVG,
    editSchema: AltMentionsEditorSchema,
    messages,
  };
  const [installAltMentionsEditor] = makeInlineElementPlugin(opts);
  config = installAltMentionsEditor(config);

  const { slate } = config.settings;

  slate.toolbarButtons = [...(slate.toolbarButtons || []), 'altMentions'];
  slate.expandedToolbarButtons = [
    ...(slate.expandedToolbarButtons || []),
    'altMentions',
  ];

  return config;
}
