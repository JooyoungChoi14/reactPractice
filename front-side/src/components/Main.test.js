import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Main from "./Main";

// text가 화면 상에 존재하는지 테스트
describe("<MemberBar userName='testUser' />", () => {
    it("1. 로그인하지 않은 상태에서 접속했을 때, 로그인 및 회원가입 버튼이 보인다", () => {
        const {getByText} = render(<MemberBar logIn={true}/>);
        const logInButton = getByText("로그인");
        const SignUpButton = getByText("회원가입");
        expect(logInButton).toBeInTheDocument();
        expect(SignUpButton).toBeInTheDocument();
    })

    it("2. 로그인하지 않은 상태에서 접속했을 때, 유저 인사말과 햄버거 버튼이 보이지 않는다", () => {
        const {getByText} = render(<MemberBar logIn={true}/>);
        const hamburgerButton = getByText(""); // 여기 어떻게 하지?
        const userGreeting = getByText("testUser 님 환영합니다"); // 여기 어떻게 하지?
        expect(hamburgerButton).not.toBeInTheDocument();
        expect(userGreeting).not.toBeInTheDocument();
    })
});