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

export const headerInfo = style({
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    fontSize: 24,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: '#091e42',
});

export const tabComponent = style({
    fontSize: 14,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    cursor: 'pointer',
});

export const yearBox = style({
    width: 180,
    height: 36,
    fontSize: 14,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: 'solid 1px #d7dbe6',
    borderRadius: 4,
    padding: 10,
    color: '#172a4b',
});

export const yearButton = style({
    all: 'unset',
    cursor: 'pointer',
});
