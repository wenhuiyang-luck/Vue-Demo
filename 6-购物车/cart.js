new Vue({
	el: '#app',
	data: {
		items: [
			{
				name: 'JavaScript高级程序设计',
				quantity: 3,
				price: 78.1 
			},{
				name: 'JavaScript DOM编程艺术',
				quantity: 2,
				price: 38.4
			},{
				name: 'JavaScript权威指南',
				quantity: 2,
				price: 198
			},{
				name: 'CSS权威指南(第3版)',
				quantity: 1,
				price: 37.1
			}
		]
	},

	filters: {
		moneyFormat: function(value) {
			return '￥' + value.toFixed(2);
		}
	},

	methods: {
        total: function() {
            var totalMoney = 0;
            this.items.forEach(function(item) {
                totalMoney += item.price * item.quantity;
            })
            return totalMoney;
        },
		substract: function(index) {
			this.items[index].quantity--;
            if(this.items[index].quantity <= 0) {
                if (confirm("你确定移除该商品？")) {  
                    this.items.splice(index,1);
                } else {
                    this.items[index].quantity ++;
                }
			}
		},
		add: function(index) {
			this.items[index].quantity++;
		},
		remove: function(index) {
			if(confirm("你确定移除该商品？")) {  
	            this.items.splice(index, 1);
	        }  
		},
		empty: function(){
			this.items.splice(0, this.items.length);
		}
	}
});
