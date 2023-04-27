import { useState } from "react";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => setShowWarning(preShowWarning => !preShowWarning);

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? "Hide" : "Show"}
            </button>
        </div>
    );
}

export default MainPage;