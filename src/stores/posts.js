// posts.js
import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      { id: 1, title: 'Первый блог', excerpt: 'Это первый блогz, краткое описание.', content: 'Контент блога' },
    ]
  }),
  actions: {
    addPost(post) {
      this.posts.push(post);
    }
  }
});
