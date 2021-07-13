import theme from 'styles/theme';
import { render, screen } from 'utils/test-utils';
import { Card } from '.';

describe('Card component', () => {
  it('should have the correct style', () => {
    render(
      <Card>
        <h1>Content example</h1>
      </Card>
    );

    const cardElement = screen.getByTestId('card');

    expect(cardElement).toHaveStyle(
      `border-radius: ${theme.shapes.borderRadius}`
    );
    expect(cardElement).toHaveStyle(`background: ${theme.colors.white}`);
    expect(cardElement).toHaveStyle('padding: 16px');

    expect(
      screen.getByRole('heading', {
        name: /content example/i,
      })
    ).toBeInTheDocument();
  });
});
