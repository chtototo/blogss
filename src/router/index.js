import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Post from '@/components/Post.vue';
import NewBlog from '@/components/NewBlog.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/post/:id', component: Post, props: true },
    { path: '/new-blog', component: NewBlog },
  ]
});

export default router;


// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/components/Home.vue'
// import Post from '@/components/Post.vue'
// import NewBlog from '@/components/NewBlog.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//      path: '/',
//      name: '',
//      component: Home,
//     },
//     {
//       path: '/post/:id',
//       name: 'Post',
//       component: Post,
//       props: true,
//     },
//     {
//       path: '/new-blog',
//       name: 'New blog',
//       component: NewBlog,
//     },
//   ]
// })

// export default router
