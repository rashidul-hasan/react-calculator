import React from "react";

const styles = {
    display: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    result: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        color: '#ccc'
    },
}
export const Display = (props) => {
    return (
        <form>
            <div id="display1"
                   className="form-control-lg text-right form-input-light"
                   dangerouslySetInnerHTML={{__html: props.display}}
                   value={props.display}
                 style={styles.display}></div>
            <input readOnly id="display2" type="text"
                   value={props.result}
                   className="form-control-lg text-right  form-input-light"
                   style={styles.result}/>
        </form>
    )
}

