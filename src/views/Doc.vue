<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside>边栏</aside>
      <main>主内容区</main>
    </div>
  </div>

</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>