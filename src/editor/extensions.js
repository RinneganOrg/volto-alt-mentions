import { ALTMENTIONS } from '../constants';
import { nanoid } from 'volto-slate/utils';
import { Transforms } from 'slate';

export const withAltMentions = (editor) => {
  const { normalizeNode, isInline } = editor;

  editor.isInline = (element) => {
    return element.type === ALTMENTIONS ? true : isInline(element);
  };

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    if (node.type === ALTMENTIONS && !node.data?.uid) {
      Transforms.setNodes(
        editor,
        {
          data: {
            uid: nanoid(5),
            altMentions: node.data?.altMentions,
          },
        },
        {
          at: path,
        },
      );
    }
    return normalizeNode(entry);
  };

  return editor;
};
