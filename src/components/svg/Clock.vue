<template>
  <g transform="translate(2, 2)">
    <ellipse cx="36" cy="35" rx="36" ry="35"/>
    <line id="Kleiner-Zeiger" ref="littleHand" stroke-linecap="square" x1="36" y1="35" x2="45.9" y2="48.3"/>
    <line id="Großer-Zeiger" ref="bigHand" stroke-linecap="square" x1="36" y1="12.1" x2="36" y2="35"/>
  </g>
</template>

<script>
import { TweenMax, Power0 } from 'gsap'

export default {
	mounted () {
		const { littleHand, bigHand } = this.$refs

		TweenMax.to(bigHand, 1.5, {
			rotation: 360,
			transformOrigin: 'center bottom',
			repeat: -1,
			ease: Power0.easeNone
		})

		TweenMax.to(littleHand, 18, {
			rotation: 360,
			repeat: -1,
			ease: Power0.easeNone
		})
	}
}
</script>

<style lang="scss" scoped>
g{
	fill: $background;
}
</style>
