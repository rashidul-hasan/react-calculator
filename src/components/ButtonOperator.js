import React from "react"
import {BUTTON_TYPE_OPERATOR} from "../lib/constants";

export const ButtonOperator = (props) => {
    return (
        <button id={props.button.name} type="button"
                className="operator-group operator-group-light"
                dangerouslySetInnerHTML={{__html: props.button.label}}
                onClick={() => props.onPress(BUTTON_TYPE_OPERATOR, props.button)}
        >
        </button>
    )
}
