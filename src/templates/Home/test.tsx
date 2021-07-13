import { render, screen } from 'utils/test-utils';
import { Home } from '.';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should render profile area', () => {
    expect(screen.getByAltText(/user avatar/i)).toBeInTheDocument();
  });

  it('should render welcome area', () => {
    expect(screen.getByText(/bem vindo\(a\)/i)).toBeInTheDocument();
  });

  it('should render profile relations area', () => {
    expect(screen.getByText(/pessoas da comunidade/i)).toBeInTheDocument();
  });
});
