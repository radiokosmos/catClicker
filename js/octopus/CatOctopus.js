var octopus = {
	init: function() {
			model.currentCat=model.cats[0];
            catList.init();
        	catDetailedView.init();
        },

	getCats: function () {
		return model.cats;
	},
	getCat: function (id) {
		return cat = $.grep(model.cats, function(e){ return e.id == id; })[0];
	},
	getCurrentCat: function () {
		return model.currentCat;
	},
	setCurrentCat: function (cat) {
		model.currentCat = cat; 
		catDetailedView.render();
	},
	addClickToCat: function () {
		var cat = model.currentCat;
		cat.counter++;
		catDetailedView.render();
	},
	setCatProperties(id, opts) {
		for (cat in model.cats){
			if(model.cats[cat].id === id){
				for (opt in opts){
					model.cats[cat][opt]=opts[opt];
				}
			}
		}
		catDetailedView.render();

	}

}
octopus.init();