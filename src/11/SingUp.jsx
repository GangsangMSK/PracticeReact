import React, {useState} from 'react';

function SignUp(props) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('M');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={{padding:10}}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <input type='radio' name='gender' value='M' checked={gender === 'M'} onChange={handleChangeGender} />남자
                <input type='radio' name='gender' value='F' checked={gender === 'F'} onChange={handleChangeGender} />여자
            </label>
            <br />
            <button type="submit" value="제출" />
        </form>
    );
}
export default SignUp;