
import "./ChartButton.css";
function ChartButton({ toggleChart }) {

    return (

        <>
            <button className="btn btn-primary rounded-4  chart-button" title="chart with us" onClick={toggleChart}>
                <i className="bi bi-chat-dots me-2"></i>

            </button>



        </>
    )
};

export default ChartButton;