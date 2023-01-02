import { getByText, render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe('Counter Tests', () => {
    let increaseBtn, decreaseBtn, count;

    beforeAll(()=>{
        console.log("İlk başta bir kez çalışacağım.");
    })

    beforeEach(()=>{
        console.log("Her testten önce çalışacağım.");
        render(<Counter/>)
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    });

    afterEach(()=> {
        console.log("Her testten sonra çalışcağım.");
    })

    afterAll(()=>{
        console.log("En son bir kere çalışcağım.");
    })

    test("increase btn",()=>{
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });
    
    test("decrease btn",()=>{
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });
});
