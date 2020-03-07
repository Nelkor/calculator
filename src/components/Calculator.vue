<template>
    <div class="calculator">
        <div class="args">
            <div
                class="arg"
                v-for="(arg, index) in args"
                :key="index"
            >
                <div class="name">{{ arg.name }}</div>

                <el-input-number
                    v-model="arg.value"
                    :precision="arg.precision"
                    :min="arg.min"
                    :max="arg.max"
                />

                <div class="description">{{ arg.description }}</div>
            </div>
        </div>

        <div
            class="result"
            :class="{ ready: result }"
        >{{ textResult }}</div>
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    props: {
        args: Array,
        fn: Function,
    },
    computed: {
        result() {
            if (this.args.some(a => a.value === undefined)) return null;

            return this.fn.call(null, ...(this.args).map(arg => arg.value));
        },
        textResult() {
            return this.result === null
                ? 'Заполните входные значения'
                : `Результат: ${+this.result.toFixed(9)}`;
        },
    },
};
</script>

<style lang="scss" scoped>
    .arg {
        margin-bottom: 30px;
    }

    .name {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
    }

    .description {
        margin-top: 10px;
    }

    .result {
        font-size: 22px;
        color: #777;

        &.ready {
            color: #409eff;
        }
    }
</style>
