import * as React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "../index";

test("renders correctly", () => {
	render(<App />);

	expect(screen.getByText("My Points Compass")).toBeTruthy();
});
