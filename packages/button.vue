<template>
        <button 
            class="wz-button"
            :class="[type ? `wz-button--${type}` : ``,
            {
                'is-plain': plain,
                'is-disabled':  disabled,
                'is-circle': circle
            }]"
            @click="handleClick"
            >
            <i v-if="icon" :class="icon"></i>
            <!-- 如果没传任何内容 当我们没有传入插槽的时候就不显示 -->
            <span v-if="$slots.default"><slot></slot></span>
        </button>
</template>

<script>
export default {
    name: 'WzButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        plain: Boolean,
        disabled: Boolean,
        circle: Boolean,
        icon: {
            type: String,
            default: ''
        }
    },
    methods: { 
        handleClick(e) {
            this.$emit('click',e);
        }
    }
}
</script>

<style lang="less" scoped>
    .wz-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        &:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
        &.is-disabled, &.is-disabled:hover{
            color: #c0c4cc;
            cursor: not-allowed;
            background-image: none;
            background-color: #fff;
            border-color: #ebeef5;
        }
        &.is-circle {
            border-radius: 50%;
            padding: 12px;
        }
        //wz-icon图标后的span的左边距为5px;
        [class*=wz-icon-]+span {
            margin-left: 5px;
        }
    }

    .wz-button--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
        &.is-plain{
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
        }
        &.is-disabled, &.is-disabled:hover{
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff;
        }
    }

    .wz-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
        &.is-plain{
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0;
        }
        &.is-disabled, &.is-disabled:hover{
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d;
        }
    }

    .wz-button--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        } 
        &.is-plain{
            color: #909399;
            background: #f4f4f5;
            border-color: #d3d4d6;
        }
        &.is-disabled, &.is-disabled:hover{
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc;
        }
    }

    .wz-button--warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        } 
        &.is-plain{
            color: #e6a23c;
            background: #fdf6ec;
            border-color: #f5dab1;
        }
        &.is-disabled, &.is-disabled:hover{
            color: #fff;
            background-color: #f3d19e;
            border-color: #f3d19e;
        }
    }

    .wz-button--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        } 
        &.is-plain{
            color: #f56c6c;
            background: #fef0f0;
            border-color: #fbc4c4;
        }
        &.is-disabled, &.is-disabled:hover{
            color: #fff;
            background-color: #fab6b6;
            border-color: #fab6b6;
        }
    }
</style>
