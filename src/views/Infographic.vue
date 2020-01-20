<template>
  <div class="wrapper about">
    <h2>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.</h2>
    <DailyRoutine/>
    <div v-if="numberOfItems === numberOfItemsFound">klappt!</div>
  </div>
</template>

<script>
import DailyRoutine from '@/components/DailyRoutine.vue'
import { mapGetters } from 'vuex'

export default {
	components: {
		DailyRoutine
	},
	computed: {
		...mapGetters([
			'numberOfItems', 'numberOfItemsFound'
		])
	}
}
</script>
