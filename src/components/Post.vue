<template>
  <div class="flex flex-col gap-8">
    <router-link to="/" class="text-blue-500 hover:underline"
      >Назад</router-link
    >
    <div class="">
        <h1 class="text-3xl font-bold mb-6 break-words">{{ post.title }}</h1>
        <p class="text-gray-500 mb-4 break-words">{{ post.excerpt }}</p>
    </div>
    <p class="text-gray-700 mb-4 break-words">{{ post.content }}</p>
  </div>
</template>
      
  <script setup>
import { ref, watch, onMounted } from "vue";
import { usePostsStore } from "../stores/posts.js";

// Получаем ID поста через props
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

// Получаем доступ к хранилищу постов
const postsStore = usePostsStore();

// Ссылка на текущий пост
const post = ref({});

// Функция для поиска поста по ID
const loadPost = () => {
  post.value = postsStore.posts.find((p) => p.id === Number(props.id)) || "";
};
console.log(post);
// Загружаем пост при монтировании компонента
onMounted(() => {
  loadPost();
});

// Если ID меняется (например, при навигации), обновляем пост
watch(
  () => props.id,
  () => {
    loadPost();
  }
);
</script>
  