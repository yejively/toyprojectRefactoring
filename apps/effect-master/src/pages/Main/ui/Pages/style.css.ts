import { globalStyle, style } from '@vanilla-extract/css';

// html, body default 객체 설정
const defaultSetting = {
    margin: 0,
    padding: 0,
    height: '100%',
};

// 전역 스타일 설정
globalStyle('html, body', defaultSetting);
globalStyle('*', {
    boxSizing: 'border-box',
});

export const container = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
});

export const calculator = style({
    width: 400,
    height: 680,
    padding: '66px 24px 24px 28px',
    border: 'solid 1px #c8c8c8',
    borderRadius: 25,
});
