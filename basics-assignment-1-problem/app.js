const app = Vue.createApp({
    data() {
        return {
        me: {name: 'Aitor', age: 21, favNumber: Math.random()},
        img: 'https://media.giphy.com/media/fAmnJKCwuXtDiEhNwg/giphy-downsized-large.gif'
        };
    },
    methods: {
        random() {
            var favNumber = Math.random();
            return favNumber;
            // Se puede retornar el Math.random() directamente.
        },
        ageInFuture() {
            var age = this.me.age + 5;
            return age;
        }
    }
});

app.mount('#assignment');