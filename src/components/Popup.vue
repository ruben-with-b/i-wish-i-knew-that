<template>
<div v-if="!getPopupById(content.id).hidden" class="popup">
  <h3>#{{ content.id + 1 }} {{ content.title }}</h3>
  <hr/>
  <button class="btn-primary left" type="button" @click="showDescription">description</button>
  <button class="btn-primary right" type="button" @click="showCodeSnippet">code snippets</button>
  <p v-show="description">{{content.description}}</p>
  <p v-show="codeSnippet" class="code-parag">
    <span v-if="content.data" class="code-line" ref="codeLine">{{content.data}}</span>
    <span v-else>No data available – sorry for that!</span>
  </p>
  <button class="btn-close" type="button" @click="togglePopup(content.id)">x</button>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ShuffleText from 'shuffle-text'

export default {
	data () {
		return {
			description: true,
			codeSnippet: false
		}
	},
	props: ['content'],
	computed: {
		...mapGetters([
			'getPopupById'
		])
	},
	methods: {
		showDescription () {
			this.description = true
			this.codeSnippet = false
		},
		showCodeSnippet () {
			this.description = false
			this.codeSnippet = true
			if (this.content.data) {
				const text = new ShuffleText(this.$refs.codeLine)
				text.start()
			}
		},
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
    z-index: 20;
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

.code-parag{
  overflow-x: hidden;

  .code-line{
    white-space: pre;
  }

}
</style>
