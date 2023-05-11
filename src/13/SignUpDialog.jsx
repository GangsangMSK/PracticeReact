import React, {useState} from "react";
import Dialog from "./Dialog";

function SignUpDialog(props) {
    const [nickName, setNickName] = useState('');

    const handleChange = (event) => {
        setNickName(event.target.value);
    }
    const handleSingup = () => {
        alert(`Welcome aboard, ${nickName}!`);
    }
    return (
        <Dialog
            title="Mars Exploration Program"
            message="What is your name?">
            <input
                value={nickName}
                onChange={handleChange}
                />
            <button onClick={handleSingup}>
                Sign Me Up!
            </button>
        </Dialog>
  );
}

export default SignUpDialog;