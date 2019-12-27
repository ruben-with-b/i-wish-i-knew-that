<template>
    <g ref="tiltAll" transform="translate(0,0)">
        <path stroke="#141414" stroke-width="7" d="M65.5,184.9V143"/>
        <path stroke="#141414" stroke-width="7" d="M65.5,42V0"/>
        <rect x="37.8" y="43.8" width="53.5" height="97.5"/>
        <rect x="50.8" y="43.8" width="28.5" height="7.5"/>
        <rect x="46" y="113" width="38" height="6"/>
        <circle fill="#141414" cx="49" cy="128" r="3"/>
        <circle fill="#141414" cx="70" cy="128" r="3"/>
        <circle fill="#141414" cx="60" cy="128" r="3"/>
        <circle fill="#141414" cx="81" cy="128" r="3"/>
        <polyline points="9.5,85.9 3.5,91.2 9.5,96.9 "/>
        <path d="M21,91.4H5"/>
        <polyline points="60,21 65.3,15 71,21 "/>
        <path d="M65.5,33V17"/>
        <polyline points="71,161.6 65.7,167.6 60,161.6 "/>
        <path class="st4" d="M65.5,166.6v-16"/>
        <polyline points="114.3,96.9 120.3,91.6 114.3,85.9 "/>
        <path d="M118.8,91.4h-16"/>
    </g>
</template>

<script>
import { TimelineMax, Power0 } from 'gsap'

export default {
	mounted () {
		const { tiltAll } = this.$refs

		const tlSensoring = new TimelineMax({ repeat: -1,
			ease: Power0.easeNone
		})

		tlSensoring.to(tiltAll, 0.7, { rotation: 0, skewX: 0, skewY: 0, scale: 1, transformOrigin: 'center' })
			.to(tiltAll, 0.7, { rotation: 30, skewX: 30, skewY: 0, scale: 0.9, transformOrigin: 'center' })
			.to(tiltAll, 0.7, { rotation: 0, skewX: 0, skewY: 0, scale: 1, transformOrigin: 'center' })
			.to(tiltAll, 0.7, { rotation: -30, skewX: -30, skewY: 0, scale: 0.9, transformOrigin: 'center' })
			.to(tiltAll, 0.7, { rotation: 0, skewX: 0, skewY: 0, scale: 1, transformOrigin: 'center' })
	}
}
</script>
