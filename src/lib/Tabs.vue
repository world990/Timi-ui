<template>
  <div class="lunzi-tabs">
    <div class="lunzi-tabs-nav" ref="container">
      <div class="lunzi-tabs-nav-item"
           @click="select(t)"
           :class="{selected:t===selected}"
           v-for="(t,index) in titles"
           :ref="el=>{if(t===selected) selectedItem=el}"
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
import { ref, onMounted, onUpdated} from 'vue';

export default {
  components: {Tab},
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {

    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };
    onMounted(x);
    onUpdated(x);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type != Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles,  select, selectedItem, indicator, container};
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

    &-indicator {
      height: 3px;
      width: 100px;
      background: $blue;
      position: absolute;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}


</style>