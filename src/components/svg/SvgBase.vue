<template>
  <svg @click="togglePopup(popupId);" :class="{ 'hide-mobile': hideMobile, 'clickable': clickable}" :width="width" :viewBox="viewbox" :style="{position: position, top: top, left: left}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<g :fill="fill" :stroke="stroke" :class="{ 'is-spotted': popupIsSpotted }">
			<slot/>
		</g>
  </svg>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	props: ['fill', 'stroke', 'top', 'left', 'width', 'height', 'viewbox', 'position', 'hideMobile', 'clickable', 'popupId'],
	computed: {
		...mapGetters([
			'getPopupById'
		]),
		popupIsSpotted () {
			if (this.popupId >= 0) {
				return this.getPopupById(this.popupId).spotted
			} else {
				return false
			}
		}
	},
	methods: {
		...mapMutations([
			'togglePopup',
			'incrementItemsFound'
		])
	},
	mounted () {

	}
}
</script>

<style lang="scss" scoped>
svg {
  // transform: translate(-50%, 0);
  display: inline-block;
  vertical-align: top;
  stroke-width: 3px;
  &.clickable {
    cursor: pointer;
  }
  g {
    &.is-spotted {
      stroke: blue;
    }
  }
}

@media (max-width: 375px) {
  .hide-mobile {
    display: none;
  }
}
</style>
