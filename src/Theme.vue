<template>
  <div class="alp-theme">
    <div class="alp-theme__header">
      <alp-big-theme :image="theme.slug">{{ title }}</alp-big-theme>
    </div>

    <p class="alp-theme__intro" v-html="intro"></p>

    <div class="alp-theme__sublinks" v-if="theme.relatives">
      <div class="alp-theme__sublinks__buttons">
        <alp-button
          v-for="rel in theme.relatives"
          key="rel.link"
          :blue="rel.title === theme.title"
          :shadow="true"
          :link="rel.link">{{ rel.title }}</alp-button>
      </div>
    </div>

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
        <strong v-if="theme.badge">Conclusion : <alp-tag :theme="theme.badge.color">{{ theme.badge.text }}</alp-tag></strong>
      </alp-card>
    </div>
    <div class="alp-theme__fi-proposals">
      <h2 class="alp-theme__fi-proposals__title">Les propositions de l’Avenir en Commun</h2>
      <img class="alp-theme__fi__aec" src="./assets/aec.png" alt="Ce qu'en dit l'Avenir en Commun" height="160" width="160">
      <p class="alp-theme__fi-proposals__proposal" v-html="theme.aec"></p>
    </div>

    <div class="alp-theme__more">
      <h2 class="alp-theme__more__title">Envie d'en savoir plus ?</h2>
      <div class="alp-theme__more__buttons">
        <alp-button href="https://laec.fr">
          <div style="text-align: center;">
            Consulter<br>
            L'Avenir en Commun
          </div>
        </alp-button>
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

  data() {
    return {
      themes
    };
  },

  computed: {
    theme() {
      return themes[this.$route.params.theme]
    },

    intro() {
      return this.theme.parent ? themes[this.theme.parent].intro : this.theme.intro
    },

    title() {
      return this.theme.parent ? themes[this.theme.parent].title : this.theme.title
    }
  },

  mounted() {
    if (!themes.hasOwnProperty(this.$route.params.theme)) {
      this.$router.push('/')
    }

    if (this.theme.subs) {
      this.$router.push(this.theme.subs[0].link);
    }

    console.log(this.theme);
  }
}
</script>

<style>
.alp-theme {
  background: #fbfbfb;
}

.alp-theme__header {
  display: flex;
  height: 130px;
}

.alp-theme__header .alp-big-theme-wrapper {
  flex: 1;
}

.alp-theme__header .alp-big-theme__shadow {
  cursor: default;
}

.alp-theme__sublinks {
  margin: 40px 0;
}

.alp-theme__sublinks__buttons {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 10px;
}

.alp-theme__sublinks__buttons > .alp-button-wrapper {
  margin-top: 10px;
}

.alp-theme__sublinks__buttons > .alp-button-wrapper > .alp-button {
  border-radius: 6px;
  font-size: 18px;
  padding: 10px 15px;
}

.alp-theme__sublinks__buttons > .alp-button-wrapper:not(:last-child) {
  margin-right: 10px;
}

.alp-theme__intro {
  font-size: 18px;
  margin: 60px auto 30px auto;
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

.alp-theme__fi__proposals  {
  font-size: 18px;
  text-align: justify;
}

.alp-theme__fi-proposals {
  margin: 0 auto 50px auto;
  max-width: 800px;
}

.alp-theme__fi-proposals__title {
  font-size: 24px;
  color: #c9462c;
}

.alp-theme__fi__aec {
  float: right;
  margin-bottom: 1px;
  margin-left: 15px;
  margin-top: -30px;
}

.alp-theme__fi-proposals__proposal {
  font-size: 18px;
  padding: 0 10px;
  text-align: justify;
}

.alp-theme__fi-proposals__proposal > strong {
  color: #23b9d0;
  font-weight: 600;
}

.alp-theme__fi-proposals__proposal:not(:first-child) {
  margin-top: 10px;
}

.alp-theme__more {
  background: #c9462c;
  box-shadow: inset 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 30px 30px 30px;
}

.alp-theme__more__title {
  color: #fff;
  text-align: center;
}

.alp-theme__more__buttons {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
}
</style>
