const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if(value < 0 || value > 50) {
        this.counter = 0;
      }
    }
    // name(newValue, oldValue)
    // name(value) {
    //   if(value == '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName; 
    //   }
    // },
    // lastName(value) {
    //   if(value == '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value; 
    //   }
    // }
  },
  computed: {
    // SE DEFINEN MÉTODOS, PERO LOS MÉTODOS DE AQUÍ SE EJECUTAN DE MANERA DISTINTA
    // PARA USARLO EN EL HTML, NO SE PONE fullname(), SE PONE fullname A SECAS, NO LO LLAMAS, SIMPLEMENTE LE APUNTAS Y VUE LO LLAMA POR NOSOTROS.
    // CON COMPUTED EVITAMOS USAR FUNCIONES EN EL HTML, YA QUE SE EJECUTAN CADA VEZ QUE ALGO CAMBIA EN LA PÁGINA AUNQUE NO ESTÉN RELACIONADOS, COMPUTED EVITA ESO, TIENE LA MISMA FUNCIONALIDAD PERO SOLO SE EJECUTA CUANDO TIENE QUE EJECUTARSE.

    fullname() {
      if (this.name == '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
      }
    }

  },
  methods: {
    outputFullName() {
      if (this.name == '') {
        return '';
      } else {
        return this.name + ' ' + 'Trillo';
      }
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
