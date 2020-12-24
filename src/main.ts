import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import World from './components/World.vue';
import World2 from './components/World2.vue';
import {createWebHashHistory, createRouter} from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [{path: '/', component: World},
    {path: '/xxx', component: World2},
  ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');
