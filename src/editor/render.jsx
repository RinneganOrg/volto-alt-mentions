import React, { useEffect, useState } from 'react';
import { useEditorContext } from 'volto-slate/hooks';
import { getAllBlocksAndSlateFields } from '@eeacms/volto-slate-footnote/editor/utils';
import { useSelector } from 'react-redux';
import { Label } from 'semantic-ui-react';

export const AltMentionsElement = (props) => {
  const { attributes, children, element, mode, extras } = props;
  const { data = {} } = element;
  const editor = useEditorContext();
  const initialFormData = useSelector((state) => state?.content?.data || {});
  console.log('AltMentionsElement', { data }, { element });

  useEffect(() => {
    const blockProps = editor?.getBlockProps ? editor.getBlockProps() : null;
    const metadata = blockProps
      ? blockProps.metadata || blockProps.properties
      : extras?.metadata || {};
    const blocks = getAllBlocksAndSlateFields(metadata);
    const storeBlocks = getAllBlocksAndSlateFields(initialFormData);

    console.log({ blocks }, { storeBlocks });
  });

  return (
    <>
      {mode === 'view' ? (
        <span>
          <Label as="a" color="blue" image>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img
                src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
                alt="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
              />
              <span>{children}</span>
              <Label.Detail>Friend</Label.Detail>
            </div>
          </Label>
        </span>
      ) : (
        <span>
          <Label as="a" color="blue" image>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img
                src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
                alt="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
              />
              <span>{children}</span>
              <Label.Detail>Friend</Label.Detail>
            </div>
          </Label>
        </span>
      )}
    </>
  );
};
