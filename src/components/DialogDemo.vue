<template>
  <div>Dialog示例</div>
  <h1></h1>
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
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup(){
    const x=ref(false)
    const toggle=()=>{
      x.value=!x.value
    }
    const f1=()=>{return false}
    const f2=()=>{}
    return {x,toggle,f1,f2}
  }
};

</script>