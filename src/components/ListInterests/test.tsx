import peopleMock from 'mocks/people.json';
import { render, screen } from 'utils/test-utils';
import { ListInterests } from '.';

describe('ListInterests component', () => {
  beforeEach(() => {
    render(
      <ListInterests
        title={`Pessoas da comunidade (${peopleMock.length})`}
        data={peopleMock.map((pessoa) => ({
          key: pessoa,
          href: `/users/${pessoa}`,
          imageSrc: `https://github.com/${pessoa}.png`,
          title: pessoa,
        }))}
      />
    );
  });

  it('should render the title received in props correctly', () => {
    expect(
      screen.getByRole('heading', {
        name: `Pessoas da comunidade (${peopleMock.length})`,
      })
    ).toBeInTheDocument();
  });

  it('should render the data received in props correctly', () => {
    expect(screen.getByText(peopleMock[0])).toBeInTheDocument();
    expect(screen.getByText(peopleMock[1])).toBeInTheDocument();
    expect(screen.getByText(peopleMock[2])).toBeInTheDocument();
  });

  // TODO should render image placeholder if src is invalid
});
