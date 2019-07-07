new Vue({
  el: '#demo',

  computed: {
    message () {
      return `name: ${this.name}, age: ${this.age}`;
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