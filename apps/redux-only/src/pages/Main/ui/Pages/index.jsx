import { useDispatch, useSelector } from 'react-redux';
import { mainSlice } from '@/entities/Main';
import { handleOperatorPrecedence } from '@/features';
import Field from './Fields/Field';
import Button from './Buttons/Button';
import { container, calculator } from './style.css';

const OPERATOR = ['÷', '×', '-', '+'];

const Main = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.main.history);
    const display = useSelector(state => state.main.display);
    const result = useSelector(state => state.main.result);

    const handelNumberClick = value => {
        if (result) dispatch(mainSlice.actions.mainStoreReset());
        dispatch(mainSlice.actions.updateNumber(value));
    };

    const handelOperatorClick = value => {
        if (!history) return;

        if (OPERATOR.includes(history.slice(-1))) {
            // 연산자 교체
            dispatch(mainSlice.actions.updateOperator({ value, type: 'replace' }));
        } else if (result) {
            // 결과 값이 있고 연산자 클릭 시 결과값에 새로운 계산 시작
            const previousResult = result;
            dispatch(mainSlice.actions.mainStoreReset());
            dispatch(mainSlice.actions.updateNumber(previousResult));
            dispatch(mainSlice.actions.updateOperator({ value, type: null }));
        } else {
            // 연산자 입력 처리
            dispatch(mainSlice.actions.updateOperator({ value, type: null }));
        }
    };

    const handelDeleterClick = () => {
        if (!history || result) return;

        dispatch(mainSlice.actions.updateHistory());
    };

    const handelEqualClick = () => {
        if (!history || OPERATOR.includes(history.slice(-1))) return;

        const numArr = history.split(/[+\-×÷]/);
        const operArr = history.split(/\d+/).filter(Boolean);

        handleOperatorPrecedence(numArr, operArr, ['×', '÷']);
        handleOperatorPrecedence(numArr, operArr, ['+', '-']);

        dispatch(mainSlice.actions.updateResult(`${numArr[0]}`));
    };

    return (
        <div className={container}>
            <div className={calculator}>
                <Field historyValue={history} displayValue={result || display} />
                <Button
                    numberClick={value => handelNumberClick(value)}
                    operatorClick={value => handelOperatorClick(value)}
                    initClick={() => dispatch(mainSlice.actions.mainStoreReset())}
                    deleteClick={() => handelDeleterClick()}
                    equalClick={() => handelEqualClick()}
                />
            </div>
        </div>
    );
};

export default Main;
