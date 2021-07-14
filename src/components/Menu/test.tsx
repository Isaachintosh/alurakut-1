import { render, screen, fireEvent } from 'utils/test-utils';
import { Menu } from '.';
import items from './items.json';

describe('Menu component', () => {
  beforeEach(() => {
    render(<Menu githubUser="brfeitoza" />);
  });

  it('should render the Alurakut logo', () => {
    expect(screen.getByAltText(/alurakut/i)).toBeInTheDocument();
  });

  it('should render the menu items', () => {
    expect(screen.getByText(items[0].name)).toBeInTheDocument();
    expect(screen.getByText(items[1].name)).toBeInTheDocument();
    expect(screen.getByText(items[2].name)).toBeInTheDocument();
  });

  it('should render the sign out button', () => {
    expect(screen.getByText(/sair/i)).toBeInTheDocument();
  });

  it('should render the search input', () => {
    expect(
      screen.getByPlaceholderText(/pesquisar no alurakut/i)
    ).toBeInTheDocument();
  });

  it('should render the menu icon in mobile', () => {
    expect(screen.getByAltText(/icon burger menu/i)).toBeInTheDocument();
  });

  it('should change the menu icon when it is touched', () => {
    const burgerMenuElement = screen.getByAltText(/icon burger menu/i);

    fireEvent.click(burgerMenuElement);

    expect(screen.getByAltText(/icon close menu/i)).toBeInTheDocument();
  });

  // TODO should render image placeholder if src is invalid
});
