import React from 'react'

function Button({value, onClick}) {
    return (
        <div>
            <button onClick={onClick} >{value}</button>
        </div>
    )
}

export default Button
