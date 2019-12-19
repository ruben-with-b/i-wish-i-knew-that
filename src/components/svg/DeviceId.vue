<template>
    <g transform="translate(0,0)">
        <g id="Rahmen" fill="#141414">
            <rect x="1.75" y="1.75" width="109.5" height="74.5"></rect>
            <rect x="12.75" y="12.75" width="87.5" height="53.5"></rect>
        </g>
        <g>
            <path ref="building" transform="translate(54, 32) scale(0)" d="M1.75,13.25 L1.75,24.75 L22.25,24.75 L22.25,13.25 L1.75,13.25 Z"></path>
            <polygon ref="roof" transform="translate(55.25, 32.5) scale(0)" points="12 0 24 13 0 13"></polygon>
        </g>
    </g>
</template>
<script>
import { TweenMax, Bounce } from 'gsap'

export default {
	data () {
		return {

		}
	},
	mounted () {
		const { roof, building } = this.$refs

		TweenMax.to(roof, 1.5, {
			scale: '+=1',
			transformOrigin: 'center',
			repeat: -1,
			repeatDelay: 0.5,
			ease: Bounce.easeOut
		})

		TweenMax.to(building, 1.5, {
			scale: '+=1',
			transformOrigin: 'center',
			repeat: -1,
			repeatDelay: 0.5,
			ease: Bounce.easeOut
		})
	}
}
</script>
