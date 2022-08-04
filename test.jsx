import { useRef } from "react";
 function List() {

    const listRef = useRef();

    const handleClick = (direction) => {
        if (direction === "left"){
            listRef.current.style.transform = `translateX(230px)`;
        }
    }

    return (
        <div>
            <div ref={listRef}>
                test
            </div>
            <button type="button" onClick={handleClick("left")}>test btn</button>
        </div>
    );
}
export default List;