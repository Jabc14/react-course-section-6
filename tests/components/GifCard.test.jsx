import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe("Prueba a GifCard", () => {
  const title = "gta";
  const url = "https://www.google.com/";
  test("debe match con el snapshot", () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Mostrar la img con el url y alt", () => {
    render(<GifCard title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Mostrar el titulo", () => {
    render(<GifCard title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
