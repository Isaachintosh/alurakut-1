import { render, screen } from 'utils/test-utils';
import { Link } from '.';

describe('Link component', () => {
  it('should render the link with the correct attribute values', () => {
    const link = 'https://alurakut.example.test';

    render(
      <Link href={link}>
        <p>Link example</p>
      </Link>
    );

    const cardElement = screen.getByRole('link', {
      name: /Link example/i,
    });

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveAttribute('href', link);
  });

  it('should render children correctly', () => {
    render(
      <Link href="">
        <p>Link example</p>
      </Link>
    );

    expect(screen.getByText(/link example/i)).toBeInTheDocument();
  });
});
