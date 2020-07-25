import React from "react"
import {render} from "@testing-library/react"
import NotFound from "./NotFound"

// text가 화면 상에 존재하는지 테스트
describe("<NotFound />", () => {
    it("1. 헤더 랜더링 테스트, 특정 텍스트의 DOM의 존재여부", () => {
        const {getByText} = render(<NotFound path="/abc"/>);
        const header = getByText("Page Not Found");
        expect(header).toBeInTheDocument();
    })
});

// 특정 파라그래프 내용 확인
describe("<NotFound />", () => {
    it("2. 본문 랜더링 테스트, 특정 텍스트가 포함된 DOM 내부의 텍스트 확인", () => {
        const {getByText} = render(<NotFound path="/abc"/>);
        const paragraph = getByText(/^해당 페이지/);
        expect(paragraph).toHaveTextContent("해당 페이지(/abc)를 찾을 수 없습니다.");
    })
});

// 이미지 주소 확인
describe("<NotFound />", () => {
    it("renders image", () => {
        const { getByAltText } = render(<NotFound path="/abc" />)
        const image = getByAltText("404")
        expect(image).toHaveAttribute(
            "src",
            "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        )
    })
});

