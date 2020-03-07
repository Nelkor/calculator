const title = 'Покупка с использованием усреднения';

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
    {
        name: 'N',
        precision: 0,
        description: 'количество дополнительных ордеров',
        min: 0,
    },
];

const fn = (V, F, N) => V * (1 + F / 100) * (N + 1);

export default { title, args, fn };
