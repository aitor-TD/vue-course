const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: "",
      name: ""
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter++;
      this.counter = this.counter + Number(this.number); // El Number() se hace para transformar una cadena de texto en número.
      this.number = '';
    },
    remove() {
      if(this.counter > 0) { // Así no saca números negativos en el contador
        this.counter--;
      };
    },
    deleteNumber() { // Al parecer NO se puede usar la palabra delete en una función, estará reservada o algo.
      this.counter = 0;
    }
  }
});

app.mount('#events');
