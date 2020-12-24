<template>
  <router-view/>
</template>

<script lang="ts">
import {ref,provide} from 'vue'

export default {
  name: 'App',
  setup(){
    const topNavVisible=ref(false)
    provide('xxx',topNavVisible)
  }
}
</script>
