import { useState } from "react";

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={{padding :10}} >
            {isLoggedIn  && <span>Welcome User</span>}
            {isLoggedIn ? (
                <button onClick={onClickLogout}>Logout</button>
            ) : (
                <button onClick={onClickLogin}>Login</button>
            )}
        </div>
    );

}

export default Toolbar;