import Vue from 'vue';
import App from './App.vue';
import { appRegistry } from 'app-mediator';

const appRoot =
  appRegistry.findContainer('vue-app', '#root') || document.querySelector('#root');

new Vue({
  el: appRoot,
  render: (h) => h(App)
});
