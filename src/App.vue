<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <h4>{{counter}}</h4>
    <button @click="onCLick">increment</button>
  </div>
</template>

<script>
  import { eventRegistry } from 'app-mediator';
  import './style/main.css';

  export default {
    name: 'app',
    mounted() {
      eventRegistry.subscribe('some-event', () => this.increment());
    },
    data () {
      return {
        msg: 'Vue App!',
        counter: 0
      }
    },
    methods: {
      onCLick() {
        eventRegistry.dispatch('some-event');
      },
      increment() {
        this.counter++;
      }
    }
  }
</script>