import { useRef, useState } from 'react';
import { getSummaryArray } from 'utils/get-summary-array';
import * as S from './styles';
import { ListObjectShape } from './types';

interface ListMessagesProps {
  title: string;
  data: Array<ListObjectShape>;
  loading?: boolean;
  error?: boolean;
}

export function ListMessages({
  title,
  data,
  loading = false,
  error = false,
}: ListMessagesProps) {
  return (
    <S.Container>
      <h2 className="smallTitle">{title}</h2>
      {!error && loading && <p>Carregando...</p>}
      {!loading && error && (
        <p>
          Falha ao realizar a consulta, por favor, atualize a página ou tente
          novamente mais tarde.
        </p>
      )}
      {!loading && !error && (
        <ul style={{ maxHeight: '100%' }}>
          {data.map((item) => (
            <li key={item.key}>
              <strong>{item.creatorSlug}</strong>
              <p>{item.message}</p>
            </li>
          ))}
        </ul>
      )}
    </S.Container>
  );
}
