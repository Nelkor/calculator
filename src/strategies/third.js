const title = 'Арбитражная сделка';

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
        name: 'F1',
        precision: 2,
        description: 'комиссия биржи 1 на вывод средств (процент от размера\n' +
            'средств на вывод)',
        min: 0,
        max: 100,
    },
    {
        name: 'F2',
        precision: 2,
        description: 'комиссия биржи 2 на продажу (процент от размера ордера)',
        min: 0,
        max: 100,
    },
];

const fn = (V, F, F1, F2) =>
    V * (1 + F / 100) * (1 + F1 / 100) * (1 + F2 / 100);

export default {title, args, fn};
