import React from "react"
import {render, fireEvent} from "@testing-library/react";
import App from "./App";

// text가 화면 상에 존재하는지 테스트
describe("<App />", () => {
  it("1. 나비게이션바 정적 확인 테스트,", () => {
    const {getByText} = render(<App />);
    const navbar = getByText("Tutorials List");
    expect(navbar).toBeInTheDocument();
  })

  it("2. 나비게시션바 동적 확인 테스트,", () => {
    const {getByText} = render(<App />);

    const navAddBttn = getByText("Add");

    // 클릭 이전에는 submit 버튼이 보이지 않음
    expect(() => getByText("Submit")).toThrow();

    // 클릭 이후 submit 버튼이 보여야 한다.
    fireEvent.click(navAddBttn);
    const submitBttn = getByText("Submit");
    expect(submitBttn).toBeInTheDocument();

  })
});