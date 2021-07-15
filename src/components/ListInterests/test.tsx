import peopleMock from 'mocks/people.json';
import communitiesMock from 'mocks/communities.json';
import { fireEvent, render, screen } from 'utils/test-utils';
import { ListInterests } from '.';

function setup(props = {}) {
  const defaultProps = {
    seeMore: false,
    ...props,
  };

  if (defaultProps.seeMore) {
    render(
      <ListInterests
        title={`Comunidades (${communitiesMock.length})`}
        data={communitiesMock.map((community) => ({
          key: community.id,
          href: `/users/${community.title}`,
          imageSrc: community.image,
          title: community.title,
        }))}
      />
    );
  } else {
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
  }
}

describe('ListInterests component', () => {
  it('should render the title received in props correctly', () => {
    setup();

    expect(
      screen.getByRole('heading', {
        name: `Pessoas da comunidade (${peopleMock.length})`,
      })
    ).toBeInTheDocument();
  });

  it('should render the data received in props correctly', () => {
    setup();

    expect(screen.getByText(peopleMock[0])).toBeInTheDocument();
    expect(screen.getByText(peopleMock[1])).toBeInTheDocument();
    expect(screen.getByText(peopleMock[2])).toBeInTheDocument();
  });

  it('should not render the see more or see less button if length is less than 6', () => {
    setup();

    expect(screen.queryByText(/ver mais/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ver menos/i)).not.toBeInTheDocument();
  });

  it('should render the see more button by default if length is greater than 6', () => {
    setup({ seeMore: true } as any);

    expect(screen.getByText(/ver mais/i)).toBeInTheDocument();
  });

  it('should render the see less button when click see more', () => {
    setup({ seeMore: true } as any);

    const seeMoreButtonElement = screen.getByText(/ver mais/i);

    fireEvent.click(seeMoreButtonElement);

    expect(screen.getByText(/ver menos/i)).toBeInTheDocument();
  });

  it('should render the see more button again when click see less', () => {
    setup({ seeMore: true } as any);

    const seeMoreButtonElement = screen.getByText(/ver mais/i);

    fireEvent.click(seeMoreButtonElement);
    fireEvent.click(seeMoreButtonElement);

    expect(screen.getByText(/ver mais/i)).toBeInTheDocument();
  });

  // TODO should render image placeholder if src is invalid
});
