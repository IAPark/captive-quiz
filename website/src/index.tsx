import * as React from "react";
import * as ReactDOM from "react-dom";

import {YesNoQuestion} from "./components/questions/yes-no"

ReactDOM.render(
    <YesNoQuestion label="Do you like Hackathons" onChanged={undefined}/>,
    document.getElementById("react")
);