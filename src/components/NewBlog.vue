<template>
  <div class="container mx-auto py-8">
    <router-link to="/" class="btn btn-primary mb-4">Back</router-link>
    <form @submit.prevent="addBlog" class="space-y-6">
      <div>
        <label for="title" class="block text-lg font-medium text-gray-700"
          >Title</label
        >
        <input
          v-model="newBlog.title"
          type="text"
          id="title"
          class="input w-full"
          placeholder="Enter blog title"
        />
      </div>
      <div>
        <label for="excerpt" class="block text-lg font-medium text-gray-700"
          >Excerpt</label
        >
        <input
          v-model="newBlog.excerpt"
          type="text"
          id="excerpt"
          class="input w-full"
          placeholder="Enter excerpt"
        />
      </div>
      <div>
        <label for="content" class="block text-lg font-medium text-gray-700"
          >Content</label
        >
        <textarea
          v-model="newBlog.content"
          id="content"
          class="textarea w-full"
          rows="6"
          placeholder="Enter content"
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn btn-primary btn-wide">Save</button>
      </div>
    </form>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import axios from "axios";

const newBlog = ref({
  title: "",
  excerpt: "",
  content: "",
});

const addBlog = async () => {
  try {
    await axios.post("http://localhost:5000/blogs", newBlog.value);
    // Очистить форму после отправки
    newBlog.value.title = "";
    newBlog.value.excerpt = "";
    newBlog.value.content = "";
  } catch (error) {
    console.error("Error adding blog:", error);
  }
};
</script>
  

<!-- <template>
  <div class="container mx-auto py-8">
    <router-link to="/" class="btn btn-primary mb-4">Back</router-link>
    <form @submit.prevent="addBlog" class="space-y-6">
      <div>
        <label for="title" class="block text-lg font-medium text-gray-700">Title</label>
        <input v-model="newBlog.title" type="text" id="title" class="input w-full" placeholder="Enter blog title"/>
      </div>
      <div>
        <label for="excerpt" class="block text-lg font-medium text-gray-700">Excerpt</label>
        <input v-model="newBlog.excerpt" type="text" id="excerpt" class="input w-full" placeholder="Enter excerpt"/>
      </div>
      <div>
        <label for="content" class="block text-lg font-medium text-gray-700">Content</label>
        <textarea v-model="newBlog.content" id="content" class="textarea w-full" rows="6" placeholder="Enter content"></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn btn-primary btn-wide">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const newBlog = ref({
  title: "",
  excerpt: "",
  content: "",
});

const addBlog = async () => {
  try {
    await axios.post('http://localhost:5000/blogs', newBlog.value);
    // Очистить форму после отправки
    newBlog.value.title = "";
    newBlog.value.excerpt = "";
    newBlog.value.content = "";
  } catch (error) {
    console.error("Error adding blog:", error);
  }
};
</script>
 -->
