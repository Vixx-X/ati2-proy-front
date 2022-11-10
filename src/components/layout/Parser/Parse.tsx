import React from 'react';

import { Markup } from 'interweave';

interface IGenericComponent {
  content: string;
}

const GenericComponent = ({ content }: IGenericComponent) => {
  return <Markup content={content} />;
};

export default GenericComponent;
