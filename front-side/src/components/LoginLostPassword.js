import React from "react"
import { Form } from "reactstrap";

function LoginLostPassword() {
    return (
        <form method="post" className="loginForm">
            <input type='radio' name='userType' className='user' /> // 일반회원
            <input type='radio' name='userType' className='restaurant' /> // 기업회원
            // 텍스트 '비밀번호를 찾고자 하는 아이디를 입력해 주세요.​'
            <input type='email' /> // 이메일(아이디) 입력
            <button>확인</button> // 확인 버튼
            <button>아이디 찾기</button> // 아이디 찾기 화면으로 전환
        </form>
    )
}

// 이하, 테스트 케이스
// 일반회원 혹은 기업회원을 선택할 수 있으며 일반회원을 선택할 경우, 기업회원을 선택할 수 없다 (전환된다)
// 일반회원 혹은 기업회원을 선택할 수 있으며 기업회원을 선택할 경우, 일반회원을 선택할 수 없다 (전환된다)
// '찾고자 하는 아이디를 입력해주세요' 등의 안내 문구를 읽을 수 있다
// 이메일을 입력할 수 있는 입력란이 있다
// 확인 버튼을 확인할 수 있다
// 확인 버튼을 누를 때, 이메일 입력란에 입력된 값이 없을 경우, 경고가 발생한다
// 확인 버튼을 누를 때, 이메일 입력란에 입력된 값이 있을 경우, 입력 된 이메일이 회원으로 가입되어 있는 경우, 입력한 이메일에 확인 코드가 전송된다
// 확인 버튼을 누를 때, 비밀번호로 재설정 된 난수가 일정양식으로 이메일에 전송된다
// 확인 버튼을 누를 때, '이메일이 발송되었습니다.' 알람이 뜨고, 로그인 화면으로 돌아간다

export default LoginLostPassword;