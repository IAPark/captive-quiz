import * as React from "react";
import {QuestionProps} from "./"

interface YesNoQuestionProps extends QuestionProps<boolean> {

}


export function YesNoQuestion(props: YesNoQuestionProps) {
    return <div>
                {props.label}
                <input type="checkbox" checked={props.value} onChange={(v)=>console.log(v.target.checked)}/>
            </div>
}