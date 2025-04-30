import React from 'react';
import { button } from './style.css';

const Button = ({ info }) => {
    const {
        value,
        style,
        event: { type, useEvent },
    } = info;

    return (
        <button className={button[style]} data-value={value} data-type={type} data-event={useEvent}>
            {value}
        </button>
    );
};

// React.memo props가 변경되지 않으면, 이전 렌더링 결과를 재사용하여 성능을 최적화
export default React.memo(Button);
