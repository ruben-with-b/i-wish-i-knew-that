<template>
<div>
  <div class="journey">
    <svg-base position="relative" fill="none" stroke="white" left="50%" :width="widthInPercent(226)" viewbox="0 0 226 2722">
      <journey/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="red" top="-5.2%" left="50%" :width="widthInPercent(114)" viewbox="0 0 114 163" :clickable="true" :popupId="0">
      <phone/>
    </svg-base>
    <svg-base position="absolute" fill="#222" stroke="red" top="3%" left="67.75%" :width="widthInPercent(76)" viewbox="0 0 76 74" :clickable="true" :popupId="1">
      <clock/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="white" top="4.5%" left="45%" :width="widthInPercent(50)" viewbox="0 0 50 52">
      <cup/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="white" top="18%" left="28.5%" :width="widthInPercent(252)" viewbox="0 0 252 190" :hideMobile="true">
      <trees/>
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
import Clock from '@/components/svg/Clock.vue'
import Cup from '@/components/svg/Cup.vue'
import Trees from '@/components/svg/Trees.vue'

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
		Clock,
		Cup,
		Trees
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
  margin: 25rem auto 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1250px;
  position: relative;
}
</style>
