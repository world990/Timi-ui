<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const topNavVisible = ref(width > 500);
    provide('topNavVisible', topNavVisible);
    router.afterEach(() => {
      if (width <= 500) {topNavVisible.value = false;}
    });
  }
};
</script>
