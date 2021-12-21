export const AltMentionsEditorSchema = {
  title: 'AltMentions entry',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['altMentions'],
    },
  ],
  properties: {
    altMentions: {
      title: 'Reference text',
      widget: 'text',
      choices: [],
    },
  },
  required: [],
};
