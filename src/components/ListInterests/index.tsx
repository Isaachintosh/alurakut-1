import * as S from './styles';
import { ListObjectShape } from './types';

interface ListInterests {
  title: string;
  data: Array<ListObjectShape>;
}

export function ListInterests({ title, data }: ListInterests) {
  return (
    <S.Container>
      <h2 className="smallTitle">{title}</h2>
      <ul>
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
    </S.Container>
  );
}
