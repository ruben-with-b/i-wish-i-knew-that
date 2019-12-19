<template>
    <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
        <path d="M128.889267,100.797182 C128.879959,100.810838 128.869619,100.824027 128.858243,100.836643 L123.300794,107 L117.471869,101.131865 C116.575055,100.399301 116,99.2681651 116,97.9989175 C116,95.7903764 117.741115,94 119.888889,94 C121.161021,94 122.290489,94.6281045 123,95.5991772 C123.709511,94.6281045 124.838979,94 126.111111,94 C128.258885,94 130,95.7903764 130,97.9989175 C130,99.0883115 129.57637,100.075962 128.889267,100.797182 Z" id="Herz" fill="#FFFFFF"></path>
        <path id="pulseLine" d="M101,149.694224 L96.1391534,145.473915" transform="translate(98.500000, 147.500000) rotate(180.000000) translate(-98.500000, -147.500000)"></path>
        <path id="pulseLine" d="M90,158 L89.333492,149.588262" transform="translate(90.000000, 153.500000) rotate(180.000000) translate(-90.000000, -153.500000)"></path>
        <path id="pulseLine" d="M109,139 L100.625119,139" transform="translate(104.500000, 139.000000) rotate(180.000000) translate(-104.500000, -139.000000)"></path>
        <path id="pulseLine" d="M13,12.6942238 L8.13915336,8.47391498"></path>
        <path id="pulseLine" d="M19,9 L18.333492,0.588261742"></path>
        <path id="pulseLine" d="M9,19 L0.625119011,19"></path>
        <rect fill="#141414" x="22" y="18" width="66" height="121"></rect>
        <rect x="41" y="18.121724" width="28" height="8"></rect>
        <circle id="chat-dot-1" cx="42" cy="82" r="4"></circle>
        <circle id="chat-dot-2" cx="55.5" cy="82" r="4"></circle>
        <circle id="chat-dot-3" cx="69" cy="82" r="4"></circle>
    </g>
</template>

<style lang="scss" scoped>
#pulseLine{
    animation: bling 2s infinite;
    -webkit-animation: bling 2s infinite;
}

@keyframes bling {
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 0 }
}

#chat-dot-1{
    animation: chat 2s infinite;
    -webkit-animation: chat 2s infinite;
}
#chat-dot-2{
    animation: chat 2s infinite 0.3s;
    -webkit-animation: chat 2s infinite 0.3s;
}
#chat-dot-3{
    animation: chat 2s infinite 0.6s;
    -webkit-animation: chat 2s infinite 0.6s;
}

@keyframes chat {
    0% { transform: translateY(0) }
    50% { transform: translateY(-8px) }
    100% { transform: translateY(0) }
}
</style>

<script>
import { TimelineMax } from 'gsap'

export default {
	data () {
		return {
			tl: new TimelineMax()
		}
	},
	mounted () {
		// const { wave } = this.$refs
	},
	methods: {

	}
}
</script>
