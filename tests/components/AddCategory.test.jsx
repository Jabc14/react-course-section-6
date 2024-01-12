import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Prueba a <AddCategory/>", () => {
  test("Debe cambiar el valor del input", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "gta" } });

    expect(input.value).toBe("gta");
    screen.debug();
  });

  test("Debe llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "gow";
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
  });
});
