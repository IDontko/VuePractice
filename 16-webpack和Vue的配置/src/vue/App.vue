<template>
    <div>
        <h2>组件测试</h2>
        <div>这是我的组件名称</div>
        <div>{{name}}</div>
        <div>{{counter}}</div>
        <div>
            <button @click="btnClick()">按钮</button>
        </div>
    </div>
</template>

<script>
export default{
    template:'',
    name: 'app',
    data() {
        return {
            name : 'gyAppVue',
            counter: 1
        }
    },
    methods: {
        btnClick(){
            this.counter++
        }
    },
}

</script>
