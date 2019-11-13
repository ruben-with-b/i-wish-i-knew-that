<template>
<div v-if="!getPopupById(content.id).hidden" class="popup">
  <h3>#{{ content.id + 1 }} {{ content.title }}</h3>
  <hr/>
  <button class="btn-primary left" type="button" @click="showDescription = true">description</button>
  <button class="btn-primary right" type="button" @click="showDescription = false">code snippets</button>
  <p v-if="showDescription">{{content.description}}</p>
  <p v-else>{{content.data}}</p>
  <button class="btn-close" type="button" @click="togglePopup(content.id)">x</button>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data () {
		return {
			showDescription: true
		}
	},
	props: ['content'],
	computed: {
		...mapGetters([
			'getPopupById'
		])
	},
	methods: {
		...mapMutations([
			'togglePopup'
		])
	}
}
</script>

<style lang="scss" scoped>
  h3, p {
    padding: 2rem;
    margin: 0;
  }

  .popup {
    border: 2px solid white;
    background: #141414;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 800px;
  }

  hr {
    border: 0;
    height: 2px;
    background: white;
    width: 100%;
    margin: 0;
  }

  .btn-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

.btn-primary {
  &.left, &.right {
    border-top: 0;
  }
  &.left {
    border-left: 0;
    border-right: 1px solid white;
  }
  &.right {
    border-right: 0;
    border-left: 1px solid white;
  }
}
</style>
