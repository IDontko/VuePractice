<template>
    <div>
        <h2>我是用户界面</h2>
        <div>哈哈</div>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
export default {
    name: "User",
    computed: {
        userId() {
            console.log(this.$route.params)
            return this.$route.params.userId
        }
    }
}
</script>