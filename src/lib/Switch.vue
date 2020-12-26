<template>
  <button @click="toggle" :class="{checked: checked}"><span></span></button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {checked, toggle};
  }
};
</script>


<style lang="scss" scoped>
$h: 22px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 18px;
  width: 18px;
  background: white;
  border-radius: 9px;
}

button.checked {
  background: lightblue;
}

button.checked > span {
  left: calc(100% - 20px)
}

</style>

