<template>
    <g transform="translate(0,0)">
        <rect fill="#141414" x="51.1775862" y="92.8240741" width="34.8448276" height="9.98148148" rx="2.58048"></rect>
        <rect fill="#141414" x="2.32931034" y="2.30555556" width="135.5" height="89.9074074"></rect>
        <g transform="translate(14.000000, 15.000000)" fill="#141414">
            <rect ref="window" x="1.75" y="19.75" width="30" height="14"></rect>
            <rect ref="header" x="1.75" y="1.75" width="30" height="18"></rect>
        </g>
        <g id="Fenster-Icon" transform="translate(22.772414, 21.333333)">
            <path d="M0.397686712,0.561291061 L9.22527292,8.48754499"></path>
            <path d="M9.22527292,0.561291061 L0.618376368,8.48754499"></path>
        </g>
    </g>
</template>

<script>
import { TimelineMax, Power0 } from 'gsap'

export default {
	data () {
		return {

		}
	},
	mounted () {
		const { header, window } = this.$refs

		const tlHeader = new TimelineMax({ repeat: -1, ease: Power0.easeNone })
		const tlWindow = new TimelineMax({ repeat: -1, ease: Power0.easeNone })

		tlHeader.from(header, 0.5, { width: 30 })
			.to(header, 0.5, { width: 45 })
			.to(header, 0.5, { width: 45 })
			.to(header, 0.5, { width: 70 })
			.to(header, 0.5, { width: 70 })
			.to(header, 0.5, { width: 100 })
			.to(header, 0.5, { width: 100 })
			.to(header, 0.5, { width: 30 })

		tlWindow.from(window, 0.5, { width: 30, height: 14 })
			.to(window, 0.5, { width: 45, height: 14 })
			.to(window, 0.5, { width: 45, height: 24 })
			.to(window, 0.5, { width: 70, height: 24 })
			.to(window, 0.5, { width: 70, height: 34 })
			.to(window, 0.5, { width: 100, height: 34 })
			.to(window, 0.5, { width: 100, height: 45 })
			.to(window, 0.5, { width: 30, height: 14 })
	}
}
</script>
