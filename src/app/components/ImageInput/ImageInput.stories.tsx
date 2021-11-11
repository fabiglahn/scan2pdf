import React from 'react';
import ImageInput from './ImageInput';

export default {
  component: ImageInput,
  title: 'Image Input',
};

export const Default = () => <ImageInput onImageUpload={console.log} />;
