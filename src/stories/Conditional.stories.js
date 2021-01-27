import React from 'react';
import Condition from "../Components/ConditionalComponent";

export default{
    title: "Conditional Component",
    component: Condition
}

export function Conditional() {
    return (
        <div>
            <Condition condition={false} />
        </div>
    )
}

export function Conditional2() {
    return (
        <div>
            <Condition condition={true} />
        </div>
    )
}