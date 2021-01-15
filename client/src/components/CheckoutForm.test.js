import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />)
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    const button = screen.getByRole('button')

    userEvent.type(firstNameInput, 'Juan');
    userEvent.click(button);

    const message = screen.getByText(/you have ordered some plants!/i)
    expect(message).toBeInTheDocument()
});