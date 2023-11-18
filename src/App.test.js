import React from "react";
import { render, screen } from "@testing-library/react"
import App from "./App";

test('Renders without errors', () => {
    render(<App />)
})

test('When app mounts, Add New Animal header exists on the screen', () => {
    // Arrange
    render(<App />);

    // Act
    const header = screen.queryByText(/add new animal/i);

    // Assert
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/add new animal/i);
});