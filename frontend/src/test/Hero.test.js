import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";


//Test Suite
describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Images");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", { name: /SignUp Now/i });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn btn-primary fs-5");
        expect(signupButton).toHaveStyle({ width: "20%", margin: "0 auto" });
    })
});