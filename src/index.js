import Vue from 'vue';
import App from './App.vue';
import { getRoot } from './utils/registry';

const appRoot = getRoot('vue-app', '#root') || document.querySelector('#root');

new Vue({
	el: appRoot,
	render: (h) => h(App)
});
