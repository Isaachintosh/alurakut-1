import { render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const customRender = (ui: ReactNode, renderOptions: RenderOptions = {}) => {
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);
};

export * from '@testing-library/react';
export { customRender as render };
