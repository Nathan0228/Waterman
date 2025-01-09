<template>
  <div>
    <!-- 头像 -->
    <div class="avatar" @click="showProfile = true">
      <span class="letter">W</span>
    </div>

    <!-- 个人简介模态框 -->
    <div v-if="showProfile" class="modal-overlay" @click.self="showProfile = false">
      <div class="modal">
        <h2>个人简介</h2>
        <p>
          我是一个热爱编程的开发者，目前正在学习和探索 Web 开发的各个领域。我对 Vue.js 和前端开发充满兴趣，并且不断提升自己的技术能力。
        </p>
        <button @click="showProfile = false">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      showProfile: false,  // 控制模态框的显示与隐藏
    };
  },
};
</script>

<style scoped>
/* 头像样式 */
.avatar {
  width: 50px;
  height: 50px;
  background-color: #3498db;  /* 蓝色背景 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  cursor: pointer;  /* 鼠标变成点击手形 */
}

/* 模态框背景遮罩 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 模态框样式 */
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal h2 {
  margin-top: 0;
  font-size: 1.8em;
  color: #3498db;
}

.modal button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

.modal button:hover {
  background-color: #2980b9;
}
</style>
