new Vue({
	el: '#main',
	data: {
		items: [
			{
				name: 'JavaScript高级程序设计',
				price: 78.1,
				active: true
			},{
				name: 'JavaScript DOM编程艺术',
				price: 38.4,
				active: false
			},{
				name: 'CSS权威指南(第3版)',
				price: 37.1,
				active: false
			},{
				name: 'JavaScript权威指南',
				price: 198,
				active: false
			}
		]
	},
	// 局部过滤器，只有该实例可以使用
	filters: {
		Money: function(value) {
			return '￥' + value.toFixed(2);
		}
	},
	methods: {
		toggleActive: function(item) {
			item.active = !item.active;
		},
		total: function() {
			var total = 0;
			this.items.forEach(function(item) {
				if(item.active) {
					total += item.price;
				}
			});
			return total;
		}
	}
});
