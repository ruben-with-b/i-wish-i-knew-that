<template>
<div v-if="!getPopupById(content.id).hidden" class="popup">
  <h4>{{ content.id }}</h4>
  <h2>{{ content.title }}</h2>
  <p>{{content.description}}</p>
  <p>{{content.data}}</p>
  <button type="button" @click="togglePopup(content.id)">x</button>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
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
  .popup {
    padding: 5rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: darkgray;
  }
</style>
