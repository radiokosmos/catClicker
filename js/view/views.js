var catDetailedView = {
	init : function () {
		this.$catDetail=$('#catDetail');
		this.catDetailTemplate = $('script[data-template="catDetail"]').html();
		this.$catDetail.on('click',  function(e) {
			octopus.addClickToCat(e.currentTarget.firstElementChild
.id);
		});
		this.render();
	},
	render: function() {
		var cat = octopus.getCurrentCat();
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
			var catId = $(this).data().id;
			cat = octopus.setCurrentCat(octopus.getCat(catId));
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

};
var adminView = {
	init : function () {
		this.$adminView = $('.admin-form');
		this.$adminView.show();
		this.$adminView.on('submit', function(e) {
			var opts = $(this).serializeObject();
			var cat = octopus.getCurrentCat();
			octopus.setCatProperties(cat.id,opts);
			//e.target.hide();
			$('.admin-form').hide();
			e.preventDefault();
			
		});
		this.$adminView.on('reset', function(e) {
		
			$('.admin-form').hide();
			e.preventDefault();
			
		});
		this.render();
	},
	render: function(){
		var cat = octopus.getCurrentCat();
		this.$adminView.children().filter('input[type=text]').each(function(index, value){
			var attr = value['name'];
			value['value'] =  cat[attr];
		});
	},
	isShown: function(){
		return ($('.admin-form').attr('dispay') !== 
		'none');
	}
}
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
