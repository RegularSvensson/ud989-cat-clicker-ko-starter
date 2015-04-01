var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'www.google.com',
		nicknames: ['Tabtab', 'T-Bone', 'T-tip']
	},
	{
		clickCount: 0,
		name: 'Tabby2',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'www.google.com',
		nicknames: ['Tabtab2', 'T-Bone2', 'T-tip2']	
	},

]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else {
			title = 'Master of the universe!!';
		}
		return title;
	}, this);
}


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );
	
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
}

ko.applyBindings(new ViewModel());
