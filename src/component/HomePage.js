import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();
    const props = useSelector((state) => {
        return {
            point: state.point,
        };
    });

    const render = () => {
        return (
            <div>
                <p>{props.point}</p>
                <button
                    type="button"
                    onClick={() => {
                        console.log("click");
                        dispatch({
                            type: "CHANGE_POINT",
                            payload: props.point + 1,
                        });
                    }}
                >
                    Click Me!
                </button>
            </div>
        );
    };

    return render();
};

export default HomePage;
