<template>
  <div :style="{position: position, top: top, left: left, textAlign: textAlign }">
    <h3> {{ clock }} </h3>
    <h3> {{ context }} </h3>
  </div>
</template>

<script>

export default {
	data () {
		return {
		}
	},
	props: ['context', 'clock', 'top', 'left', 'position', 'text-align'],
	methods: {
	}
}
</script>

<style lang="scss" scoped>
h3{
  line-height: 2.5rem;
}

</style>
