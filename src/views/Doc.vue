<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside>
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

export default {
  components: {TopNav}
};
</script>