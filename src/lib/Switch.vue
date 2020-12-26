<template>
  <button @click="toggle" :class="{checked: value}">
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('input', !props.value);
    };
    return {toggle};
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
  transition: left 250ms;
}

button.checked {
  background: lightblue;
}

button.checked > span {
  left: calc(100% - 20px)
}

button:focus {
  outline: none;
}
</style>

