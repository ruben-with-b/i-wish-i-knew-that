module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import './src/styles/styles.scss';`
			}
		}
	}
}
