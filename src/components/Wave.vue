<template>
	<div class="root">
		<button @click="shiftWave">
			Add point
		</button>
		<svg class="wave-container" xmlns="http://www.w3.org/2000/svg" width="100%" length="auto"
			ref="wave" viewBox="0 0 1923.478 2179.665" preserveAspectRatio="none">
			<path id="waveInAction" transform="translate(0 700)" fill="#6aeb1a">
				<animate
					attributeName="d"
					dur="6500ms"
					repeatCount="indefinite"
					values="M 0-171.9
							s 138.2-164.126,302.633,0,347.205,0,347.205,0,159.569-169.239,323.318,0,348.67,0,348.67,0,139.688-171.65,294.9,0,303.126-11.951,303.126-11.951
							v 2155.3
							L .105,1983.711
							Z;

							M 0-1
							s 1-1,302.633,0,347.205,0,347.205,0,1-1,323.318,0,348.67,0,348.67,0,1-1,294.9,0,303.126-11.951,303.126-1
							v 2155.3
							L .105,1983.711
							Z;

							M 0-171.9
							s 138.2-164.126,302.633,0,347.205,0,347.205,0,159.569-169.239,323.318,0,348.67,0,348.67,0,139.688-171.65,294.9,0,303.126-11.951,303.126-11.951
							v 2155.3
							L .105,1983.711
							Z;
							"/>
			</path>
		</svg>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
import { TimelineMax, Elastic } from 'gsap'

export default {
	data () {
		return {
			tl: new TimelineMax(),
			shiftPercentage: undefined,
			shiftDirection: undefined
		}
	},
	computed: {
		...mapGetters([
			'numberOfItems', 'numberOfItemsFound'
		])
	},
	mounted () {
		this.shiftPercentage = 100 / this.numberOfItems
	},
	methods: {
		shiftWave () {
			const { wave } = this.$refs
			this.tl.progress(1) // avoid bug
			this.tl.to(wave, 1.5, {
				css: { height: '+=' + this.shiftPercentage + '%' },
				ease: Elastic.easeInOut
			})
		}
	}
}
</script>

<style lang="scss" scoped>

.wave-container{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 0%;
	transform: scaleY(2.1);
	z-index: 150;
}

button{
	position: fixed;
	z-index: 200;
	bottom: 10em;
}

</style>
