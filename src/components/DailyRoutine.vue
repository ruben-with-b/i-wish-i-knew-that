<template>
  <div class="mainline">
    <svg-base position="relative" fill="none" stroke="white" left="50%" :width="widthInPercent(226)" viewbox="0 0 226 2722">
      <journey/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="red" top="-5.2%" left="50%" :width="widthInPercent(114)" viewbox="0 0 114 163">
      <phone/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="red" top="4.5%" left="50%" :width="widthInPercent(50)" viewbox="0 0 50 52">
      <cup/>
    </svg-base>
    <svg-base position="absolute" fill="none" stroke="red" top="18%" left="32%" :width="widthInPercent(252)" viewbox="0 0 252 190" :hideMobile="true">
      <trees/>
    </svg-base>
  </div>
</template>

<script>
import SvgBase from '@/components/svg/SvgBase.vue'
import Journey from '@/components/svg/Path.vue'
import Phone from '@/components/svg/Phone.vue'
import Cup from '@/components/svg/Cup.vue'
import Trees from '@/components/svg/Trees.vue'

export default {
	data () {
		return {
			maxWidth: 750,
			minWidth: 250,
			width: 0,
			breakpoint: 375
		}
	},
	components: {
		SvgBase,
		Journey,
		Phone,
		Cup,
		Trees
	},
	created () {
		if (window.innerWidth <= this.breakpoint) {
			this.width = this.minWidth
		} else {
			this.width = this.maxWidth
		}
		window.addEventListener('resize', this.myEventHandler)
	},
	destroyed () {
		window.removeEventListener('resize', this.myEventHandler)
	},
	methods: {
		widthInPercent (px) {
			const onePercent = this.width / 100
			const percent = px / onePercent
			return percent.toFixed(2) + '%'
		},
		myEventHandler (e) {
			if (window.innerWidth <= this.breakpoint) {
				this.width = this.minWidth
			} else {
				this.width = this.maxWidth
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.mainline {
  margin: 25rem auto 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1250px;
  background: #575757;
  position: relative;
}
</style>
