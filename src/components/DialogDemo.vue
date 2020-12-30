<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :ok="f1" :cancel="f2"
  >
    <template v-slot:title>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
      <div>可自定义</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog.ts';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {return false;};
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        ok(){console.log('ok');},
        cancel(){console.log('cancel');}
      });
    };
    return {x, toggle, f1, f2, showDialog};
  }
};

</script>