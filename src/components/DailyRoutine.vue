<template>
<div>
  <div class="journey">
    <svg-base position="relative" fill="none" stroke="white" :width="widthInPercent(275)" viewbox="0 0 293 2832.7">
      <journey/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="red" top="-1.8%" :width="widthInPercent(114)" viewbox="0 0 114 163" :clickable="true" :popupId="0">
      <phone/>
    </svg-base>
	<svg-base position="absolute" fill="#ffffff" stroke="#ffffff" top="2%" left="60%" :width="widthInPercent(16)" viewbox="0 0 20 19">
      <heart/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="#ffffff" top="0.5%" left="20%" :width="widthInPercent(60)" viewbox="0 0 71 68">
      <bubble/>
    </svg-base>
    <svg-base position="absolute" fill="#141414" stroke="red" top="5.3%" left="65.3%" :width="widthInPercent(76)" viewbox="0 0 76 74" :clickable="true" :popupId="1">
      <clock/>
    </svg-base>
	<svg-base position="absolute" fill="#ffffff" stroke="none" top="9.87%" left="61%" :width="widthInPercent(36)" viewbox="0 0 37 10">
      <adapter/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="white" top="7.4%" left="46.6%" :width="widthInPercent(50)" viewbox="0 0 52 50">
      <cup/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="11.3%" left="54%" :width="widthInPercent(54)" viewbox="0 0 58 43">
      <sun/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="14%" left="53%" :width="widthInPercent(39)" viewbox="0 0 37 62">
      <flowers/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="12.4%" left="30%" :width="widthInPercent(84)" viewbox="0 0 96 96">
      <music-boy/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="16%" left="38%" :width="widthInPercent(50)" viewbox="0 0 50 49">
      <wlan/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="16.5%" left="60%" :width="widthInPercent(170)" viewbox="0 0 171 123">
      <radio-deco/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="16.7%" left="66%" :width="widthInPercent(50)" viewbox="0 0 51 100">
      <radio-mast/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="23.5%" left="43%" :width="widthInPercent(85)" viewbox="0 0 86 110">
      <subway/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="white" top="22%" left="9.5%" :width="widthInPercent(252)" viewbox="0 0 252 190" class="animate-me">
      <trees/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="29%" left="55%" :width="widthInPercent(90)" viewbox="0 0 86 45" class="animate-me">
      <bench/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="31.25%" left="22%" :width="widthInPercent(50)" viewbox="0 0 49 71">
      <geo-pin/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="32%" left="45%" :width="widthInPercent(90)" viewbox="0 0 93 93" class="animate-me">
      <music-girl/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="40%" left="39.5%" :width="widthInPercent(130)" viewbox="0 0 139 104" class="animate-me">
      <desktop/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="40.6%" left="16%" :width="widthInPercent(400)" viewbox="0 0 417 147">
      <desktop-deco/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="46.45%" left="20%" :width="widthInPercent(100)" viewbox="0 0 113 78">
      <device-id/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="51%" left="47.4%" :width="widthInPercent(85)" viewbox="0 0 88 34">
      <clicked/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="56.45%" left="21%" :width="widthInPercent(150)" viewbox="0 0 126 64">
      <emoji/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="55.8%" left="44.5%" :width="widthInPercent(68)" viewbox="0 0 64 106">
      <smartwatch/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="54.5%" left="60%" :width="widthInPercent(45)" viewbox="0 0 47 46">
      <bubble-heart/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="55.85%" left="55%" :width="widthInPercent(220)" viewbox="0 0 202 88">
      <music/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="61.3%" left="24.7%" :width="widthInPercent(70)" viewbox="0 0 71 80">
      <playlist/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="62.6%" left="52%" :width="widthInPercent(200)" viewbox="0 0 200 76">
      <sports-deco/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="70%" left="33%" :width="widthInPercent(220)" viewbox="0 0 253 88">
      <smalltalk/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="70.5%" left="44.35%" :width="widthInPercent(68)" viewbox="0 0 66 59">
      <voice/>
    </svg-base>
	<svg-base position="absolute" fill="none" stroke="white" top="75.2%" left="28.2%" :width="widthInPercent(180)" viewbox="0 0 162 63">
      <share/>
    </svg-base>
	<svg-base position="absolute" fill="#141414" stroke="white" top="80%" left="39.62%" :width="widthInPercent(130)" viewbox="0 0 128 88">
      <share-buttons/>
    </svg-base>
	<svg-base position="absolute" fill="#141414" stroke="white" top="83.5%" left="59%" :width="widthInPercent(50)" viewbox="0 0 45 51">
      <moon/>
    </svg-base>
	<svg-base position="absolute" fill="#141414" stroke="white" top="85%" left="39.66%" :width="widthInPercent(130)" viewbox="0 0 133 185">
      <tilt/>
    </svg-base>
	<svg-base position="absolute" fill="#141414" stroke="white" top="94.5%" left="43.3%" :width="widthInPercent(120)" viewbox="0 0 123 116">
      <touch/>
    </svg-base>
	<svg-base position="absolute" fill="#FFFFFF" stroke="#FFFFFF" top="97%" left="36%" :width="widthInPercent(35)" viewbox="0 0 47 42">
      <sleep/>
    </svg-base>
  </div>
  <Popup v-for="(c, index) in popupContent" :key="index" :content="getPopupContentById(index)"/>
