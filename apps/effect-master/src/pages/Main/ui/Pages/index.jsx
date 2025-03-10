import { useState, useEffect } from 'react';
import Field from './Fields/Field';
import Button from './Buttons/Button';
import { container, calculator } from './style.css';

const Main = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState('');
    const [result, setResult] = useState('');
    const [trigger, setTrigger] = useState(null); // 어떤 동작이 발생했는지 구분

    const OPERATOR = ['÷', '×', '-', '+'];

    // 계산 함수
    const calc = (oper, numOne, numTwo) => {
        const n1 = Number(numOne);
        const n2 = Number(numTwo);

        switch (oper) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '×': return n1 * n2;
            case '÷': return n2 !== 0 ? n1 / n2 : 'Error';
            default: return 'Error';
        }
    };

    // 연산자 우선순위 처리 함수
    const processOperators = (numArr, operArr, operatorsToProcess) => {
        let i = 0;
        while (i < operArr.length) {
            if (operatorsToProcess.includes(operArr[i])) {
                const res = calc(operArr[i], numArr[i], numArr[i + 1]);
                numArr[i] = res;
                numArr.splice(i + 1, 1);
                operArr.splice(i, 1);
            } else {
                i++;
            }
        }
    };

    // 숫자 입력 감지 -> 자동 입력
    useEffect(() => {
        if (trigger?.type === 'number') {
            setInput(trigger.value);
            setHistory(prev => prev + trigger.value);
        }
    }, [trigger]);

    // 연산자 입력 감지 -> 자동 입력
    useEffect(() => {
        if (trigger?.type === 'operator') {
            if (!history) return;

            if (OPERATOR.includes(history.slice(-1))) {
                setHistory(prev => prev.slice(0, -1) + trigger.value);
            } else {
                setHistory(prev => prev + trigger.value);
            }
        }
    }, [trigger]);

    // 삭제 버튼 감지 -> 자동 삭제
    useEffect(() => {
        if (trigger?.type === 'delete') {
            if (!history) return;
            setInput(prev => prev.slice(0, -1));
            setHistory(prev => prev.slice(0, -1));
        }
    }, [trigger]);

    // 초기화 버튼 감지 -> 자동 초기화
    useEffect(() => {
        if (trigger?.type === 'init') {
            setInput('');
            setResult('');
            setHistory('');
        }
    }, [trigger]);

    // 자동 계산 (history가 변경될 때 실행)
    useEffect(() => {
        if (trigger?.type === 'equal') {
            if (!history || OPERATOR.includes(history.slice(-1))) return;

            try {
                setHistory(prev => `${prev}=`);
                const numArr = history.split(/[+\-×÷]/);
                const operArr = history.split(/\d+/).filter(Boolean);

                processOperators(numArr, operArr, ['×', '÷']);
                processOperators(numArr, operArr, ['+', '-']);

                setResult(numArr[0]);
            } catch {
                setResult('Error');
            }
        }
    }, [trigger]);

    return (
        <div className={container}>
            <div className={calculator}>
                <Field historyValue={history} displayValue={result || input} />
                <Button
                    numberClick={(value) => setTrigger({ type: 'number', value })}
                    operatorClick={(value) => setTrigger({ type: 'operator', value })}
                    initClick={() => setTrigger({ type: 'init' })}
                    deleteClick={() => setTrigger({ type: 'delete' })}
                    equalClick={() => setTrigger({ type: 'equal' })}
                />
            </div>
        </div>
    );
};

export default Main;
