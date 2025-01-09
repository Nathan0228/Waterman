<template>
  <div class="blog-card">
    <img :src="image" alt="Blog Image" class="blog-image"/>
    <h2>{{ title }}</h2>
    <p>{{ excerpt }}</p>
    <small>{{ publishDate }}</small>
    <router-link :to="{ name: 'PostDetail', params: { id } }" class="read-more">阅读全文</router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    id: String,
    title: String,
    excerpt: String,
    publishDate: String,
    image: String
  }
};
</script>

<style scoped>
.blog-card {
  width: 300px;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  margin: 0;
}

p {
  font-size: 1em;
  color: #666;
}

small {
  color: #999;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  font-size: 1.1em;
  color: #007bff;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
