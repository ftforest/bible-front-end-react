import { useParams } from "react-router-dom";

function Test() {
    let { id } = useParams();
    console.log(id)

    return (
        <div className="Test">
            <header className="App-header">
                <span>{id}</span>
                <span data-testid="not-empty">
                    <span data-testid="empty"></span>
                </span>
                <div
                    data-testid="zero-opacity"
                    style={{opacity: 0}}
                >
                    Zero Opacity
                </div>
                <div data-testid="visible">Visible Example</div>
                <span data-testid="ancestor">
                    <span data-testid="descendant">
                        <span data-testid="therd"></span>
                    </span>
                </span>
                <span data-testid="does-not-exist"></span>
                <span data-testid="parent">
                    <span data-testid="child"></span>
                </span>
                <button
                    data-testid="ok-button"
                    type="submit"
                    disabled
                >
                    ok
                </button>
                <button
                    data-testid="delete-button"
                    className="btn xs btn-danger"
                >
                    delete item
                </button>
                <div data-testid="no-classes">no classes</div>
            </header>
        </div>
    );
}

export default Test;
