<template>
  <div class="wrapper about">
    <h1><span id="score">0</span>.000.000</h1>
    <h4>users are currently registered with Spotify. We can only show you a section of the data that Spotify stores every day from users. Do you want to know what data is stored about you? The route through support can be very tedious. We have prepared an email for you to get your data quickly.</h4>
    <div class="data-request">
      <h3>Data Request</h3>
      <p>Copy the text and request your data.</p>
      <textarea v-model="value" class="mail"></textarea>
      <div class="btn-group">
        <Button aria="copy" title="copy text" @click.native="copyText"/>
        <a href="mailto:privacy@spotify.com">
          <Button aria="send" title="to mail"/>
        </a>
        <div v-if="success" class="success">Mail text has been coppied to clipboard!</div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite, Linear } from 'gsap'
import Button from '@/components/Button.vue'

export default {
	data () {
		return {
			success: false,
			value: `Hello,

In accordance with Article 15 of the European General Data Protection Regulation, please proceed to the conveyance of my personal data.

- Account information, including my name, date of birth, e-mail address, billing/shipping address, phone number, and stored payment card data.
- User-generated content, which may include things such as photos, tracked activities, statistics, comments, or messages. 
- Store or Site Data, which may include information on past orders, product reviews, comments in forums, comments on website content.
- Customer Service Contacts, if I have contacted customer service in the past to resolve any issues, any contact history. 
- Marketing tracking or behavior data, which may include things such as open and click rate, website user behavior, browser user agent, user preferences, inferred user behavior, etc.

Accounts may be associated with the following login credentials.

Email addresses: [list your email addresses]
Phone number: [list your email phone numbers]
User name: [list your user names]

Please confirm when this operation has been completed.

Best regards, [your name]`
		}
	},
	components: {
		Button
	},
	mounted () {
		let game = { score: 0 }
		let scoreDisplay = document.getElementById('score')

		TweenLite.to(game, 1, { score: '+=248', roundProps: 'score', onUpdate: () => { scoreDisplay.innerHTML = game.score }, ease: Linear.easeNone })
	},
	methods: {
		copyText () {
			const textarea = document.querySelector('.mail')
			textarea.select()
			document.execCommand('copy')
			this.success = true
		}
	}
}
</script>

<style lang="scss" scoped>
h1{
  color: $color-secondary;
}

h4 {
  margin-bottom: 6rem;
}

.btn {
  &-group > button {
    margin-right: 3rem;
    cursor: pointer;
  }
}

a > button{
  cursor: pointer;
}

.mail {
  @include p($color-white);
  background: transparent;
  border: $border;
  width: 100%;
  height: 23rem;
  padding: 1.5rem 2rem;
  display: block;
  margin-bottom: 3rem;
}

.success{
  color: $color-secondary;
  margin: 2em 0 0 0;
}

</style>
