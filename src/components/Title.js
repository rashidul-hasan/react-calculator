import React from 'react';

export const Title = (props) => {
    return (
        <h1 style={{width: '50%',
                    margin: '0 auto',
                    textAlign: 'center'}}>{props.text}</h1>
    )
}