<template>
  <div class="wrapper about">
    <h1>207.000.000</h1>
    <h4>users are currently registered with Spotify. We can only show you a section of the data that Spotify stores every day from users. Do you want to know what data is stored about you? The route through support can be very tedious. We have prepared an email for you to get your data quickly.</h4>
    <div class="mail">
      <h3>Data Request</h3>
      <input v-model="value">
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			value: 'test'
		}
	}
}
</script>

<style lang="scss" scoped>
.mail {
  margin-top: 4rem;
}
</style>
