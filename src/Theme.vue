<template>
  <div class="alp-theme">
    <div class="alp-theme__header">
      <alp-big-theme :image="theme.slug">{{ theme.title }}</alp-big-theme>
    </div>
    <p class="alp-theme__intro" v-html="theme.intro"></p>
    <div class="alp-theme__fn">
      <alp-card>
        <h2 class="alp-theme__fn__title">
          Quelques propositions du
          <span class="alp-theme__fn__title__blue">Front National</span>
        </h2>
        <p class="alp-theme__fn__proposals" v-html="theme.fn">

        </p>
      </alp-card>
    </div>
    <div class="alp-theme__fi">
      <alp-card background="blue">
        <h2 class="alp-theme__fi__title">
          L'analyse de la France Insoumise
        </h2>
        <p class="alp-theme__fi__proposals" v-html="theme.fi"></p>
        <br v-if="theme.badge">
        <strong v-if="theme.badge">Status: <alp-tag :theme="theme.badge.color">Mensonger</alp-tag></strong>
      </alp-card>
    </div>
    <div class="alp-theme__fi-proposals">
      <h2 class="alp-theme__fi-proposals__title">Les propositions dans l’Avenir en Commun</h2>
      <div class="alp-theme__fi-proposals__proposal" v-for="proposal in theme.aec">
        <strong>{{ proposal.title }} —</strong>
        {{ proposal.content }}
      </div>

      <div class="alp-theme__fi__proposals__link">
        <alp-button href="https://laec.fr" :shadow="true">
          Plus sur le programme<br>L’Avenir en Commun
        </alp-button>
      </div>
    </div>

    <div class="alp-theme__sources" v-if="theme.sources">
      <h2 class="alp-theme__sources__title">Envie d'en savoir plus ?</h2>
      <div class="alp-theme__sources__buttons">
        <alp-button
          v-for="source in theme.sources"
          key="source.href"
          :href="source.href">{{ source.title }}</alp-button>
      </div>
    </div>
  </div>
</template>

<script>
import themes from './themes'

import Button from './Button.vue'
import BigTheme from './BigTheme.vue'
import Card from './Card.vue'
import Tag from './Tag.vue'

export default {
  components: {
    'alp-button': Button,
    'alp-big-theme': BigTheme,
    'alp-card': Card,
    'alp-tag': Tag
  },

  computed: {
    theme() {
      return themes[this.$route.params.theme]
    }
  },

  mounted() {
    if (!themes.hasOwnProperty(this.$route.params.theme)) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.alp-theme__header {
  display: flex;
  height: 130px;
}

.alp-theme__header .alp-big-theme__shadow {
  cursor: default;
}

.alp-theme__intro {
  margin: 60px auto;
  max-width: 800px;
  padding: 0 10px;
  text-align: justify;
}

.alp-theme__fn > .alp-card, .alp-theme__fi > .alp-card {
  margin: 0 auto 40px auto;
}

.alp-theme__fn__title, .alp-theme__fi__title {
  margin: 0;
  padding: 0;
}

.alp-theme__fn__title__blue {
  color: #23b9d0;
}

.alp-theme__fn__proposals {
  font-size: 18px;
}

.alp-theme__fi .alp-tag {
  margin-left: 10px;
}

.alp-theme__fi-proposals {
  margin: 0 auto 40px auto;
  max-width: 800px;
}

.alp-theme__fi-proposals__title {
  font-size: 24px;
  color: #c9462c;
}

.alp-theme__fi-proposals__proposal {
  font-size: 18px;
  padding: 0 10px;
}

.alp-theme__fi-proposals__proposal > strong {
  color: #23b9d0;
}

.alp-theme__fi-proposals__proposal:not(:first-child) {
  margin-top: 10px;
}

.alp-theme__fi__proposals__link {
  margin: 30px auto;
}

.alp-theme__fi__proposals__link > .alp-button-wrapper {
  text-align: center;
}

.alp-theme__fi__proposals__link a {
  text-align: center;
}

.alp-theme__sources {
  background: #c9462c;
  box-shadow: inset 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  min-height: 300px;
  padding: 30px;
}

.alp-theme__sources__title {
  color: #fff;
  text-align: center;
}

.alp-theme__sources__buttons {
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  max-width: 800px;
}

.alp-theme__sources__buttons > .alp-button-wrapper {
  margin-top: 20px;
}

.alp-theme__sources__buttons > .alp-button-wrapper:not(:last-child) {
  margin-right: 20px;
}
</style>
