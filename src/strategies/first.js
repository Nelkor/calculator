const title = 'Простая покупка с учётом комиссии';

const args = [
    {
        name: 'V',
        precision: 3,
        description: 'размер/объём ордера',
        min: 0,
    },
    {
        name: 'F',
        precision: 2,
        description: 'комиссия биржи на покупку (процент от размера ордера)',
        min: 0,
        max: 100,
    },
];

const fn = (V, F) => V * (1 + F / 100);

export default { title, args, fn };
