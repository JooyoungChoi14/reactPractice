import React from "react"
import {Form} from "reactstrap";

function SignUp() {
    return (
        <form method="post" className="loginForm">
            <button>Cancel</button> // 돌아가기

            <input name='id' type='email'/> // id 입력 (이메일)
            <button name='idValidCheck'/> // id 중복 체크

            <input name='nickname' type='text'/> // 닉네임 입력
            <button name='idValidCheck'/> // 닉네임 중복 체크

            <input name='pw' type='password'/> // pw 입력
            <input name='pwDouble' type='password'/> // pw 재입력

            // 지역코드
            <Dropdown name="areaCode" direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                <DropdownToggle caret>
                    Dropright
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <radio name="SEX" value="male"/> // 성별 SEX
            <radio name="SEX" value="female"/>
            <radio name="SEX" value="unknown"/>

            <input type="date"/> // 생년월일 BIRTH

            <button>SignUp</button> // 입력 후 전송
        </form>
    )
}

// 이하, 테스트 케이스
// Cancel 버튼을 누르면 이전 화면으로 돌아간다
// id를 입력할 수 있는 입력란이 있다
// id 중복을 체크할 수 있는 체크버튼이 있다
// id 중복을 체크할 수 있는 버튼을 눌렀을 경우, id가 중복되어 있다면 경고창이 뜬다
// id 중복을 체크할 수 있는 버튼을 눌렀을 경우, id가 중복되어 있지 않다면 입력한 id의 디자인이 변경된다 (사후 디자인 설정에 따라 변경)
// nickname을 입력할 수 있는 입력란이 있다
// nickname 중복을 체크할 수 있는 버튼을 눌렀을 경우, nickname가 중복되어 있다면 경고창이 뜬다
// nickname 중복을 체크할 수 있는 버튼을 눌렀을 경우, nickname이 중복되어 있지 않다면 입력한 nickname의 디자인이 변경된다 (사후 디자인 설정에 따라 변경)
// pw를 입력할 수 있는 입력란이 있다
// pw를 입력할 수 있는 입력란에 1234, 0000 등 단순한 비밀번호를 입력할 경우, 경고 문구가 뜬다
// pw 재확인을 입력할 수 있는 입력란이 있다
// pw / pw 재확인이 상이할 경우, pw 재확인의 디자인이 변경된다 (붉은 글씨, 붉은 입력란 등)
// pw 재확인의 디자인이 변경된 상태에서 동일하게 입력할 경우, 디자인이 원래 상태로 되돌아간다
// 지역코드를 선택할 수 있는 선택란이 있다
// 성별을 선택할 수 있는 선택란이 있다
// 생년월일을 선택할 수 있는 입력란이 있다
// Sign을 눌렀을 때 id 중복 확인을 하지 않은 경우, 경고창이 뜬다.
// Sign을 눌렀을 때 nickname 중복 확인을 하지 않은 경우, 경고창이 뜬다.
// Sign을 눌렀을 때 pw / pw 확인이 다른 경우, 경고창이 뜬다.
// Sign을 눌렀을 때 지역선택을 하지 않아도, 경고창이 뜨지 않는다.
// Sign을 눌렀을 때 성별선택을 하지 않아도, 경고창이 뜨지 않는다.
// Sign을 눌렀을 때 생년월일을 하지 않아도, 경고창이 뜨지 않는다.
// Sign을 눌렀을 때 id 중복 확인 / nickname 중복 확인이 이뤄져서 승인된 상태고, pw가 일치할 경우 다음 화면으로 넘어간다
// (가입 실패 및 성공 케이스에 따른 반응은 후차적이기에 여기서 테스트하지 않음)
// id 중복을 체크할 수 있는 버튼을 눌렀을 경우, id가 중복되어 있다면 경고창이 뜬다

export default SignUp;