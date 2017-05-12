<template>
  <router-link :to="to" class="alp-big-theme-wrapper" v-if="link">
    <div class="alp-big-theme" :style="backgroundImage">
      <div class="alp-big-theme__shadow">
        <slot></slot>
      </div>
    </div>
  </router-link>
  <div class="alp-big-theme-wrapper" v-else>
    <div class="alp-big-theme alp-big-theme--no-hover" :style="backgroundImage">
      <div class="alp-big-theme__shadow">
        <slot></slot>
      </div>
    </div>
    <div class="alp-big-theme__shadow__back" @click="$router.push('/')">
      <img src="./assets/arrow.left.png" alt="left arrow">
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
    pictures[theme.slug] = assetsCtx(`./${theme.image}.jpg`)
  })

export default {
  props: ['image', 'link'],

  computed: {
    to() {
      return `/themes/${this.link}`
    },

    backgroundImage() {
      return { backgroundImage: `url(${pictures[this.image]})` }
    }
  }
}
</script>

<style>
.alp-big-theme-wrapper {
  text-decoration: none;
  overflow: hidden;
  position: relative;
}

.alp-big-theme {
  background-size: cover;
  height: 100%;
  min-height: 100%;
  transition: .1s transform ease-out;
}

.alp-big-theme:not(.alp-big-theme--no-hover) {
}

.alp-big-theme:not(.alp-big-theme--no-hover):hover {
  transform: scale(1.05);
  transition: .1s transform ease-in;
}

.alp-big-theme:not(.alp-big-theme--no-hover):hover .alp-big-theme__shadow {
  background-color: rgba(0, 0, 0, 0.4);
  transition: .1s background-color ease-in;
}

.alp-big-theme--no-hover {
  background-position: center;
}

.alp-big-theme--no-hover > .alp-big-theme__shadow {
  font-size: 28px;
  height: 130px;
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
  height: 300px;
  justify-content: center;
  text-transform: uppercase;
  transition: .1s background-color ease-out;
}

.alp-big-theme__shadow__back {
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 48px;
  left: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
}

@media (max-width: 768px) {
  .alp-big-theme__shadow {
    height: 300px;
  }

  .alp-big-theme__shadow__back {
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .alp-big-theme--no-hover > .alp-big-theme__shadow {
    font-size: 24px;
  }

  .alp-big-theme-wrapper {
    overflow: visible;
  }
}
</style>
