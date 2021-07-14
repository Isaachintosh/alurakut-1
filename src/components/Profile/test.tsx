import { render, screen } from 'utils/test-utils';
import { Profile } from '.';

describe('ListInterests component', () => {
  let githubUser = 'brfeitoza';

  beforeEach(() => {
    render(<Profile githubUser={githubUser} />);
  });

  it('should render user name correctly', () => {
    expect(screen.getByText(`@${githubUser}`)).toBeInTheDocument();
  });

  it('should render items', () => {
    expect(screen.getByText(/perfil/i)).toBeInTheDocument();
    expect(screen.getByText(/recados/i)).toBeInTheDocument();
    expect(screen.getByText(/fotos/i)).toBeInTheDocument();
    expect(screen.getByText(/depoimentos/i)).toBeInTheDocument();
    expect(screen.getByText(/github trends/i)).toBeInTheDocument();
    expect(screen.getByText(/sair/i)).toBeInTheDocument();
  });
});
