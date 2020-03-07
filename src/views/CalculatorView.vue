<template>
    <div class="calculator-view">
        <h2>{{ title }}</h2>

        <Calculator
            :args="args"
            :fn="fn"
        />
    </div>
</template>

<script>
import Calculator from '../components/Calculator';

export default {
    name: 'CalculatorView',
    data: () => ({
        title: '',
        args: [],
        fn: v => v,
    }),
    methods: {
        setStrategy() {
            const { title, args, fn } = this.$route.meta.strategy;

            this.title = title;
            this.args = args.map(arg => ({ ...arg, value: undefined }));
            this.fn = fn;
        },
    },
    components: {
        Calculator,
    },
    watch: {
        $route() {
            this.setStrategy();
        },
    },
    created() {
        this.setStrategy();
    },
};
</script>
