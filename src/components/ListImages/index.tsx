import { useState } from 'react';
import * as S from './styles';
import { ImageShape } from './types';

interface ListImagesProps {
  data: Array<ImageShape>;
  onClick?: (image: string) => void;
}

export function ListImages({ data, onClick = () => {} }: ListImagesProps) {
  return (
    <S.Container>
      <ul>
        {data.map((item) => (
          <li
            data-testid={item.id}
            key={item.id}
            onClick={() => onClick(item.urls.full)}
          >
            <img src={item.urls.small} alt={item.alt_description} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
