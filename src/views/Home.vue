<template>
    <div class="home">
      <!-- Header -->
      <header class="header">
        <div class="logo">
          <h1>Waterman</h1>
        </div>
        <div class="avatar-container">
          <Avatar v-if="isAvatarLoaded"/>
        </div>
      </header>
  
      <!-- Blog List -->
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
          <!-- :image="require(`@/assets/image/${post.image}`)"   -->
       
      </section>
  
      <!-- Footer -->
      <footer class="footer">
        <p>&copy; 2025 Waterman. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import BlogCard from "@/components/BlogCard.vue";
  import Avatar from "@/components/Avatar.vue";
  
  export default {
    name: "Home",
    components: {
      BlogCard,
      Avatar,
    },
    data() {
      return {
        posts: [
          {
            id: "1",
            title: "我的第一篇博客",
            excerpt: "这是我的第一篇博客文章，讲述我如何开始写博客...",
            publishDate: "2025-01-01",
            image: "/assets/image/1.jpg",  // 图片文件名
          },
          {
            id: "2",
            title: "Vue.js 入门教程",
            excerpt: "Vue.js 是一个渐进式的 JavaScript 框架，这篇文章将带你...",
            publishDate: "2025-01-05",
            image: "/assets/image/2.jpg",  // 图片文件名
          },
          {
            id: "3",
            title: "Java 基础学习笔记",
            excerpt: "Java 是一门广泛使用的编程语言，本文总结了我在学习 Java 的...",
            publishDate: "2025-01-10",
            image: "/assets/image/3.jpg",  // 图片文件名
          },
        ],
        isDataLoaded: true,
        isAvatarLoaded: true,
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
  }
  
  .logo h1 {
    margin: 0;
    font-size: 2.5em;
    color: #3498db;
  }
  
  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .blog-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
  }
  
  .footer {
    text-align: center;
    padding: 20px;
    background-color: #f8f8f8;
    margin-top: 40px;
    border-top: 1px solid #ddd;
  }
  
  .footer p {
    margin: 0;
    color: #666;
  }
  </style>
  