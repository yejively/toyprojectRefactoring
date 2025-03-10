import { useState, useEffect } from 'react';
import Field from './Fields/Field';
import Button from './Buttons/Button';
import { container, calculator } from './style.css';

const Main = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState('');

    const OPERATOR = ['÷', '×', '-', '+'];

    useEffect(() => {
        if (result === 'Error') {
            setHistory('');
        }
    }, [result]);

    // 초기화
    const initCalculator = () => {
        setInput('');
        setResult('');
        setHistory('');
    };

    // 계산 로직
    const calc = (oper, numOne, numTwo) => {
        const n1 = Number(numOne);
        const n2 = Number(numTwo);

        switch (oper) {
            case '+':
                return n1 + n2;
            case '-':
                return n1 - n2;
            case '×':
                return n1 * n2;
            case '÷':
                return n2 !== 0 ? n1 / n2 : 'Error';
            default:
                return 'Error';
        }
    };

    // 연산자 처리
    const processOperators = (numArr, operArr, operatorsToProcess) => {
        let i = 0;
        while (i < operArr.length) {
            const oper = operArr[i];
            if (operatorsToProcess.includes(oper)) {
                const res = calc(oper, numArr[i], numArr[i + 1]);
                numArr[i] = res;
                numArr.splice(i + 1, 1);
                operArr.splice(i, 1);
            } else {
                i++;
            }
        }
    };

    // 계산 프로세스
    const processCalculation = () => {
        try {
            if (OPERATOR.includes(history.slice(-1)) || result) return;
            setHistory(prev => `${prev}=`);

            const numArr = history.split(/[+\-×÷]/);
            const operArr = history.split(/\d+/).filter(Boolean); // 숫자를 기준으로 자르기때문에 처음 숫자 앞, 마지막 숫자 뒤에 공백으로 채워짐. -> 공백 제거

            processOperators(numArr, operArr, ['×', '÷']);
            processOperators(numArr, operArr, ['+', '-']);

            setResult(numArr[0]);
        } catch (error) {
            setResult('Error');
        }
    };

    // 숫자 버튼 클릭 처리
    const handleNumberClick = value => {
        if (result) initCalculator();
        if (OPERATOR.includes(history.slice(-1))) setInput(value);
        else setInput(prev => prev + value);

        setHistory(prev => prev + value);
    };

    // 연산자 버튼 클릭 처리
    const handleOperatorClick = value => {
        if (result) {
            initCalculator();
            setHistory(result + value);
            return;
        }

        if (!history) return;

        if (OPERATOR.includes(history.slice(-1))) {
            setHistory(prev => prev.slice(0, -1) + value);
        } else {
            setHistory(prev => prev + value);
        }
    };

    // 삭제 버튼 클릭 처리
    const handelDeleteClick = () => {
        if (!history || OPERATOR.includes(history.slice(-1))) return;
        setInput(prev => prev.slice(0, -1));
        setHistory(prev => prev.slice(0, -1));
    };

    return (
        <>
            <div className={container}>
                <div className={calculator}>
                    <Field historyValue={history} displayValue={result || input} />
                    <Button
                        numberClick={handleNumberClick}
                        operatorClick={handleOperatorClick}
                        initClick={initCalculator}
                        deleteClick={handelDeleteClick}
                        equalClick={processCalculation}
                    />
                </div>
            </div>
        </>
    );
};

export default Main;
