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
    },

    submitForm(event) {
      // event.preventDefault(); 
      // ESTO SE USA PARA PREVENIR LA RECARGA DE LA PÁGINA QUE HACE EL NAVEGADOR POR DEFECTO AL MANDAR UN FORMULARIO, ESTA OPCION ES NATIVA DE JS, NO ES DE VUE.
      // EVENT MODIFIERS ON VUE - https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
      alert('Submitted')
    }
  }
});

app.mount('#events');
