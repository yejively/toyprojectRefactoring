import { style } from '@vanilla-extract/css';

export const display = style({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'end',
    height: 123,
    fontSize: 40,
    fontWeight: 500,
    lineHeight: 1.2,
    color: '#000',
    width: 340,
    margin: '0 auto',
});

export const history = style({
    display: "flex",
    alignItems: 'end',
    justifyContent: 'end',
    height: 87,
    fontSize: 21,
    color: '#000',
    width: 340,
    margin: '0 auto',
});