<template>
  <div class="blog-card">
    <div class="image-container">
      <img :src="image" alt="Blog Image" class="blog-image" />
    </div>
    <div class="blog-content">
      <h2 class="blog-title">{{ title }}</h2>
      <p class="blog-excerpt">{{ excerpt }}</p>
      <p class="publish-date">{{ publishDate }}</p>
      <button @click="readMore">阅读全文</button>
      <!-- <router-link :to="{ name: 'PostDetail', params: { id } }" class="read-more">阅读全文</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    id:String,
    title: String,
    excerpt: String,
    publishDate: String,
    image: String,  // 通过 props 接收博客图片路径
  },
  methods: {
    readMore() {
      this.$router.push({path: `/post/${this.id}`});
      // alert("跳转到完整文章...");
    }
  }
};
</script>

<style scoped>
.blog-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  transition: transform 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保证图片充满容器，保持比例 */
}

.blog-content {
  padding: 20px;
}

.blog-title {
  font-size: 1.5em;
  margin: 0;
  color: #3498db;
}

.blog-excerpt {
  color: #555;
  font-size: 1em;
  margin: 10px 0;
}

.publish-date {
  font-size: 0.9em;
  color: #777;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background-color: #2980b9;
}
</style>
