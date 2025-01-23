import { style, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// html, body default 객체 설정
const defaultSetting = {
    margin: 0,
    padding: 0,
    height: '100%',
    boxSizing: 'border-box' as const,
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

export const buttons = style({
    display: 'grid',
    justifyContent: 'center',
    gridTemplateRows: 'repeat(5, 70px)',
    gridTemplateColumns: 'repeat(4, 70px)',
    gap: 20,
});

export const button = recipe({
    base: {
        // button 공통 style
        padding: 20,
        fontSize: 23,
        borderRadius: 15,
        border: 'none',
        cursor: 'pointer',
        selectors: {
            '&:hover': {
                opacity: 0.8,
            },
        },
    },
    variants: {
        // button의 value 에따라 스타일 설정
        value: {
            default: { backgroundColor: '#e1e4e5', color: '#000' },
            operator: { backgroundColor: '#ff9404', color: '#fff' },
            init: { backgroundColor: '#ffc5c5', color: '#ff2e2e' },
            equal: { backgroundColor: '#30cb72', color: '#fff' },
            delete: {
                backgroundColor: '#e1e4e5',
                backgroundImage: 'url("/delete.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            },
        },
    },
    defaultVariants: {
        // variants 속성의 기본값 설정
        value: 'default',
    },
});

export const display = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    height: 123,
    fontSize: 40,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#000',
    paddingBottom: 30,
});

export const history = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    height: 23,
    fontSize: 21,
    color: '#000',
});
