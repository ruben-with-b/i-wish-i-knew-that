<template>
  <svg :class="{ 'hide-mobile': hideMobile }" :width="width" :viewBox="viewbox" :style="{position: position, top: top, left: left}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<g :fill="fill" :stroke="stroke">
			<slot/>
		</g>
  </svg>
</template>

<script>
export default {
	props: ['fill', 'stroke', 'top', 'left', 'width', 'height', 'viewbox', 'position', 'hideMobile']
}
</script>

<style lang="scss" scoped>
svg {
  transform: translate(-50%, 0);
  display: inline-block;
  vertical-align: top;
  stroke-width: 3px;
}

@media (max-width: 375px) {
  .hide-mobile {
    display: none;
  }
}
</style>
