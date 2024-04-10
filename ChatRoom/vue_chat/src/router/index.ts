import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import ChatroomList from './components/ChatroomList.vue';
import Chatroom from './components/Chatroom.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/chatroom-list',
    name: 'ChatroomList',
    component: ChatroomList
  },
  {
    path: '/chatroom/:id',
    name: 'Chatroom',
    component: Chatroom,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
