<template>
  <main class="alp-home">
    <h1 class="alp-home__title">
      Analysons le projet du <span class="alp-home__title__red">Front National</span>
    </h1>
    <p class="alp-home__intro">
      Les rapprochements et amalgames entre le programme de la France Insoumise et celui du Front National ont été très nombreux et très virulents. Pourtant, <strong>aucune analyse sérieuse et critique des propositions de Marine Le Pen</strong> n'a été vraiment réalisée pour tenter de les confronter à celles portées par Jean-Luc Mélenchon.
      <br>
      <br>
      Le Discord Insoumis propose donc une analyse des propositions du Front National à travers plusieurs thèmes. Cette analyse est bien évidemment très critique car le projet de société de Marine Le Pen est non seulement à l'opposé de celui de la France Insoumise mais il présente de nombreuses incohérences.
      <br>
      <br>
      L'objectif de ce site est d'être <strong>une source de réflexion</strong> pour favoriser l'esprit critique de la population autour du projet mortifère du Front National. C'est un espace en développement permanent qui sera enrichi au fil des prochaines semaines.
    </p>
    <p class="alp-home__choose">
      Sélectionnez un thème pour analyser le projet du
      <span class="alp-home__intro__red">Front National</span>
    </p>

    <img class="alp-home__icon" src="./assets/arrow.down.png" alt="arrow down" height="24" width="24">

    <div class="alp-home__themes">
      <alp-big-theme
        v-for="theme in themes"
        key="theme.slug"
        :link="getLink(theme)"
        :image="theme.slug">{{ theme.title }}</alp-big-theme>
    </div>

    <div class="alp-home__footer">
      Site à l'initiative de citoyens insoumis.
    </div>
  </main>
</template>

<script>
import themes from './themes.json'

import Button from './Button.vue'
import BigTheme from './BigTheme.vue'

export default {
  components: {
    'alp-button': Button,
    'alp-big-theme': BigTheme
  },

  computed: {
    themes() {
      return Object.keys(themes)
        .map(themeName => themes[themeName])
        .filter(theme => !theme.invisible && theme.main)
    }
  },

  methods: {
    getLink(theme) {
      return theme.subs ? theme.subs[0].link : theme.slug
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
  text-align: justify;
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
  margin: 80px auto 30px auto;
  max-width: 1200px;
  text-align: center;
  padding: 0 10px;
  overflow: auto;
  zoom: 1;
}

.alp-home__themes .alp-big-theme-wrapper {
  float: left;
  display: block;
  margin-bottom: 10px;
  width: calc(33.3333333% - (20px / 3));
}

.alp-home__themes .alp-big-theme-wrapper:not(:nth-child(3n)) {
  margin-right: 10px;
}

.alp-home__footer {
  background: #ededed;
  color: #444;
  padding: 10px;
}

@media (max-width: 768px) {
  .alp-home__themes {
    flex-direction: column;
    height: 900px;
  }
}
</style>
