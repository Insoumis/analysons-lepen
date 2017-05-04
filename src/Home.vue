<template>
  <main class="alp-home">
    <h1 class="alp-home__title">
      Analysons le projet du <span class="alp-home__title__red">Front National</span>
    </h1>
    <p class="alp-home__intro">
      Blabla intro on compare le le projet du FN à la FI. Ou blabla on les combats jamais sur le fond
      <br>
      Blabla des thèmes sur lesquels on soulève des incohérences
    </p>
    <p class="alp-home__choose">
      Blabla sélectionnez un thème pour analyser le projet du
      <span class="alp-home__intro__red">Front National</span>
    </p>

    <img class="alp-home__icon" src="./assets/arrow.down.png" alt="arrow down" height="24" width="24">

    <div class="alp-home__themes">
      <alp-big-theme
        v-for="theme in themes"
        key="theme.slug"
        :link="theme.subs[0].link"
        :image="theme.slug">{{ theme.title }}</alp-big-theme>
    </div>

    <alp-more-themes></alp-more-themes>
  </main>
</template>

<script>
import themes from './themes.json'

import Button from './Button.vue'
import BigTheme from './BigTheme.vue'
import MoreThemes from './Home-MoreThemes.vue'

export default {
  components: {
    'alp-button': Button,
    'alp-big-theme': BigTheme,
    'alp-more-themes': MoreThemes
  },

  computed: {
    themes() {
      return Object.keys(themes)
        .map(themeName => themes[themeName])
        .filter(theme => !theme.invisible && theme.main)
    }
  }
}
</script>

<style>
.alp-home__title {
  color: #23b9d0;
  font-size: 36px;
  font-weight: 600;
  margin: 80px 0 30px 0;
  text-align: center;
}

.alp-home__title__red {
  color: #c9462c;
}

.alp-home__intro {
  color: #222222;
  font-size: 18px;
  margin: 0 auto;
  max-width: 700px;
  padding: 30px 10px;
}

.alp-home__choose {
  color: #23b9d0;
  margin: 0 auto;
  max-width: 700px;
  text-align: center;
  text-transform: uppercase;
}

.alp-home__intro__red {
  color: #c9462c;
  font-weight: 600;
}

.alp-home__icon {
  display: block;
  margin: 20px auto;
}

.alp-home__themes {
  display: flex;
  margin-top: 80px;
  min-height: 520px;
}

@media (min-width: 1300px) {
  .alp-home__themes {
    min-height: 650px;
  }
}

@media (max-width: 768px) {
  .alp-home__themes {
    flex-direction: column;
    height: 900px;
  }
}
</style>
