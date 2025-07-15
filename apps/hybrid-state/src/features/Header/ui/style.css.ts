import { style } from '@vanilla-extract/css';

export const headerBox = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    borderBottom: 'solid 1px #d7dbe6',
    padding: '0 30px',
});

export const tabBox = style({
    height: 40,
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    padding: '0 30px',
});
