import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContext(props){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white'
            }}
        >
            <p>Toggle theme</p>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}

export default MainContext;