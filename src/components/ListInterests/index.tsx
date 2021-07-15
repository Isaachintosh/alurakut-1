import { useState } from 'react';
import { getRandom } from 'utils/get-random';
import * as S from './styles';
import { ListObjectShape } from './types';

interface ListInterests {
  title: string;
  data: Array<ListObjectShape>;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

export function ListInterests({
  title,
  data,
  target = '_self',
}: ListInterests) {
  const [seeMoreData, setSeeMoreData] = useState(false);
  const [seeMoreText, setSeeMoreText] = useState('Ver mais');

  const showSeeMoreButton = data.length > 6;

  function handleClickSeeMore() {
    setSeeMoreText((prevState) =>
      prevState === 'Ver mais' ? 'Ver menos' : 'Ver mais'
    );
    setSeeMoreData((prevState) => !prevState);
  }

  return (
    <S.Container>
      <h2 className="smallTitle">{title}</h2>
      <ul style={{ maxHeight: !showSeeMoreButton ? '220px' : '100%' }}>
        {(!seeMoreData ? getRandom<ListObjectShape>(data, 6) : data).map(
          (item) => (
            <li key={item.key}>
              <a href={item.href} target={target}>
                {/* TODO should render image placeholder if src is invalid */}
                <img src={item.imageSrc} />
                <span>{item.title}</span>
              </a>
            </li>
          )
        )}
      </ul>
      {showSeeMoreButton && (
        <p className="seeMore" onClick={handleClickSeeMore}>
          {seeMoreText}
        </p>
      )}
    </S.Container>
  );
}
