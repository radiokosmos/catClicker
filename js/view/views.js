var catDetailedView = {
	init : function (id) {
		this.$catDetail=$('#catDetail');
		this.catDetailTemplate = $('script[data-template="catDetail"]').html();
		this.$catDetail.on('click', 'img#'+id, function(e) {
			octopus.addClickToCat(id);
		});
	},
	render: function(id) {
		var cat = octopus.getCat(id);
		this.$catDetail.html('');
			//catDetailTemplate = this.catDetailTemplate;
		var thisDetailTemplate = this.catDetailTemplate
		.replace(/{{id}}/g, cat.id)
		.replace(/{{path}}/g,cat.path)
		.replace(/{{name}}/g,cat.name)
		.replace(/{{counter}}/g,cat.counter);
		this.$catDetail.append(thisDetailTemplate);
	}
};
var catList = {
	init : function () {
		this.$catsList=$('.cat-list');
		this.catTemplate = $('script[data-template="cat"]').html();
		this.$catsList.on('click', '.cat', function (e) {
			var cat = $(this).data();
			catDetailedView.render(cat.id);
		});
		this.render();

	},
	render : function (){
		var $catsList=this.$catsList,
			catTemplate = this.catTemplate;


		octopus.getCats().forEach(function(cat){
			var thisTemplate = catTemplate.replace(/{{id}}/g, cat.id).replace(/{{path}}/g,cat.path).replace(/{{name}}/g,cat.name);
                $catsList.append(thisTemplate);
		});
	}

}