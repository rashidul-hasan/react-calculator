import React from "react"
import {BUTTON_TYPE_OPERAND} from "../lib/constants";

export const ButtonOperand = (props) => {
    return (
        <button id={props.button.name} type="button"
                className="operand-group operand-group-light"
                dangerouslySetInnerHTML={{__html: props.button.label}}
                onClick={() => props.onPress(BUTTON_TYPE_OPERAND, props.button)}
        >

        </button>
    )
}
