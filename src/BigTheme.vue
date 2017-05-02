<template>
  <router-link :to="to" class="alp-big-theme-wrapper" v-if="link">
    <div class="alp-big-theme" :style="backgroundImage">
      <div class="alp-big-theme__shadow">
        <slot></slot>
      </div>
    </div>
  </router-link>
  <div class="alp-big-theme-wrapper" v-else>
    <div class="alp-big-theme" :style="backgroundImage">
      <div class="alp-big-theme__shadow">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import themes from './themes'

const assetsCtx = require.context('./assets', false, /\.jpg$/)

const pictures = {}

Object.keys(themes)
  .map(themeName => themes[themeName])
  .forEach((theme) => {
    pictures[theme.slug] = assetsCtx(`./${theme.slug}.jpg`)
  })

export default {
  props: ['image', 'link'],

  computed: {
    to() {
      return `/themes/${this.link}`
    },

    backgroundImage() {
      console.log(pictures, this.image)
      return { backgroundImage: `url(${pictures[this.image]})` }
    }
  }
}
</script>

<style>
.alp-big-theme-wrapper {
  text-decoration: none;
  flex: 1;
  overflow: hidden;
}

.alp-big-theme {
  background-size: cover;
  height: 100%;
  transition: .1s transform ease-out;
}

.alp-big-theme:hover {
  transform: scale(1.05);
  transition: .1s transform ease-in;
}

.alp-big-theme:hover .alp-big-theme__shadow {
  background-color: rgba(0, 0, 0, 0.4);
  transition: .1s background-color ease-in;
}

.alp-big-theme__shadow {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  text-transform: uppercase;
  transition: .1s background-color ease-out;
}
</style>
