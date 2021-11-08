const app = new Vue({
    el: '#app',
    data : {
        books : [
            {
                id: 1,
                name: '《算法导论》',
                data: '2007-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                data: '2006-9',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                data: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4 ,
                name: '《代码大全》',
                data: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        increment(index){
            return this.books[index].count++
        },
        decrement(index){
            return this.books[index].count--
        },
        removeHandler(index){
            this.books.splice(index,1);
        }
    },
    computed : {
        totalPrice: function(){
            let totalPrice = 0;
            // for(let i in this.books){
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // 直接获取变量 let ... of
            // for(let item of this.books){
            //     totalPrice += item.price * item.count;   
            // }
            // 函数式编程
            return  this.books.reduce(function(pre, v){
                return pre + v.price * v.count; 
            }, 0)
        
            
        }
    },
    filters : {
        showPrice(price){
            return "￥"+ price.toFixed(2)
        }
    }
})