import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../style.css';

const History = () => {
    const historyValue = useSelector(state => state.input.history);

    return <div className={history}>{historyValue}</div>;
};

export default History;
