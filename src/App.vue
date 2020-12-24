<template>
  <div>导航栏|
    <router-link to="/"> World|</router-link>
    <router-link to="/xxx">World2</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>
