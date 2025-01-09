<template>
    <div class="home">
      <header class="header">
        <h1>欢迎来到我的博客</h1>
        <p class="description">记录我的生活、思考与学习</p>
      </header>
  
      <section class="blog-list">
        <BlogCard
          v-for="(post, index) in posts"
          :key="index"
          :id="post.id"
          :title="post.title"
          :excerpt="post.excerpt"
          :publishDate="post.publishDate"
          :image="post.image"
        />
      </section>
    </div>
  </template>
  
  <script>
  import BlogCard from "@/components/BlogCard.vue";
  
  export default {
    name: "Home",
    components: {
      BlogCard
    },
    data() {
      return {
        posts: [
          {
            id: "1",
            title: "我的第一篇博客",
            excerpt: "这是我的第一篇博客文章，讲述我如何开始写博客...",
            publishDate: "2025-01-01",
            image: "https://via.placeholder.com/200x150"
          },
          {
            id: "2",
            title: "Vue.js 入门教程",
            excerpt: "Vue.js 是一个渐进式的 JavaScript 框架，这篇文章将带你...",
            publishDate: "2025-01-05",
            image: "https://via.placeholder.com/200x150"
          },
          {
            id: "3",
            title: "Java 基础学习笔记",
            excerpt: "Java 是一门广泛使用的编程语言，本文总结了我在学习 Java 的...",
            publishDate: "2025-01-10",
            image: "https://via.placeholder.com/200x150"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .header h1 {
    font-size: 2.5em;
    margin: 0;
  }
  
  .description {
    font-size: 1.2em;
    color: #666;
  }
  
  .blog-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  </style>
  