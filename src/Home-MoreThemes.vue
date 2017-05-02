<template>
  <div class="alp-more-themes">
    <h2 class="alp-more-themes__title">Plus de thèmes</h2>
    <div class="alp-more-themes__buttons">
      <alp-button link="/themes/sécurité-terrorisme">Sécurité, Terrorisme</alp-button>
      <alp-button link="/themes/immigration-laïcité">Immigration, Laïcité</alp-button>
      <alp-button link="/themes/économie-finance">Économie, Finance</alp-button>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    'alp-button': Button
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
  justify-content: space-between;
  margin: 50px auto;
  max-width: 800px;
}
</style>
