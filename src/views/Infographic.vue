<template>
  <div class="wrapper about">
    <h1>A completely ordinary day</h1>
		<h4>The infographic shows an exemplary course of your day from morning to night. Research the individual stations to find out in which situations Spotify stores which data about you. It's super easy - you just have to keep the following in mind:</h4>
		<hr/>
		<div class="manual">
			<div class="step"><div class="icon icon-interactive"></div><h4>Find and collect all interactive elements. They are marked in red. It hides the data that Spotify stores about you.</h4></div>
			<div class="step"><div class="icon icon-popup"><span>&lt;</span><span>&sol;</span><span>&gt;</span></div><h4>After you have found an element, a popup opens. You can switch between a description and a code example.</h4></div>
		</div>
		<hr/>
    <DailyRoutine/>
		<div class="progress-bar" :style="{width: numberOfItems !== numberOfItemsFound ? `${numberOfItemsFound * statusBarStep}px` : '100%'}">
			<transition name="fade" mode="out-in">
				<div v-show="numberOfItems === numberOfItemsFound"><span @click="$router.push('solution')">Well done! Make sure to check out the reference &xrarr;</span></div>
			</transition>
		</div>
  </div>
</template>

<script>
import DailyRoutine from '@/components/DailyRoutine.vue'
import { mapGetters } from 'vuex'

export default {
	data () {
		return {
			statusBarStep: 0
		}
	},
	components: {
		DailyRoutine
	},
	computed: {
		...mapGetters([
			'numberOfItems', 'numberOfItemsFound'
		])
	},
	mounted () {
		const app = document.querySelector('#app')
		this.statusBarStep = Math.ceil(app.clientWidth / this.numberOfItems)
	}
}
</script>

<style lang="scss" scoped>
.manual {
	width: 100%;
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	text-align: center;
}
.step {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.icon {
	margin-bottom: 2rem;
	&-interactive {
		width: 3rem;
		height: 3rem;
		border: 6px solid $color-primary;
		border-radius: 3rem;
	}
	&-popup {
		@include h3($color-white);
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 1rem;
		height: 3rem;
		border: 1px solid $color-white;
	}
}

.progress-bar {
	@include h5($color-white);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	position: fixed;
	height: 4.5rem;
	bottom: 0;
	left: 0;
	background: $color-primary;
	transition: width 0.2s ease;

	span {
		cursor: pointer;
	}
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 0.2s;
	transition-delay: 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
