<template>
  <div class="alp-button-wrapper">
    <router-link
      :class="classes"
      :to="link"
      v-if="link">
      <slot></slot>
    </router-link>
    <a
      :class="classes"
      :href="href"
      v-else-if="href">
      <slot></slot>
    </a>
    <button
      :class="classes"
      v-else>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['link', 'shadow', 'href', 'blue'],

  computed: {
    classes() {
      return {
        'alp-button': true,
        'alp-button--shadowed': this.shadow,
        'alp-button--blued': this.blue
      }
    }
  }
}
</script>

<style>
.alp-button {
  background: #fff;
  border: 0;
  border-radius: 8px;
  color: #23b9d0;
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  padding: 15px 20px;
}

.alp-button--blued {
  background-color: #23b9d0;
  color: #fff;
}

.alp-button--shadowed {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
</style>
