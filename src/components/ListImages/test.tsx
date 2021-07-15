import photosMock from 'mocks/photos.json';
import { fireEvent, render, screen } from 'utils/test-utils';
import { ListImages } from '.';

describe('ListImages component', () => {
  const handleSetThemeMock = jest.fn();

  beforeEach(() => {
    render(
      <ListImages
        data={photosMock.map((image) => image)}
        onClick={handleSetThemeMock}
      />
    );
  });

  it('should render the data received in props correctly', () => {
    expect(
      screen.getByAltText(photosMock[0].alt_description)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(photosMock[1].alt_description)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(photosMock[2].alt_description)
    ).toBeInTheDocument();
  });

  it('should call onClick function with the correct argument when clicked', () => {
    const imageItemElement = screen.getByTestId(photosMock[0].id);

    fireEvent.click(imageItemElement);

    expect(handleSetThemeMock).toHaveBeenCalledTimes(1);
    expect(handleSetThemeMock).toHaveBeenCalledWith(photosMock[0].urls.full);
  });
});
