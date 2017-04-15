var vm = new Vue({
	el: '#main',
	data: {
		showTooltip: false,
		message: 'Edit me.'
	},
	methods: {
		hideTooltip: function() {
			this.showTooltip = false;
		},
		toggleTooltip: function() {
			this.showTooltip = !this.showTooltip;
		}
	}
})