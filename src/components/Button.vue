<template>
  <button type="button" :aria-label="aria">{{title}}</button>
</template>

<script>
export default {
	props: ['aria', 'title']
}
</script>

<style lang="scss" scoped>
  button {
    @include p($color-white);
    border: $border;
    background: transparent;
    color: $color-white;
    padding: 0.5rem 2rem;
  }
</style>
