import * as S from './styles';
import items from './items.json';
import characteristics from './characteristics.json';

export function ProfileSummary(props) {
  return (
    <S.Container>
      {items.map(({ name, slug, icon }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span
            style={{ gridArea: 'title' }}
            className="OrkutNostalgicIconSet__title"
          >
            {name}
          </span>
          <span
            className="OrkutNostalgicIconSet__number"
            style={{ gridArea: 'number' }}
          >
            <img
              key={`orkut__icon_set__${slug}_img`}
              className="OrkutNostalgicIconSet__iconSample"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/${icon}.svg`}
            />
            {props[slug] ? props[slug] : 0}
          </span>
        </li>
      ))}

      {characteristics.map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;

        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">{name}</span>
            <span
              className="OrkutNostalgicIconSet__iconComplex OrkutNostalgicIconSet__number"
              style={{ gridArea: 'number' }}
            >
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;

                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/${icon}.svg`}
                    style={{
                      marginRight: '2px',
                      opacity: isHeartActive ? 1 : '0.5',
                    }}
                  />
                );
              })}
            </span>
          </li>
        );
      })}
    </S.Container>
  );
}
