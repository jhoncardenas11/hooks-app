import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(200)

    return (
        <>
            <h1>Counter with hook { state }</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ () => increment(2)}
                >+1
            </button>
            <br /><br />
            <button
                className="btn btn-primary"
                onClick={ () => decrement(2)}
                >-1
            </button>
            <br /><br />
            <button
                className="btn btn-primary"
                onClick={ reset }
                >reset
            </button>
        </>
    )
}
