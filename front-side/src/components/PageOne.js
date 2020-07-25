import React, {useState} from "react";
import "../css/PageOne.css";

const PageOne = () => {
    const initialBoxState = {
        id: null,
        message: "hello",
    };

    const setRelativeLocation = e => {
        let ref = e.target;
    };

    const handleDragStart = e => {
        let ref = e.target;
        let xPosition = e.clientX;
        let yPosition = e.clientY;

        const handleDragging = e => {
            const xPositionOffset = xPosition - e.clientX;
            const yPositionOffset = yPosition - e.clientY;

            // 이동
            ref.style.left = ref.offsetLeft - xPositionOffset + "px";
            ref.style.top = ref.offsetTop - yPositionOffset + "px";

            // 위치값 변경
            xPosition = e.clientX;
            yPosition = e.clientY;
        };

        const handleDragEnd = e => {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        document.onmousemove = handleDragging;
        document.onmouseup = handleDragEnd;
    };

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <div className="drag-box"
             id="box"
             onLoad={setRelativeLocation({number})}
             onMouseDown={handleDragStart}
        >
            {number}
        </div>
    );


    return (
        <div>
            {listItems}
        </div>
    );
};

export default PageOne;
