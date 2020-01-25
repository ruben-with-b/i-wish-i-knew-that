<template>
  <div class="hello">
    <h1>Do you care for your privacy?</h1>
    <h4>Privacy is left to everyone. But do you know what data about you is saved when using apps? Today we take a closer look at the streaming service Spotify. Are you curious? Then let's get started! Afterwards you may see the topic of data protection from a different perspective.</h4>
    <Button aria="To Infographic" title="Go!" @click.native="$router.push('/infographic')"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	components: {
		Button
	}
}
</script>

<style scoped lang="scss">

h3 {
  margin: 40px 0 0;
}

h4 {
  margin-bottom: 3rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
