<template>
    <g transform="translate(2,14)">
        <ellipse cx="22.5" cy="62.5" rx="22.5" ry="4.5"></ellipse>
        <g ref="pin" transform="translate(3,3)">
            <path d="M20,0 L32.5721865,31.4304662 C35.3495572,38.373893 31.9723015,46.2541565 25.0288746,49.0315272 C23.4294482,49.6712978 21.7226349,50 20,50 C12.5217004,50 6.45934077,43.9376404 6.45934077,36.4593408 C6.45934077,34.7367058 6.78804297,33.0298926 7.42781353,31.4304662 L20,0 Z" id="Pin" transform="translate(20.000000, 25.000000) rotate(-180.000000) translate(-20.000000, -25.000000) "></path>
            <circle cx="20" cy="13.5" r="4.5"></circle>
        </g>
    </g>
</template>

<script>
import { TweenMax, Power0 } from 'gsap'

export default {
	mounted () {
		const { pin } = this.$refs

		TweenMax.to(pin, 1, {
			y: '-=15',
			yoyo: true,
			repeat: -1,
			ease: Power0.easeNone
		})
	}
}
</script>
