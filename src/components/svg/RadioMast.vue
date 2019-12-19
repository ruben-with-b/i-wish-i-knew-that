<template>
    <g transform="translate(2,2)">
        <circle cx="23" cy="15.5" r="4.5"></circle>
        <polyline points="2 97 22.752684 46 47 96.4516129"></polyline>
        <path d="M5.3119068,90 L37.4742123,79"></path>
        <path d="M31,81 L13,72"></path>
        <path d="M19,75 L30,62"></path>
        <path d="M23,47.1180766 L23,20"></path>
        <path ref="signalRight1" d="M38,1 L39,1 C42.3137085,1 45,3.6862915 45,7 L45,7" transform="translate(-6, 5) rotate(9)"></path>
        <path ref="signalRight2" d="M30,5 C34.9705627,5 39,9.02943725 39,14 L39,14" transform="translate(0, 0) rotate(4.000000)"></path>
        <path ref="signalLeft1" d="M0,2 L1,2 C4.3137085,2 7,4.6862915 7,8 L7,8" transform="translate(6.5, 11.5) rotate(-86.000000)"></path>
        <path ref="signalLeft2" d="M7,6 C11.9705627,6 16,10.0294373 16,15 L16,15" transform="translate(0,10) rotate(-93.000000)"></path>
    </g>
</template>

<script>
import { TweenMax, Power0 } from 'gsap'

export default {
	mounted () {
		const { signalLeft1,
			signalLeft2,
			signalRight1,
			signalRight2
		} = this.$refs

		TweenMax.to(signalRight1, 1.5, {
			x: 5,
			y: -5,
			opacity: 0,
			repeat: -1,
			ease: Power0.easeNone
		})

		TweenMax.to(signalRight2, 1.5, {
			x: 5,
			y: -5,
			opacity: 0,
			repeat: -1,
			ease: Power0.easeNone
		})

		TweenMax.to(signalLeft1, 1.5, {
			x: -2,
			y: 2,
			opacity: 0,
			repeat: -1,
			ease: Power0.easeNone
		})

		TweenMax.to(signalLeft2, 1.5, {
			x: -2,
			y: 2,
			opacity: 0,
			repeat: -1,
			ease: Power0.easeNone
		})
	}
}
</script>
