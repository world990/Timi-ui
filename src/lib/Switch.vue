<template>
  <button class="lunzi-switch" @click="toggle" :class="{'lunzi-checked': value}">
    <span class="lunzi-switch-span"></span>
  </button>

</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },

  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>


<style lang="scss" >
$h: 22px;
.lunzi-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}

.lunzi-switch-span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 18px;
  width: 18px;
  background: white;
  border-radius: 9px;
  transition: left 250ms;
}

button.lunzi-checked {
  background: lightblue;
}

button.lunzi-checked > span {
  left: calc(100% - 20px)
}

button:focus {
  outline: none;
}
</style>

