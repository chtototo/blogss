<template>
    <div class="container mx-auto py-8">
      <!-- Список блогов -->
      <div class="grid grid-cols-3 gap-4">
        <div v-for="post in posts" :key="post.id" class="card bg-primary text-primary-content w-96">
          <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <div class="card-actions justify-end">
              <router-link :to="`/post/${post._id}`" class="btn btn-neutral">Read it</router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Кнопка для создания нового блога -->
      <router-link to="/new-blog" class="btn btn-wide btn-primary">Create new blog</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  const posts = ref([]);
  
  // Получаем все блоги при монтировании компонента
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:5000/blogs');
      posts.value = response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  });
  </script>
  

<!-- <template>
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="post in postsStore.posts"
          :key="post.id"
          class="card bg-primary text-primary-content w-96"
        >
          <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <div class="card-actions justify-end">
              <router-link :to="`/post/${post.id}`" class="btn btn-neutral">
                Read it
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/new-blog" class="btn btn-wide btn-primary">Create new blog</router-link>
    </div>
  </template>
  
  <script setup>
  import { usePostsStore } from "../stores/posts.js";
  
  // Получаем доступ к состоянию хранилища
  const postsStore = usePostsStore();
  </script>
   -->