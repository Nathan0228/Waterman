import { createRouter, createWebHistory } from 'vue-router'; // 使用命名导出
import Home from '@/views/Home.vue';
import PostDetail from '@/views/PostDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',  // 动态路由，使用 :id 来传递文章的 id
    name: 'PostDetail',
    component: PostDetail,
    props: true  // 使得 `id` 可以作为 props 传递给 PostDetail 组件
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
