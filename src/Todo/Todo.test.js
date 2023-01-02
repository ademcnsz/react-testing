import { getByText, render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo Test",()=>{
    let input,button;

    beforeEach(()=>{
        render(<Todo></Todo>);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    })

    test("Inputa veri girip butona basılınca eklenmeli",()=>{
       //inputa belirlediğimiz bir veriyi ekliyoruz
        const name = "adem"
        userEvent.type(input,name)

        userEvent.click(button);
        
        expect(screen.getByText(name)).toBeInTheDocument()
    })

    test("Input ve Button dökümana yüklenmiş olmalı",()=>{
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
})
