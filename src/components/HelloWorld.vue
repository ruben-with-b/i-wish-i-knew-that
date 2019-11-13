<template>
  <div class="hello">
    <h1>Do you care for your privacy?</h1>
    <h4>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</h4>
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
