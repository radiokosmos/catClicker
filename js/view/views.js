var catDetailedView = {

}
var catList = {
	init : function () {
		var catsList=$('.cat-list');
		this.catTemplate = $('script[data-template="cat"]').html();
		octopus.getCats().forEach(function(cat){
			var thisTemplate = catTemplate.replace(/{{id}}/g, cat.id).replace(/{{path}}/g,cat.path).replace(/{{name}}/g,cat.name);
                $catList.append(thisTemplate);
		})
		
	}
}