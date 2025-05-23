const Buttons = [
    { value: 'C', style: 'init', event: { type: 'init', useEvent: true } },
    { value: '%', style: 'default', event: { type: null, useEvent: false } },
    { value: '()', style: 'default', event: { type: null, useEvent: false } },
    { value: '÷', style: 'operator', event: { type: 'operator', useEvent: true } },
    { value: '7', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '8', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '9', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '×', style: 'operator', event: { type: 'operator', useEvent: true } },
    { value: '4', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '5', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '6', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '-', style: 'operator', event: { type: 'operator', useEvent: true } },
    { value: '1', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '2', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '3', style: 'default', event: { type: 'number', useEvent: true } },
    { value: '+', style: 'operator', event: { type: 'operator', useEvent: true } },
    { value: '.', style: 'default', event: { type: null, useEvent: false } },
    { value: '0', style: 'default', event: { type: 'number', useEvent: true } },
    { value: 'del', style: 'delete', event: { type: 'delete', useEvent: true } },
    { value: '=', style: 'equal', event: { type: 'equal', useEvent: true } },
];

export default Buttons;
