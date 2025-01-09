<template>
    <div class="post-detail">
      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p><small>{{ post.publishDate }}</small></p>
        <div v-html="post.content"></div>
      </div>
      <div v-else>
        <p>文章加载失败，请稍后再试。</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "PostDetail",
    props: ["id"],  // 接收通过路由传递的 id
    data() {
      return {
        post: null  // 存储加载的文章内容
      };
    },
    mounted() {
      // 根据 id 加载文章内容
      const post = this.getPostById(this.id);
      if (post) {
        this.post = post;  // 找到对应文章并赋值
      } else {
        console.error('未找到该文章');
      }
    },
    methods: {
      getPostById(id) {
        const posts = [
          {
            id: "1",
            title: "我的第一篇博客",
            content: "<p>这是我的第一篇博客文章的详细内容sssssss...</p>",
            publishDate: "2025-01-01"
          },
          {
            id: "2",
            title: "Vue.js 入门教程",
            content: "<p>这篇文章讲解了 Vue.js 的核心概念...</p>",
            publishDate: "2025-01-05"
          },
          {
            id: "3",
            title: "Java 基础学习笔记",
            content: "<p>本文总结了 Java 的基础知识...</p>",
            publishDate: "2025-01-10"
          }
        ];
        return posts.find(post => post.id === id);  // 根据 id 找到对应的文章
      }
    }
  };
  </script>
  
  <style scoped>
  .post-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  small {
    font-size: 1em;
    color: #666;
  }
  
  div {
    font-size: 1.1em;
    line-height: 1.6;
  }
  
  p {
    margin-top: 20px;
    color: #999;
  }
  </style>
  