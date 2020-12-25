<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside v-if="topNavVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="">Switch组件</router-link>
          </li>
          <li>
            <router-link to="">Button组件</router-link>
          </li>
          <li>
            <router-link to="">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="">Tabs组件</router-link>
          </li>
        </ol>

      </aside>
      <main>主内容区</main>
    </div>
  </div>

</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const topNavVisible = inject<Ref<boolean>>('topNavVisible');
    return {topNavVisible};
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  h2 {
    margin-bottom: 4px;
  }

  ol {
    li {
      padding: 4px 0;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 16px 16px;
  }
}

</style>