<template>
  <header class="alp-header">
    <a href="http://discord.insoumis.online/" class="alp-header__logo" target="_blank">Discord Insoumis</a>
    <nav class="alp-header__nav">
      <router-link to="/">
        Analysons Le FN
      </router-link>
      <span class="a-home-links">
        <a target="_blank" href="https://lafranceinsoumise.fr/" title="Site de la France Insoumise">lafranceinsoumise.fr</a>
        <a target="_blank" href="https://laec.fr/" title="Programme de Mélenchon pour la France Insoumise">Consultez le programme</a>
      </span>
    </nav>
  </header>
</template>

<style>
.alp-header {
  background: #c9462c;
  border-bottom: 1px solid #bc4229;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 54px;
  padding: 8px 20px;
  position: relative;
}

.alp-header__logo {
  background: url('./assets/logo.png') center no-repeat;
  background-size: cover;
  display: inline-block;
  height: 36px;
  text-indent: -9999px;
  vertical-align: middle;
  width: 132px;
}

.alp-header__nav {
  display: inline-block;
  margin-left: 20px;

}

.alp-header__nav a {
  color: #fff;
  font-family: Montserrat, serif;
  font-size: 14px;
  line-height: 36px;
  margin: 0 6px;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.alp-header__title {
  color: #fff;
  display: none;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.alp-header__title a {
  color: #fff;
  text-decoration: none;
}

.alp--on-theme .alp-header__title {
  display: block;
}

.alp--on-theme .a-home-links {
  display: none;
}

.alp-header__nav > a:first-child {
  display: none;
}

.alp--on-theme .alp-header__nav > a:first-child {
  display: block;
}

@media (max-width: 768px) {
  .alp-header__nav {
    display: none;
  }
}
</style>
