import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonContainer = style({
    display: "grid",
    justifyContent: 'center',
    gridTemplateRows:'repeat(5, 70px)',
    gridTemplateColumns: 'repeat(4, 70px)',
    gap: 20,
});

export const button = recipe({
    base: { // button 공통 style
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
});