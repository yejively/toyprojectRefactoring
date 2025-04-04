const getButtonVariant = value => {
    if (['÷', '×', '-', '+'].includes(value)) return 'operator';
    if (value === 'C') return 'init';
    if (value === '=') return 'equal';
    if (value === 'del') return 'delete';
};

export default getButtonVariant;
