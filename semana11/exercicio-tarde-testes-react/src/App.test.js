import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom/extend-expect';


describe("Verifica as funcionalidades do post: postar, curtir e deletar", ()=>{
    it("returns true when writting a post on placeholder", ()=>{
        const inputTest = ["This is a test!"]
        const { getByPlaceholderText } = render (<App />);
        const placeholderContainer = getByPlaceholderText(/Novo post/i);
        fireEvent.change(placeholderContainer, {target: {value: inputTest}});
        expect( getByPlaceholderText(placeholderContainer).toHaveTextContent(/This is a test!/i))
    })
})