</div>
</template>

<script>
import popupContent from '@/data/popupContent.json'
import Popup from '@/components/Popup.vue'

import SvgBase from '@/components/svg/SvgBase.vue'
import Journey from '@/components/svg/Path.vue'
import Phone from '@/components/svg/Phone.vue'
import Cup from '@/components/svg/Cup.vue'
import Heart from '@/components/svg/Heart.vue'
import Bubble from '@/components/svg/Bubble.vue'
import Clock from '@/components/svg/Clock.vue'
import Adapter from '@/components/svg/Adapter.vue'
import Sun from '@/components/svg/Sun.vue'
import MusicBoy from '@/components/svg/MusicBoy.vue'
import Flowers from '@/components/svg/Flowers.vue'
import Wlan from '@/components/svg/Wlan.vue'
import RadioDeco from '@/components/svg/RadioDeco.vue'
import RadioMast from '@/components/svg/RadioMast.vue'
import Subway from '@/components/svg/Subway.vue'
import Trees from '@/components/svg/Trees.vue'
import Bench from '@/components/svg/Bench.vue'
import GeoPin from '@/components/svg/GeoPin.vue'
import MusicGirl from '@/components/svg/MusicGirl.vue'
import Desktop from '@/components/svg/Desktop.vue'
import DesktopDeco from '@/components/svg/DesktopDeco.vue'
import DeviceId from '@/components/svg/DeviceId.vue'
import Clicked from '@/components/svg/Clicked.vue'
import Emoji from '@/components/svg/Emoji.vue'
import Smartwatch from '@/components/svg/Smartwatch.vue'
import BubbleHeart from '@/components/svg/BubbleHeart.vue'
import Music from '@/components/svg/Music.vue'
import Playlist from '@/components/svg/Playlist.vue'
import SportsDeco from '@/components/svg/SportsDeco.vue'
import Smalltalk from '@/components/svg/Smalltalk.vue'
import Voice from '@/components/svg/Voice.vue'
import Share from '@/components/svg/Share.vue'
import ShareButtons from '@/components/svg/ShareButtons.vue'
import Moon from '@/components/svg/Moon.vue'
import Tilt from '@/components/svg/Tilt.vue'
import Touch from '@/components/svg/Touch.vue'
import Sleep from '@/components/svg/Sleep.vue'

export default {
	data () {
		return {
			popupContent: popupContent,
			width: 1250,
			scaling: 2
		}
	},
	components: {
		Popup,
		SvgBase,
		Journey,
		Phone,
		Heart,
		Bubble,
		Clock,
		Adapter,
		Cup,
		Sun,
		MusicBoy,
		Flowers,
		Wlan,
		RadioDeco,
		RadioMast,
		Subway,
		Trees,
		Bench,
		GeoPin,
		MusicGirl,
		Desktop,
		DesktopDeco,
		DeviceId,
		Clicked,
		Emoji,
		Smartwatch,
		BubbleHeart,
		Music,
		Playlist,
		SportsDeco,
		Smalltalk,
		Voice,
		Share,
		ShareButtons,
		Moon,
		Tilt,
		Touch,
		Sleep
	},
	mounted () {
		const config = {
			rootMargin: '-50px 0px',
			threshold: [0, 0.25, 0.75, 1]
		}

		const images = document.querySelectorAll('.animate-me')

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					entry.target.classList.add('show-up')
				} else {
					entry.target.classList.remove('show-up')
				}
			})
		}, config)

		images.forEach(image => {
			observer.observe(image)
		})
	},
	methods: {
		widthInPercent (px) {
			const onePercent = this.width / 100
			const percent = px * this.scaling / onePercent
			return percent.toFixed(2) + '%'
		},
		getPopupContentById (id) {
			return this.popupContent.find(element => {
				return element.id === id
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.journey {
	display: flex;
	justify-content: center;
	margin: 25rem auto 0 auto;
	width: 100%;
	height: 100%;
	max-width: 1250px;
	position: relative;
}

.animate-me {
	opacity: 0;
	transition: opacity 0.5s ease;
	&.show-up {
		opacity: 1;
	}
}
</style>
