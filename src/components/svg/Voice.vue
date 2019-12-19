<template>
    <g transform="translate(0,0)">
        <path ref="voice2" d="M15.4,19.9v21.5"/>
        <path ref="voice1" d="M2.7,28.6v5.8"/>
        <path ref="voice4" d="M49.2,19.9v21.5"/>
        <path ref="voice5" d="M63.3,28.6v5.8"/>
        <g ref="voice3">
            <path ref="voice3long"  stroke-width="6" stroke="#141414" d="M33.3,0v59.1"/>
            <path ref="voice3short" d="M33.3,7.2v44.6"/>
        </g>
    </g>
</template>

<script>
import { TweenMax, RoughEase, Power0, gsap } from 'gsap/all'

gsap.registerPlugin(RoughEase)

export default {
	mounted () {
		const { voice1, voice2, voice3, voice4, voice5 } = this.$refs

		TweenMax.to(voice1, 1, {
			scaleY: '-=6',
			transformOrigin: 'center',
			yoyo: true,
			repeat: -1,
			ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })
		})

		TweenMax.to(voice2, 1, {
			scaleY: '-=2',
			transformOrigin: 'center',
			yoyo: true,
			repeat: -1,
			ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })
		})

		TweenMax.to(voice3, 1, {
			scaleY: '-=4',
			transformOrigin: 'center',
			yoyo: true,
			repeat: -1,
			ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })
		})

		TweenMax.to(voice4, 1, {
			scaleY: '-=2',
			transformOrigin: 'center',
			yoyo: true,
			repeat: -1,
			ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })
		})

		TweenMax.to(voice5, 1, {
			scaleY: '-=1',
			transformOrigin: 'center',
			yoyo: true,
			repeat: -1,
			ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })
		})
	}
}
</script>
