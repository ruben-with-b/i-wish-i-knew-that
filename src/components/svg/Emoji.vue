<template>
    <g transform="translate(0,0)">
        <path d="M45,26.3c-3.1-2.9-6.1-2.9-9.2,0"/>
        <path d="M28.5,26.3c-3.1-2.9-6.1-2.9-9.2,0"/>
        <path class="mouth" d="M21.6,39.6c6.9,6.5,13.8,6.5,20.6,0"/>
        <ellipse cx="32.1" cy="31.8" rx="29.7" ry="29.7"/>
        <path d="M125.6,32.9l-63,0.4"/>
    </g>
</template>

<style lang="scss" scoped>

.mouth{
    animation: change 6s infinite;
    transform-origin: 0% 70%;
}

@keyframes change {
    0% { transform: rotateX(0deg) }
    50% { transform: rotateX(360deg) }
    100% { transform: rotateX(0deg) }
}

</style>

<script>
// import { TweenMax, Power4 } from 'gsap'

// export default {
// 	mounted () {
// 		const { mouth } = this.$refs

// 		TweenMax.to(mouth, 1.5, {
// 			rotate: '+=180',
// 			transformOrigin: 'center',
// 			yoyo: true,
// 			repeat: -1,
// 			ease: Power4.easeInOut
// 		})
// 	}
// }
</script>
