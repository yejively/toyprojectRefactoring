import { useState, useEffect } from 'react';
import { handleOperatorPrecedence } from '@/features';
import Field from './Fields/Field';
import Button from './Buttons/Button';
import { container, calculator } from './style.css';

const OPERATOR = ['÷', '×', '-', '+']; // Main 컴포넌트가 리렌더링될 때 재선언되지 않음.

const Main = () => {
    const [history, setHistory] = useState('');
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');
    const [number, setNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [init, setInit] = useState(false);
    const [del, setDel] = useState(false);
    const [equal, setEqual] = useState(false);

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

        if (OPERATOR.includes(history.slice(-1))) {
            // 연산자 교체
            setHistory(prev => prev.slice(0, -1) + operator);
        } else if (result) {
            // 결과 값이 있고 연산자 클릭 시 결과값에 새로운 계산 시작
            setHistory(result + operator);
            setResult('');
            setDisplay('');
        } else {
            // 연산자 입력 처리
            setHistory(prev => prev + operator);
            setDisplay('');
        }
    }, [operator]);

    // init 클릭 감지
    useEffect(() => {
        if (!init) return;

        setNumber('');
        setOperator('');
        setResult('');
        setHistory('');
        setDisplay('');
        setInit(false);
    }, [init]);

    // del 클릭 감지
    useEffect(() => {
        if (!del) return;

        if (history) {
            setDisplay(prev => prev.slice(0, -1));
            setHistory(prev => prev.slice(0, -1));
        }
        setDel(false);
    }, [del]);

    // equal 클릭 감지
    useEffect(() => {
        if (!equal) return;

        try {
            if (history && !OPERATOR.includes(history.slice(-1))) {
                setHistory(prev => `${prev}=`);

                const numArr = history.split(/[+\-×÷]/);
                const operArr = history.split(/\d+/).filter(Boolean);

                handleOperatorPrecedence(numArr, operArr, ['×', '÷']);
                handleOperatorPrecedence(numArr, operArr, ['+', '-']);

                setResult(numArr[0]);
            }
        } catch {
            setResult('Error');
        } finally {
            setEqual(false);
        }
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
