var cats = [];
var model = {
	init: function () {
		cats = [{
						id : 1,
						name : "Suzy",
						path : "images/suzy.jpg",
						counter: 0
					},
					{
						id : 2,
						name : "cat1",
						path : "images/cat1.jpeg",
						counter: 0
					},
					{
						id : 3,
						name : "Suzy",
						path : "images/suzy.jpg",
						counter: 0
					},
					{
						id : 4,
						name : "Suzy",
						path : "images/suzy.jpg",
						counter: 0
					},
					{
						id : 5,
						name : "Suzy",
						path : "images/suzy.jpg",
						counter : 0 
					},
				];  
	},
	
	getAllCats: function(){
		return cats;
	},
	getCatById: function(id){
		return cat = $.grep(cats, function(e){ return e.id == id; })[0];
	},
	addClickToCat: function(id){
		var cat = this.getCatByID(id);
		cat.counter++;
	}
}
