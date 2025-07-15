import { style } from '@vanilla-extract/css';

export const summaryTextBox = style({
    display: 'flex',
    gap: 8,
});

export const yearSummary = style({
    marginRight: -20,
    padding: '4px 6px',
    backgroundColor: '#566e97',
    borderRadius: 4,
    color: '#fff',
    fontSize: 13,
});

export const textTitle = style({
    fontSize: 13,
    color: '#757b93',
});

export const textValue = style({
    fontSize: 13,
    color: '#091e42',
});
