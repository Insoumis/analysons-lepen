<template>
  <div class="alp-card" :style="backgroundColor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['background'],

  computed: {
    backgroundColor() {
      switch (this.background) {
        case 'blue':
          return { backgroundColor: '#23b9d0', color: '#fff' }
        default:
          return { color: '#222' }
      }
    }
  }
}
</script>

<style>
.alp-card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  max-width: 800px;
  padding: 20px;
}

@media (max-width: 810px) {
  .alp-card {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
}
</style>
