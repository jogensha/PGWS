var HomeView = function(store) {
	
	this.initialize = function() {
		// Define uma Div Wrapper para o View. A Div Wrapper será usada para anexar eventos.
		this.el = $('<div/>');
		this.el.on('keyup', '.search-key', this.findByName);
	};
	
	this.render = function() {
		this.el.html(HomeView.template());
		return this;
	};
	
	this.findByName = function() {
		store.findByName($('.search-key').val(), function(employees) {
		$('.employee-list').html(HomeView.liTemplate(employees));
	 });
};
	
	this.initialize();
	
}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());