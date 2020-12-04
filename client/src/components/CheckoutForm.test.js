import React from "react";
import App from '../App'
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
    render(<App />)
    const header = await screen.getByText('React Plants')
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByText(/First Name:/i)
    const lastNameInput = screen.getByText(/Last Name:/i)
    const addressInput = screen.getByText(/Address:/i)
    const cityInput = screen.getByText(/City:/i)
    const stateInput = screen.getByText(/State:/i)
    const zipInput = screen.getByText(/Zip:/i)
    const button = screen.getByTestId('button')

    fireEvent.click(button)

    const newCheckout = await screen.getByTestId('successMessage')
    expect(newCheckout).toBeInTheDocument()
});
