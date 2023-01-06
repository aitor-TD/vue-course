const app = Vue.createApp({
  data() {
    return {
      output: "",
      output2: "",
      confirmedOutput: "",
    };
  },
  methods: {
    alertBtn() {
      alert("Hola!");
    },
    writing(event) {
      this.output = event.target.value;
    },
    writingTwo(event) {
        this.output2 = event.target.value;
    },
    confirmOutput() {
        this.confirmedOutput = this.output2;
    }
  }
});
app.mount("#assignment");
