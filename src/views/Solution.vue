<template>
  <div class="wrapper about">
    <h1>207.000.000</h1>
    <h4>users are currently registered with Spotify. We can only show you a section of the data that Spotify stores every day from users. Do you want to know what data is stored about you? The route through support can be very tedious. We have prepared an email for you to get your data quickly.</h4>
    <div class="data-request">
      <h3>Data Request</h3>
      <p>Copy the text and request your data.</p>
      <textarea v-model="value" class="mail"></textarea>
      <div class="btn-group">
        <Button aria="copy" title="copy text" @click.native="copyText"/><a href="mailto:privacy@spotify.com"><Button aria="send" title="to mail"/></a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
	data () {
		return {
			value: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben. '
		}
	},
	components: {
		Button
	},
	methods: {
		copyText () {
			const textarea = document.querySelector('.mail')
			textarea.select()
			document.execCommand('copy')
		}
	}
}
</script>

<style lang="scss" scoped>
h4 {
  margin-bottom: 6rem;
}

.btn {
  &-group > button {
    margin-right: 3rem;
  }
}

.mail {
  @include p($color-white);
  background: transparent;
  border: $border;
  width: 100%;
  height: 15rem;
  padding: 1.5rem 2rem;
  display: block;
  margin-bottom: 3rem;
}

</style>
