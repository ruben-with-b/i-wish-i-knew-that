<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li>
          <router-link id="name" to="/">
            <img class="logo" src="@/assets/logo.svg" alt="logo">
            iwishiknewthat / spotify
          </router-link>
        </li>
        <li><router-link to="/infographic">Infographic</router-link></li>
        <li><router-link to="/solution">Reference</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <div v-if="$route.name === 'infographic'">
        {{ numberOfItemsFound }} / {{ numberOfItems }}
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'numberOfItems', 'numberOfItemsFound'
		])
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700|Work+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: $background;
}

button{
  cursor: pointer;
}

#app {
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-white;
  background: $color-gray-dark;
  font-size: 18px;
  margin-top: 8rem;
}

#nav {
  #name {
    font-weight: bold;
    margin-right: 5rem;
  }

  .logo{
    margin: 0 1em 0 0;
    vertical-align: text-bottom;
  }

  background: $background;
  z-index: 9999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3rem 5rem;

  ul {
    display: inline-blocK;
    li {
      display: inline-blocK;
      margin-right: 2.5rem;
    }
  }

  a {
    font-weight: normal;
    color: $color-white;
    text-decoration: none;

    &.router-link-exact-active {
      color: $color-secondary;
    }
  }
}

h1 {
  @include h1($color-white);
  margin-bottom: 6rem;
}

h2 {
  @include h2($color-white);
  width: 75%;
}

h3 {
  @include h3($color-white);
}

h4 {
  @include h4($color-white);
}

p {
  @include p($color-white);
  margin-bottom: 2rem;
}

.btn-primary {
    font-family: 'Space Mono', monospace;
    font-size: 18px;
    font-weight: bold;
    color: white;
    padding: 1rem 2rem;
    width: 50%;
    border: 2px solid white;
    background: transparent;
    cursor: pointer;
  }

.wrapper {
  padding: 5rem;
}

hr {
  border: 1px dashed white;
  margin: 5rem 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
