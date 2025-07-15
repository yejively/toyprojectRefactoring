import { style } from '@vanilla-extract/css';

export const summary = style({
    display: 'flex',
    gap: 30,
    padding: '21px 30px',
    alignItems: 'center',
});

export const tableHeader = style({
    padding: '0 30px',
    backgroundColor: '#f4f5f7',
    height: 60,
});

export const tableHeaderWrapper = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(60px, 6%)) minmax(200px, 20%) minmax(210px, 21%) repeat(9, minmax(136px, 13.6%)) 40px;',
    alignItems: 'center',
    fontSize: 12,
    color: '#091e42',
    textAlign: 'center',
    height: '100%',
});

export const mainTable = style({
    padding: '12px 18px 12px 30px',
    overflow: 'hidden scroll',
    height: 'calc(100vh - 307px)',
})

export const panelWrapper = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(60px, 6%)) minmax(200px, 20%) minmax(210px, 21%) repeat(9, minmax(136px, 13.6%)) 40px',
    height: 58,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 2px 0 #d7dbe6',
});

export const exDiv = style({
    textAlign: 'center',
});

export const mainTableWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
});

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

export const panel = style({
    textAlign: 'center',
});
