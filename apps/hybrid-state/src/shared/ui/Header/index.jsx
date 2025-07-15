import { tabComponent } from './style.css';

export { default as HeaderInfo } from './info';
export { default as YearBox } from './year';


export const Tab = ({ name }) => {
    return <div className={tabComponent}>{name}</div>;
};
