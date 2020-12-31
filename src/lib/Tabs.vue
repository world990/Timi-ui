<template>
  <div class="lunzi-tabs">
    <div class="lunzi-tabs-nav">
      <div class="lunzi-tabs-nav-item"
           @click="select(t)"
           :class="{selected:t===selected}"
           v-for="(t,index) in titles"
           :ref="el=>{if(el) navItems[index]=el}"
           :key="index">
        {{ t }}
      </div>
      <div class="lunzi-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lunzi-tabs-content">
      <component class="lunzi-tabs-content-item"
                 :class="{selected:c.props.title===selected}"
                 v-for="c in defaults"
                 :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue';
import {computed, ref,onMounted} from 'vue';

export default {
  components: {Tab},
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navItems=ref<HTMLDivElement[]>([])
    const indicator=ref<HTMLDivElement>(null)
    onMounted(()=>{
      const divs=navItems.value
      const result=divs.filter(div=>div.classList.
      contains('selected'))[0]
      const {width}=result.getBoundingClientRect()
      indicator.value.style.width=width + 'px'
    })
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type != Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, current, select,navItems,indicator};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.lunzi-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
    &-indicator{
      height: 3px;
      width: 100px;
      background: $blue;
      position: absolute;
      bottom: -1px;
    }
  }

  &-content {
    padding: 8px 0;
    &-item{
      display: none;
      &.selected{
        display: block;
      }
    }
  }
}


</style>