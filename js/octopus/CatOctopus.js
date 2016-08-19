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
		model.addClickToCat(id);
		catDetailedView.render(id);
	}
}
octopus.init();