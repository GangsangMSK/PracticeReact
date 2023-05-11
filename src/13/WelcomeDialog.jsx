// import FancyBorder from "./FancyBorder";
import Dialog from "./Dialog";
import Calculator from "../12/Calculator";

function WelcomeDialog() {
    return (
        // <FancyBorder color="blue">
        //     <h1 className="Dialog-title">
        //         Welcome
        //     </h1>
        //     <p className="Dialog-message">
        //         Thank you for visiting our spacecraft!
        //     </p>
        // </FancyBorder>

        // <FancyBorder color="yellow">
        //     <h2>
        //         Calculator
        //     </h2>
        //     <Calculator />
        // </FancyBorder>

        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"
        />
    )
}

export default WelcomeDialog;