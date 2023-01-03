const app = Vue.createApp({
    data() {
        return {
            message: 'Learn Vue',
            courseGoalA: 'course goal A',
            courseGoalB: 'course goal B',
            rawHTML: '<h1>Hello</h1>',
            dictionary: {name: 'Aitor', age: 21, city: 'Granada'},
            array: ['Aitor', 21, 'Granada'],
            src: 'https://media.giphy.com/media/dVteEXB3aPER9ZYgFQ/giphy.gif',
            linkedin: "https://www.linkedin.com/in/aitortrillod%C3%ADaz/",
        };
    }, 
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                return 'Learn Vue!'
            } else {
                return 'Also Learn Vue.'
            }
        },
        outputCourseGoal() {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount("#user-goal");