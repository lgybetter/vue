new Vue({
  el: '#demo',

  computed: {
    message () {
      return `age: ${this.age}`;
    } 
  },

  watch: {
    name (val, oldVal) {
      console.log(val, oldVal)
    }
  },

  data: {
    name: 'lgybetter',
    age: 24
  },

  methods: {
    changeName () {
      this.name = 'betterlin';
    },
  
    addAge () {
      this.age++;
    }
  },
})