<template>
  <div class="alp-tag" :style="color">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['theme'],

  computed: {
    color() {
      if (this.theme === 'orange') {
        return {
          background: '#f0ad4e'
        }
      } else {
        return {
          background: '#c9462c'
        }
      }
    }
  }
}
</script>

<style>
.alp-tag {
  background: #c9462c;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  display: inline-block;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 5px 10px;
  transform: rotate(-5deg);
}
</style>
