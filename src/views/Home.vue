<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>轮子UI</h1>
      <h2>UI框架</h2>
      <p class="actions">
        <a href="https://github.com/world990">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
.banner {
  background: lightgoldenrodyellow;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .actions {
    padding: 8px;

    a {
      background: #fff;
      border-radius: 14px;
      padding: 0 8px;
      margin: 0 8px;
      display: inline-block;
      height: 28px;
      line-height: 28px;
    }
  }
}

</style>