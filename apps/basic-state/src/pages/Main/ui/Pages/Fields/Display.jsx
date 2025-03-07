import React from 'react';
import { useSelector } from 'react-redux';
import { display } from '../style.css';

const Display = () => {
    const displayValue = useSelector(state => [...state.input.history].reverse().find(n => Number(n)));
    const resultValue = useSelector(state => state.input.result);
    // reverse 함수는 원본 배열을 변경해서 immutable 상태인 배열은 오류가 발생 -> 배열을 복사 후 변경

    return <div className={display}>{resultValue || displayValue}</div>;
};

export default Display;
