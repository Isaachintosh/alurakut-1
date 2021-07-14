import { render, screen } from 'utils/test-utils';
import { ProfileSummary } from '.';

describe('ListInterests component', () => {
  beforeEach(() => {
    render(<ProfileSummary />);
  });

  it('should render items and characteristics', () => {
    expect(screen.getByText(/recados/i)).toBeInTheDocument();
    expect(screen.getByText(/fotos/i)).toBeInTheDocument();
    expect(screen.getByText(/videos/i)).toBeInTheDocument();
    expect(screen.getByText(/fãs/i)).toBeInTheDocument();
    expect(screen.getByText(/mensagens/i)).toBeInTheDocument();
    expect(screen.getByText(/confiável/i)).toBeInTheDocument();
    expect(screen.getByText(/legal/i)).toBeInTheDocument();
    expect(screen.getByText(/sexy/i)).toBeInTheDocument();
  });

  it('should render the correct style for items', () => {
    expect(screen.getByText(/recados/i)).toHaveStyle('font-style: italic');
    expect(screen.getByText(/fotos/i)).toHaveStyle('font-style: italic');
    expect(screen.getByText(/videos/i)).toHaveStyle('font-style: italic');
    expect(screen.getByText(/fãs/i)).toHaveStyle('font-style: italic');
    expect(screen.getByText(/mensagens/i)).toHaveStyle('font-style: italic');
    expect(screen.getByText(/confiável/i)).toHaveStyle('font-style: italic');
    expect(screen.getByText(/legal/i)).toHaveStyle('font-style: italic');
    expect(screen.getByText(/sexy/i)).toHaveStyle('font-style: italic');
  });

  // TODO test characteristics opacity
});
