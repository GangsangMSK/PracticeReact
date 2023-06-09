import React, {useState} from "react";

function NameForm(props){
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    }

    const handleSubmit = (event) => {
        alert("입력한 이름: ${value}");
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="제출" />
        </form>
    );
}

export default NameForm;