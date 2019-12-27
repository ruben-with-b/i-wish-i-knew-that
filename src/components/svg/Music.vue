<template>
    <g transform="translate(20,200)">
        <path d="M63.6666667,47.8796973 L0.666666667,48.3236926"></path>
        <circle cx="101.5" cy="46.5" r="37.5"></circle>
        <path d="M94.5414407,69.5147827 C101.470179,73.1331143 115.343805,63.235003 118.238782,49.9607972 C121.13376,36.6865913 114.61771,25.1774756 104.520273,23.0856594 C94.4228356,20.9938432 84.3506813,28.3227476 81.4557037,41.5969535 C78.560726,54.8711593 87.6127029,65.896451 94.5414407,69.5147827 Z"></path>
        <path d="M116.872876,26.8314452 C109.558354,36.0705756 96.7866147,40.6901408 78.5576585,40.6901408"></path>
        <path d="M104.300167,37.4386004 C103.283018,48.0326989 107.13616,55.0639489 115.859595,58.5323504"></path>
        <path d="M89.3521127,48.084507 C91.6554923,50.6278175 93.7681684,50.874836 95.6901408,48.8255624" transform="translate(92.521127, 49.140845) scale(1, -1) translate(-92.521127, -49.140845) "></path>
        <path d="M102.354124,70.2676056 C106.250574,74.905468 106.141922,79.4829328 102.028169,84"></path>
        <path d="M115.760563,56.5352113 C117.189903,69.3455462 119.654692,76.0356871 123.15493,76.6056338" ></path>
        <circle fill="#141414" transform="translate(112.694728, 47.666328) rotate(20.000000) translate(-112.694728, -47.666328) " cx="112.694728" cy="47.6663283" r="2"></circle>
        <path d="M110.707265,49.6527588 L112.039643,58.5372644" transform="translate(111.375490, 54.152759) rotate(20.000000) translate(-111.375490, -54.152759) "></path>
        <g ref="double"> <!-- right -->
            <ellipse cx="182.5" cy="26.5" rx="3.5" ry="2.5"></ellipse>
            <polyline points="186 26 186 11 199 11 199 24"></polyline>
            <ellipse cx="196.5" cy="26.5" rx="3.5" ry="2.5"></ellipse>
        </g>
        <g ref="single"> <!-- left -->
            <ellipse cx="160" cy="17.5" rx="4" ry="2.5"></ellipse>
            <polyline points="164 18 164 0 169 0"></polyline>
        </g>
    </g>
</template>
<script>
import { TimelineMax, gsap, MotionPathPlugin } from 'gsap/all'

gsap.registerPlugin(MotionPathPlugin)

export default {
	mounted () {
		const { single, double } = this.$refs

		const musicTween1 = new TimelineMax({ repeat: -1 })
		const musicTween2 = new TimelineMax({ repeat: -1, delay: 0.5 })

		gsap.set(single, { xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' })

		musicTween1.to(single, 3.5, {
			opacity: 0,
			rotate: '20deg',
			motionPath: {
				autoRotate: false,
				type: 'thru',
				path: [
					{ x: 0, y: 0 },
					{ x: 10, y: -20 },
					{ x: -8, y: -30 },
					{ x: 7, y: -40 },
					{ x: -5, y: -50 },
					{ x: 5, y: -60 }
				]
			}
		})

		musicTween2.to(double, 3.5, {
			opacity: 0,
			rotate: '-15deg',
			motionPath: {
				type: 'thru',
				path: [
					{ x: 0, y: 0 },
					{ x: 10, y: -20 },
					{ x: -8, y: -30 },
					{ x: 7, y: -40 },
					{ x: -5, y: -50 },
					{ x: 5, y: -60 }
				]
			}
		})
	}
}
</script>
