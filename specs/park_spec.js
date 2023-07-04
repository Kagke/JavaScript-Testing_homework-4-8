const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    
      park = new Park('Jurasic World', 6);
    });
  

  it('should have a name', function(){
    const equal = park.name;
    assert.strictEqual(equal, "Jurasic World")
  });

  it('should have a ticket price', function(){
    const equal = park.ticketPrice;
    assert.strictEqual(equal, 6);

  });

  it('should have a collection of dinosaurs', function(){
    const equal = park.collectionOfDinosaurus;
    assert.strictEqual(equal.length, 0);
  });
  

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosToCollection("Velosiraptor","Carnivore",30);
    const equal = park.collectionOfDinosaurus;
    assert.deepStrictEqual(equal, [{species:"Velosiraptor",diet:"Carnivore",guestsAttractedPerDay:30}]);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosToCollection("Velosiraptor","Carnivore",30);
    park.addDinosToCollection("Triceratop","Herbivor",20);
    park.addDinosToCollection("Brachiosaurus","Herbivor",26);
    park.removeDinosFromColletion("Triceratop");
    assert.deepStrictEqual(park.collectionOfDinosaurus.length, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosToCollection("Triceratop","Herbivor",20);
    park.addDinosToCollection("Velosiraptor","Carnivore",30);
    park.addDinosToCollection("Brachiosaurus","Herbivor",26);
    const equal = park.mostFamousDino();
    assert.deepStrictEqual(equal , "Velosiraptor");
  });


  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosToCollection("Triceratop","Herbivor",20);
    park.addDinosToCollection("Velosiraptor","Carnivore",30);
    park.addDinosToCollection("Brachiosaurus","Herbivor",26);
    park.addDinosToCollection("Triceratop","Carnivore",25);
    const equal = park.addSpecificSpeciesOnList("Triceratop");
    assert.deepStrictEqual(equal.length, 2)

  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosToCollection("Triceratop","Herbivor",20);
    park.addDinosToCollection("Velosiraptor","Carnivore",30);
    park.addDinosToCollection("Brachiosaurus","Herbivor",26);
    const equal = park.totalVisitorsPerDay()
    assert.strictEqual(equal, 76)
  });


  it('should be able to calculate the total number of visitors per year',function(){
    park.addDinosToCollection("Triceratop","Herbivor",20);
    park.addDinosToCollection("Velosiraptor","Carnivore",30);
    park.addDinosToCollection("Brachiosaurus","Herbivor",26);
    const equal = park.visitorsPerYear(park.totalVisitorsPerDay())
    assert.strictEqual(equal, 27740)
  });
  

  it('should be able to calculate total revenue for one year',function(){

  
  park.addDinosToCollection("Triceratop","Herbivor",20);
  park.addDinosToCollection("Velosiraptor","Carnivore",30);
  park.addDinosToCollection("Brachiosaurus","Herbivor",26);
  
  const visitorsYearly = park.visitorsPerYear(park.totalVisitorsPerDay())
  const equal = park.revenueOfYear(visitorsYearly, park.ticketPrice)
  assert.strictEqual(equal, 166440)
});
});
