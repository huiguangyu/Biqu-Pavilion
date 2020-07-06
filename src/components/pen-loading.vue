<template>
    <div v-show='loading' class='loading'>
        <div class='loading'>
            <van-loading color="#14a8f6" size='14px' />
            加载中,请稍后...
        </div>
    </div>
</template>
<script>
export default {
    name: 'PenLoading',
    props: {
        loading: Boolean,
    }
}
</script>
<style lang="less" scoped>
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        z-index: 999;
        font-size: 12px;
    }
</style>