<template>
  <div class="hello">
    <h1>Do you care for your privacy?</h1>
    <h4>Privacy is left to everyone. But do you know what data about you is saved when using apps? Today we take a closer look at the streaming service Spotify. Are you curious? Then let's get started! Afterwards you may see the topic of data protection from a different perspective.</h4>
    <button @click="$router.push('/infographic')">Go!</button>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<style scoped lang="scss">
.hello {
  width: 75%;
}

h3 {
  margin: 40px 0 0;
}

h4 {
  width: 66%;
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
