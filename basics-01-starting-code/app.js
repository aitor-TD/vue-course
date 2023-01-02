const app = Vue.createApp({
    data() {
        return {
            message: 'Learn Vue',
            dictionary: {name: 'Aitor', age: 21, city: 'Granada'},
            array: ['Aitor', 21, 'Granada'],
            src: 'https://media.giphy.com/media/dVteEXB3aPER9ZYgFQ/giphy.gif',
            linkedin: "https://www.linkedin.com/in/aitortrillod%C3%ADaz/",
        };
    }
});

app.mount("#user-goal");