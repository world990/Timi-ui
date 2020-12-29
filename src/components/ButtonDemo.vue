<template>
  <div>
    button 示例
  </div>
  <h1>实例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>实例2</h1>
  <div>
    <Button size="big">大号</Button>
    <Button>中号</Button>
    <Button size="small">小号</Button>
  </div>
  <div>
    <Button theme="link" size="big">大号</Button>
    <Button theme="link">中号</Button>
    <Button size="small" theme="link">小号</Button>
  </div>
  <div>
    <Button size="big" theme="text">大号</Button>
    <Button theme="text">中号</Button>
    <Button size="small" theme="text">小号</Button>
  </div>

  <h1>示例3</h1>

  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>

</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  }
};
</script>