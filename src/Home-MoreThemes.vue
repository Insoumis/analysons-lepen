<template>
  <div class="alp-more-themes">
    <h2 class="alp-more-themes__title">Plus de thèmes</h2>
    <div class="alp-more-themes__buttons">
      <alp-button
        v-for="theme in themes"
        key="theme.slug"
        :link="'./themes/' + theme.slug">{{ theme.title }}</alp-button>
    </div>
  </div>
</template>

<script>
import themes from './themes'

import Button from './Button.vue'

export default {
  components: {
    'alp-button': Button
  },

  computed: {
    themes() {
      return Object.keys(themes)
        .map(themeName => themes[themeName])
        .filter(theme => !theme.main)
    }
  }
}
</script>

<style>
.alp-more-themes {
  background: #c9462c;
  box-shadow: inset 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  min-height: 300px;
  padding: 30px;
}

.alp-more-themes__title {
  color: #fff;
  text-align: center;
}

.alp-more-themes__buttons {
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  max-width: 800px;
}

.alp-more-themes__buttons > .alp-button-wrapper {
  margin-top: 20px;
}

.alp-more-themes__buttons > .alp-button-wrapper:not(:last-child) {
  margin-right: 20px;
}
</style>
