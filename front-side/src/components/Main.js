import React, {useState} from "react";
import {Form} from "reactstrap";
import Restaurant from "./Restaurant";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languageSet: 'KR',
        }
    }

    SearchBar(props) {
        return <div className='searchBar'>
            <input type='text' className='search'/> {/* 검색어 입력란*/}
            <button>Search</button>
            {/* 검색*/}
            <button>Filter</button>
            {/* 검색 필터 설정*/}
            <ul>
                {/*    가게위치
                        주소
                        전화번호
                        영업시작시간
                        영업종료시간
                        휴업플래그
                        설정 / 취소 버튼
                        */}
            </ul>
        </div>;
    };

    Banner(props) {
        return <div className='banner'>
            {/* 이벤트 공지*/}
        </div>;
    }

    MemberBar(props) {
        return <div>
            <div className='beforeLogin'>
                <button className='logIn'>로그인</button>
                {/* 로그인 버튼*/}
                <button className='signUp'>회원가입</button>
                {/* 회원가입 버튼*/}
            </div>

            <div className='memberMenu afterLogin' hidden>
                {this.state.Nickname} 님 환영합니다
                <button className='menuList'></button> {/* 햄버거 버튼*/}
                <ul hidden>
                    <li value='memberInfo'>회원정보 관리</li>
                    <li value='manageVisit'>방문이력 관리</li>
                    <li value='manageReview'>리뷰이력 관리</li>
                    <li value='userNotice'>공지사항</li>
                    <li value='logOut'>로그아웃</li>
                    {/*<li value='userMessage'></li>*/}
                </ul>
            </div>
        </div>;
    }

    Restaurant(props) {

    }

    render() {
        return (
            <div>
                <nav>
                    <SearchBar/>
                    <Banner/>
                    <header>
                        <MemberBar/>
                    </header>
                </nav>
                <body>
                <Restaurant language={languageSet} list={restaurantList}/> {/*// 점포 정보*/}
                </body>
            </div>
        )
    }
}

/* 이하, 테스트 케이스 (일반회원이 로그인 했을 때)
* . 로그인하지 않은 상태에서 접속했을 때, 로그인 및 회원가입 버튼이 보인다
* . 로그인하지 않은 상태에서 접속했을 때, 유저 인사말과 햄버거 버튼이 보이지 않는다
* . 로그인한 상태에서 접속했을 때, 로그인 및 회원가입 버튼이 보이지 않는다
* . 로그인한 상태에서 접속했을 때, 유저 인사말과 햄버거 버튼이 보인다
* . 햄버거 버튼을 누르면, '회원정보 관리, 방문이력 관리, 리뷰이력 관리, 공지사항, 로그아웃'의 메뉴가 화면에 표시된다
* . '회원정보 관리, 방문이력 관리, 리뷰이력 관리, 공지사항'의 메뉴를 누르면 각각 관련 화면으로 이동한다
* . '로그아웃'의 메뉴를 누르면 로그인 및 회원가입 버튼이 보인다
* . '로그아웃'의 메뉴를 누르면 유저 인사말과 햄버거 버튼이 보이지 않는다
* . 검색어를 입력할 수 있는 입력란이 있다
* . 검색 버튼을 누를 수 있다
* . 검색 버튼을 누르면, 로딩 스피너가 화면에 보여진다
* . 검색 버튼을 누르고 로딩 스피너가 사라지면, 검색 조건에 따른 검색 결과가 화면에 보인다 (필터 설정 내역을 포함한 쿼리가 전송된다)
* . 필터 버튼을 누를 수 있다
* . 필터 버튼을 누르면, 필터 설정창이 메인 화면 위에 나온다
* . (대충 필터설정창 구현 내용)
* . 배너가 보인다
* . 검색을 하지 않은 초기의 상태에서는 유저의 지역코드에 따른 전체 매장 리스트가 보인다
* . 검색을 한 후의 상태에서는 유저의 검색 결과에 따른 전체 매장 리스트가 보인다
* . 매장 리스트가 보인다
* . 매장 리스트에서 매장을 누르면 매장 페이지로 이동한다
* 
* */


export default Main;