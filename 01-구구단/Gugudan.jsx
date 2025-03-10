import React from 'react';
import { useState, useRef } from 'react';

const Gugudan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(parseInt(value) === first * second) {
            setResult(`정답: ${value}`);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult('땡');
            setValue('');
        }

        inputRef.current.focus();
    };

    return (
        <div>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} type="number" value={value} onChange={onChange} />
                <button type="submit">입력!</button>
            </form>
            <div>{result}</div>
        </div>
    );
}

export default Gugudan;