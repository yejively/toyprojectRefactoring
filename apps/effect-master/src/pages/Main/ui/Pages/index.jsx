import { useState, useEffect } from 'react';
import Field from './Fields/Field';
import Button from './Buttons/Button';
import { container, calculator } from './style.css';

const OPERATOR = ['÷', '×', '-', '+']; // Main 컴포넌트가 리렌더링될 때 재선언되지 않음.

const Main = () => {
    const [number, setNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [history, setHistory] = useState('');
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');
    const [init, setInit] = useState(false);
    const [del, setDel] = useState(false);
    const [equal, setEqual] = useState(false);

    // 계산 함수
    // const performOperation = (oper, numOne, numTwo) => {
    //     const n1 = Number(numOne);
    //     const n2 = Number(numTwo);

    //     switch (oper) {
    //         case '+':
    //             return n1 + n2;
    //         case '-':
    //             return n1 - n2;
    //         case '×':
    //             return n1 * n2;
    //         case '÷':
    //             return n2 !== 0 ? n1 / n2 : 'Error';
    //         default:
    //             return 'Error';
    //     }
    // };

    // // 연산자 우선순위 처리 함수
    // const handleOperatorPrecedence = (numArr, operArr, operatorsToProcess) => {
    //     let i = 0;
    //     while (i < operArr.length) {
    //         if (operatorsToProcess.includes(operArr[i])) {
    //             const res = performOperation(operArr[i], numArr[i], numArr[i + 1]);
    //             numArr[i] = res;
    //             numArr.splice(i + 1, 1);
    //             operArr.splice(i, 1);
    //         } else {
    //             i++;
    //         }
    //     }
    // };

    // 결과값 계산 함수
    // const calculateFinalResult = () => {
    //     if (!history || OPERATOR.includes(history.slice(-1))) return;

    //     try {
    //         setHistory(prev => `${prev}=`);

    //         const numArr = history.split(/[+\-×÷]/);
    //         const operArr = history.split(/\d+/).filter(Boolean);

    //         handleOperatorPrecedence(numArr, operArr, ['×', '÷']);
    //         handleOperatorPrecedence(numArr, operArr, ['+', '-']);

    //         setResult(numArr[0]);
    //     } catch {
    //         setResult('Error');
    //     }
    // };

    // const deleteLastCharacter = () => {
    //     if (history && Number(history.slice(-1))) {
    //         setDisplay(prev => prev.slice(0, -1));
    //         setHistory(prev => prev.slice(0, -1));
    //     }
    // };

    // const initializeCalculator = () => {
    //     setNumber('');
    //     setOperator('');
    //     setResult('');
    //     setHistory('');
    //     setDisplay('');
    //     setTrigger({ type: null });
    // };

    // 숫자 입력 감지
    useEffect(() => {
        if (!number.length) return;

        setHistory(prev => prev + number);
        setDisplay(prev => prev + number);
        setNumber('');
    }, [number]);

    // 연산자 입력 감지
    useEffect(() => {
        if (!history || !operator.length) return;

        if (OPERATOR.includes(history.slice(-1))) { // 연산자 교체
            setHistory(prev => prev.slice(0, -1) + operator);
        } else if (result) { // 결과 값이 있고 연산자 클릭 시 결과값에 새로운 계산 시작
            setHistory(result + operator);
            setResult('');
            setDisplay('');
        } else { // 연산자 입력 처리
            setHistory(prev => prev + operator);
            setDisplay('');
        }
    }, [operator]);

    // init 클릭 감지
    useEffect(() => {
        if (!init) return;
        setInit(false);
    }, [init]);

    // del 클릭 감지
    useEffect(() => {
        if (!del) return;
        setDel(false);
    }, [del]);

    // equal 클릭 감지
    useEffect(() => {
        if (!equal) return;
        setEqual(false);
    }, [equal]);

    return (
        <div className={container}>
            <div className={calculator}>
                <Field historyValue={history} displayValue={result || display} />
                <Button
                    numberClick={value => setNumber(value)}
                    operatorClick={value => setOperator(value)}
                    initClick={() => setInit(true)}
                    deleteClick={() => setDel(true)}
                    equalClick={() => setEqual(true)}
                />
            </div>
        </div>
    );
};

export default Main;
