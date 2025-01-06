import { FontColor } from './style.css';
import { ColorTag } from './style';

const Main = () => {
    return (
        <>
            <ColorTag>테스트1</ColorTag>
            <div className={FontColor}>테스트</div>
        </>
    );
};

export default Main;
