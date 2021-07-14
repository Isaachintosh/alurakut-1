import { useState } from 'react';
import * as S from './styles';
import { ListObjectShape } from './types';

interface ListInterests {
  title: string;
  data: Array<ListObjectShape>;
  showSeeMore?: boolean;
  onClickToggleSeeMore?: () => void;
}

export function ListInterests({
  title,
  data,
  showSeeMore = false,
  onClickToggleSeeMore = () => {},
}: ListInterests) {
  const [seeMoreText, setSeeMoreText] = useState('Ver mais');

  function handleClickSeeMore() {
    setSeeMoreText((prevState) =>
      prevState === 'Ver mais' ? 'Ver menos' : 'Ver mais'
    );
    onClickToggleSeeMore();
  }

  return (
    <S.Container>
      <h2 className="smallTitle">{title}</h2>
      <ul style={{ maxHeight: !showSeeMore ? '220px' : '100%' }}>
        {data.map((item) => (
          <li key={item.key}>
            <a href={item.href}>
              {/* TODO should render image placeholder if src is invalid */}
              <img src={item.imageSrc} />
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
      {showSeeMore && (
        <p className="seeMore" onClick={handleClickSeeMore}>
          {seeMoreText}
        </p>
      )}
    </S.Container>
  );
}
