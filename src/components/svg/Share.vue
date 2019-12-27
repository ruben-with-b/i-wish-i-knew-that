<template>
    <g transform="translate(0,0)">
        <circle ref="shareDot2" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="127" cy="60" r="3"></circle>
        <circle ref="shareDot3" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="125" cy="11" r="3"></circle>
        <circle ref="shareDot4" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="156" cy="46" r="2"></circle>
        <circle ref="shareDot5" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="160.5" cy="18.5" r="1.5"></circle>
        <circle ref="shareDot6" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="137" cy="33" r="2"></circle>
        <circle ref="shareDot7" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="33" cy="59" r="3"></circle>
        <circle ref="shareDot8" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="24" cy="20" r="3"></circle>
        <circle ref="shareDot9" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="5" cy="51" r="2"></circle>
        <circle ref="shareDot10" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="1.5" cy="25.5" r="1.5"></circle>
        <circle ref="shareDot11" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="40" cy="34" r="2"></circle>
        <circle ref="shareDot12" transform="scale(0)" stroke="none" fill="#FFFFFF" cx="43" cy="2" r="2"></circle>
        <path id="Path-65" d="M96,43 L85.344,35.008 C84.787297,34.5904727 84.6744727,33.800703 85.092,33.244 C85.1636364,33.1484849 85.2484849,33.0636364 85.344,32.992 L96,25"></path>
        <ellipse cx="100.043478" cy="22" rx="5.04347826" ry="5"></ellipse>
        <ellipse cx="79.0434783" cy="34" rx="5.04347826" ry="5"></ellipse>
        <ellipse cx="101.043478" cy="46" rx="5.04347826" ry="5"></ellipse>
    </g>
</template>

<script>
import { TweenMax, Power0 } from 'gsap'

export default {
	mounted () {
		const {	shareDot2,
			shareDot3,
			shareDot4,
			shareDot5,
			shareDot6,
			shareDot7,
			shareDot8,
			shareDot9,
			shareDot10,
			shareDot11,
			shareDot12
		} = this.$refs

		TweenMax.to([shareDot4, shareDot6, shareDot11], 1, {
			scale: '-=1.1',
			transformOrigin: 'center',
			yoyo: true,
			repeat: -1,
			ease: Power0.easeNone
		})

		TweenMax.to([shareDot3, shareDot8, shareDot10], 1, {
			scale: '-=1.2',
			transformOrigin: 'center',
			delay: 0.9,
			yoyo: true,
			repeat: -1,
			ease: Power0.easeNone
		})

		TweenMax.to([shareDot2, shareDot5, shareDot7, shareDot9, shareDot12], 1, {
			scale: '-=1',
			transformOrigin: 'center',
			delay: 0.6,
			yoyo: true,
			repeat: -1,
			ease: Power0.easeNone
		})
	}
}
</script>
