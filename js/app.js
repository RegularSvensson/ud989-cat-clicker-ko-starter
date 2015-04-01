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

var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('www.google.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());
