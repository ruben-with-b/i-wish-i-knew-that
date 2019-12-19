<template>
    <g transform="translate(0,0)">
        <rect ref="clickedItem1" fill="#141414" x="3.75" y="21.75" width="24.5" height="10.5"></rect>
        <rect ref="clickedItem2" fill="#FFFFFF" x="1.5" y="1.5" width="29" height="11"></rect>
        <polygon ref="mouse" transform="translate(74.000000, 20.500000) rotate(-37.000000) translate(-74.000000, -20.500000) " points="71.8988132 32 77.1283917 32 77.1283917 23.8787019 83 24.5484143 74 9 65 24.5484143 71.8988132 23.8787019"></polygon>
    </g>
</template>

<script>
import { TimelineMax, Power0 } from 'gsap'

export default {
	mounted () {
		const { clickedItem1, clickedItem2, mouse } = this.$refs

		let tlMouse = new TimelineMax({ repeat: -1, ease: Power0.easeNone })

		tlMouse.from(mouse, 0.5, { x: 0, y: 0 })
			.to(mouse, 0.3, { x: 0, y: 20 })
			.to(mouse, 0.3, { x: -40, y: 20 })
			.to(mouse, 0.3, { x: -40, y: 20 })
			.to(mouse, 0.5, { x: -40, y: 0 })
			.to(mouse, 0.5, { x: -40, y: 0 })
			.to(mouse, 0.3, { x: 0, y: 0 })

		let tlClick1 = new TimelineMax({ repeat: -1, transformOrigin: '0% 10%', ease: Power0.easeNone })

		tlClick1.from(clickedItem1, 0.5, { scale: 1 })
			.to(clickedItem1, 0.3, { scale: 1 })
			.to(clickedItem1, 0.3, { scale: 1 })
			.to(clickedItem1, 0.3, { scale: 1.1 })
			.to(clickedItem1, 0.5, { scale: 1 })
			.to(clickedItem1, 0.5, { scale: 1 })
			.to(clickedItem1, 0.3, { scale: 1 })

		let tlClick2 = new TimelineMax({ repeat: -1, transformOrigin: 'center', ease: Power0.easeNone })

		tlClick2.from(clickedItem2, 0.5, { scale: 1 })
			.to(clickedItem2, 0.3, { scale: 1 })
			.to(clickedItem2, 0.3, { scale: 1 })
			.to(clickedItem2, 0.3, { scale: 1 })
			.to(clickedItem2, 0.5, { scale: 1 })
			.to(clickedItem2, 0.5, { scale: 1.1 })
			.to(clickedItem2, 0.3, { scale: 1 })
	}
}
</script>
