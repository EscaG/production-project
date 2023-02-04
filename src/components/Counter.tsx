import React, {useState} from 'react';
import './Counter.css';
import classes from './Counters.module.scss';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    return (
        <div>
            <p>{count}</p>
            <button className={'counter ' + classes.button} onClick={increment}>increment</button>
        </div>
    );
}

export default Counter;