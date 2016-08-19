var octopus = {
	init: function() {
            model.init();
            catList.init();
        	catDetailedView.init();
        },

	getCats: function () {
		return model.getAllCats();
	},
	getCat: function (id) {
		return model.getCatById(id);
	},
	addClickToCat: function (id) {
		var cat = model.getCatById(id);
		cat.counter++;
		catDetailedView.render(id);
	}
}
octopus.init();