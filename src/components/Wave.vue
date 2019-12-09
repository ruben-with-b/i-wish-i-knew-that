<template>
	<div class="root">
		<button>
			Add point
		</button>
		<svg class="wave-container" xmlns="http://www.w3.org/2000/svg" width="100%" length="auto"
			ref="wave" viewBox="0 0 1923.478 2179.665" preserveAspectRatio="none">
			<path id="waveInAction" transform="translate(0 700)" fill="#6aeb1a">
				<animate
					attributeName="d"
					dur="3000ms"
					repeatCount="indefinite"
					values="M 0,1671-2.361-520.334
							s 31.912-78.944,147.95-87.782
							S 275.3-416.339,473.68-405.875
							s 195.793-81.785,324.074-88.65,120.207,100.188,263.5,102.08,104.427-105.039,305.186-102.08
							S 1489.255-364.4,1647.446-365.253
							s 144.945-133.267,273.444-129.272
							c .509,129.081,0,331.514,0,331.514l-.914,1834
							Z;

							M 0,1671-2.361-420.334
							s 51.063,8.838,167.1,0,110.064-10.464,308.445,0,191.172,6.865,319.453,0,109.339-1.892,252.628,0,101.956-2.96,302.715,0,107.8.853,265.992,0,178.419-3.995,306.918,0
							c .509,129.081,0,257.322,0,257.322l-.914,1834
							Z;

							M 0,1671-2.361-520.334
							s 31.912-78.944,147.95-87.782
							S 275.3-416.339,473.68-405.875
							s 195.793-81.785,324.074-88.65,120.207,100.188,263.5,102.08,104.427-105.039,305.186-102.08
							S 1489.255-364.4,1647.446-365.253
							s 144.945-133.267,273.444-129.272
							c .509,129.081,0,331.514,0,331.514l-.914,1834
							Z;"/>
			</path>
		</svg>
	</div>
</template>

<script>

// import { mapGetters, mapMutations } from 'vuex'
import { TimelineMax, Elastic } from 'gsap'

export default {
	data () {
		return {
			tl: new TimelineMax()
		}
	},
	mounted () {
		const { wave } = this.$refs
		let btn = document.querySelector('button')

		btn.addEventListener('click', () => {
			this.tl.progress(1) // avoid bug
			this.tl.to(wave, 1.5, {
				// pls replace by variable!
				css: { height: '+=25%' },
				transformOrigin: '0% 100%',
				ease: Elastic.easeInOut })
		})
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>

.wave-container{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 0%;
	z-index: 150;
}

button{
	position: absolute;
	z-index: 300;
}

</style>
