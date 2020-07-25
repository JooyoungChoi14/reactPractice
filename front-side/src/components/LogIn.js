import React from "react"
import {Form} from "reactstrap";

function LogIn() {
    return (
        <form method="post" className="loginForm">
            <button /> // 일반 회원 및 기업 회원 구분 버튼
            <input name='id' type='email'/> // id 입력
            <input name='pw' type='password'/> // pw 입력
            <button>login</button> // 입력 후 전송
            <button>forgot id / password</button>
            <input type='autoLogIn'/> // 자동로그인
        </form>
    )
}

// 이하, 테스트 케이스
// 일반 및 기업 회원 전환 버튼을 누를 수 있다
// 일반 및 기업 회원 전환 버튼을 누르면, UI가 변경된다 (State가 변경되어 일반 / 기업 모드 토글이 이뤄진다)
// id를 입력할 수 있는 입력란이 있다
// pw를 입력할 수 있는 입력란이 있다
// login 버튼을 누를 수 있다
// login 버튼을 누르고, id가 입력되지 않은 경우, 경고가 발생한다.
// login 버튼을 누르고, id가 존재하지 않을 경우, 경고가 발생한다.
// login 버튼을 누르고, pw가 입력되지 않은 경우, 경고가 발생한다.
// login 버튼을 누르고, pw가 틀렸을 경우, 경고가 발생한다.
// login 버튼을 누르고, id / pw가 타당하지 않으면 경고가 발생하고 로그인 되지 않는다
// login 버튼을 누르고, id / pw가 타당했을 경우, 서비스 이용 화면으로 넘어간다
// forgot id / password 버튼을 누르면 id / password 찾기 화면으로 이동? 바뀜?
// 자동로그인 체크박스를 누를 수 있다
// 자동로그인 체크박스를 누른 상태로 로그인에 성공할 경우, 화면을 닫고 다시 열었을 때 해당 화면을 제시하지 않고, 서비스로 넘어간다

export default LogIn;