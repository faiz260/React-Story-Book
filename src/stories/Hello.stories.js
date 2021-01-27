import React from 'react';
import Hello from '../Components/Hello';

export default {
    title: "Hello Story",
    component: Hello
}

export function HelloName() {
    return (
        <div>
            <Hello name="Faiz" />
        </div>
    )
}

export function TestUser(){
    return(
        <Hello name="Test User" />
    )
}