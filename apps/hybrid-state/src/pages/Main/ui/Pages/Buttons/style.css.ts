import { style, styleVariants } from '@vanilla-extract/css';

export const buttonContainer = style({
    display: 'grid',
    justifyContent: 'center',
    gridTemplateRows: 'repeat(5, 70px)',
    gridTemplateColumns: 'repeat(4, 70px)',
    gap: 20,
});

const buttonBase = style({
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
});

export const button = styleVariants({
    default: [buttonBase, { backgroundColor: '#e1e4e5', color: '#000' }],
    operator: [buttonBase, { backgroundColor: '#ff9404', color: '#fff' }],
    init: [buttonBase, { backgroundColor: '#ffc5c5', color: '#ff2e2e' }],
    equal: [buttonBase, { backgroundColor: '#30cb72', color: '#fff' }],
    delete: [
        buttonBase,
        {
            backgroundColor: '#e1e4e5',
            backgroundImage: 'url("/delete.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'transparent',
        },
    ],
});
