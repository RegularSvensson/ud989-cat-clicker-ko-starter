
/* ======= Model (collection?) ======= */
//declare array of objects
var initialCats = [
	//cat objects
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

/* ======= ViewModel (Octopus) ======= */

var ViewModel = function() {
	//assign this to self for clarification
	var self = this;
	// set the catList to an observable array
	this.catList = ko.observableArray([]);
	//push all cats in initialCats array to catList
	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});
	//set currentCat to the first object in catList
	this.currentCat = ko.observable( this.catList()[0] );
	// declare function to increment counter
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	//declare function to setCat when a cat is clicked
	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
}



/* ======= View ======= */
//Declare view function Cat
var Cat = function(data) {
	//set clickCount to argument's clickCount
	this.clickCount = ko.observable(data.clickCount);
	//set name to argument's name
	this.name = ko.observable(data.name);
	//set imgSrc to arguement's imgSrc
	this.imgSrc = ko.observable(data.imgSrc);
	//set imgAttribution to argument's imgAttribution
	this.imgAttribution = ko.observable(data.imgAttribution);
	// set nicknames to argument's nicknames
	this.nicknames = ko.observableArray(data.nicknames);
	// set title to function that depends on number of clicks
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

//call applyBindings function on a new ViewModel
ko.applyBindings(new ViewModel());

