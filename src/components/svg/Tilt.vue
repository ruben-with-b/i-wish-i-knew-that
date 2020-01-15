<template>
    <g ref="rotateAll" transform="translate(0,0)">
        <rect x="37.8" y="43.8" width="53.5" height="97.5"/>
        <rect x="50.8" y="43.8" width="28.5" height="7.5"/>
        <rect x="46" y="113" width="38" height="6"/>
        <circle fill="#141414" cx="49" cy="128" r="3"/>
        <circle fill="#141414" cx="70" cy="128" r="3"/>
        <circle fill="#141414" cx="60" cy="128" r="3"/>
        <circle fill="#141414" cx="81" cy="128" r="3"/>
        <path d="M71.9,84.9c0,4.1-3.3,7.4-7.4,7.4s-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4h4.9"/>
        <polyline points="64.8,72.6 70.2,77.7 64.8,82.4"/>
    </g>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
	mounted () {
		const { rotateAll } = this.$refs

		const tlSensoring = new TimelineMax({ repeat: -1 })

		tlSensoring.to(rotateAll, 0.7, { rotation: 0, transformOrigin: '50% 50%' })
			.to(rotateAll, 0.3, { rotation: -30, transformOrigin: '50% 50%' })
			.to(rotateAll, 0.7, { rotation: 630, transformOrigin: '50% 50%' })
			.to(rotateAll, 2, { rotation: 630, transformOrigin: '50% 50%' })
			.to(rotateAll, 0.3, { rotation: 660, transformOrigin: '50% 50%' })
			.to(rotateAll, 0.7, { rotation: 0, transformOrigin: '50% 50%' })
	}
}
</script>
