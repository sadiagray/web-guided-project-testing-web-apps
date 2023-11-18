import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

test("renders AnimalForm without errors", () => {
    render(<AnimalForm />);
});

test("when user fills all fields and submits, species appears in list", async () => {
    //Arrange
    const user = userEvent.setup()
    render(<AnimalForm />);
    const species = "feline";

    //Act
    //-focus on the species input
    const specieInput = screen.getByLabelText(/species:/i);
    await user.type(specieInput, species);

    // ACT
    //-focus on the age input
    const ageInput = screen.getByLabelText(/age:/i);
    await user.type(ageInput, "9");

    // ACT
    // -focus on the notes input
    const notesInput = screen.getByLabelText(/notes:/i);
    await user.type(notesInput, "the cutest ever!");

    // ACT
    // -submit
    const submitButton = screen.getByRole("button");
    await user.click(submitButton);

    //Assert

    // PROMISE WAY
    // const speciesFeedbackPromise = screen.findByText(species);
    // speciesFeedbackPromise
    //     .then(speciesFeedback=> {
    //         expect(speciesFeedback).toBeInTheDocument();
    //     });



    // ASYNC / AWAIT WAY
    // const speciesFeedback = await screen.findByText(species);
    // expect(speciesFeedback).toBeInTheDocument();



    // WAITFOR WAY
    await waitFor(() => {
        const speciesFeedback = screen.queryByText(species);
        expect(speciesFeedback).toBeInTheDocument();
    });



    //SYNC WAY
    // const speciesFeedback = screen.queryByText(species);
    // expect(speciesFeedback).toBeInTheDocument();
});