import React, { useState } from 'react';
import { evaluate } from 'mathjs';


const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                const result = evaluate(input);
                setInput(result.toString());
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    return (
        <div className="calculator">
            <div className="display">{input || '0'}</div>
            <div className="keypad">
                {buttons.map((btn, idx) => (
                    <button
                        key={idx}
                        className={`button ${['/', '*', '-', '+'].includes(btn) ? 'operator' : ''} ${btn === '=' ? 'equal' : ''} ${btn === 'C' ? 'clear' : ''}`}
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;