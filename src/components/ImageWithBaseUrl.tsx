import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

interface ImageWithBaseUrlProps {
  src: string;
  width: string;
  title: string;
}

export function ImageWithBaseUrl({ src, width, title }: ImageWithBaseUrlProps) {
  return <img src={useBaseUrl(src)} width={width} title={title} alt={title} />;
}

interface ThemedImageWithBaseUrlProps {
  srcLight: string;
  srcDark: string;
  width: string;
  title: string;
}

export function ThemedImageWithBaseUrl({
  srcLight,
  srcDark,
  width,
  title
}: ThemedImageWithBaseUrlProps) {
  return (
    <ThemedImage
      sources={{ light: useBaseUrl(srcLight), dark: useBaseUrl(srcDark) }}
      width={width}
      title={title}
    />
  );
}

export default ImageWithBaseUrl;
