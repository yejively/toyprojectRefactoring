import { style } from '@vanilla-extract/css';

export const loading = style({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const spinner = style( {
    width: 200,
    height: 200,
});
