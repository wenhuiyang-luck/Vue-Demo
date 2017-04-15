var demo = new Vue({
	el: '#main',
	data: {
		active: 'home',
		items:[
			{name: 'home', active: true},
			{name: 'profile', active: false},
			{name: 'skills', active: false},
			{name: 'works', active: false},
			{name: 'contact', active: false}
		]
	},

	methods: {
		makeActive: function(item,index){
			this.active = item.name;
            for(var i = 0; i < this.items.length; i++){
            	this.items[i].active = false;
            }
			this.items[index].active = true;
		}
	}
});