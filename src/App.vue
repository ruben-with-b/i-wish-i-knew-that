<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Manual</router-link> |
      <router-link to="/infographic">Infographic</router-link> |
      <router-link to="/solution">Solution</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700|Work+Sans&display=swap');

$color-white: #fff;
$color-gray-dark: #222;

$color-green: #42b983;

* {
  margin: 0;
  padding: 0;
}

body {
  background: $color-gray-dark;
}

#app {
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-white;
  background: $color-gray-dark;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $color-white;

    &.router-link-exact-active {
      color: $color-green;
    }
  }
}

@mixin h1($color) {
  font-family: 'Space Mono', monospace;
}

h1 {
  @include h1(black);
}
</style>
