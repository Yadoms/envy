import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import Vue from 'vue';
import App from '../vue/App.vue';

new Vue({ render: createElement => createElement(App) }).$mount('#app');