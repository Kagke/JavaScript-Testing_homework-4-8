const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurus = [];
  };

Park.prototype.addDinosToCollection = function(species, diet, guestsAttractedPerDay) {
    this.collectionOfDinosaurus.push({species:species,diet:diet,guestsAttractedPerDay:guestsAttractedPerDay})
    return this.collectionOfDinosaurus.length;
};
Park.prototype.removeDinosFromColletion = function(species){
    const index = this.collectionOfDinosaurus.indexOf(species)
    this.collectionOfDinosaurus
    this.collectionOfDinosaurus.splice(index, 1)
};

Park.prototype.mostFamousDino = function(){ 
    max = 0
    for (var i = 0; i < this.collectionOfDinosaurus.length; i++) {  
            var currentDinoVisitors = this.collectionOfDinosaurus[i].guestsAttractedPerDay;
            var currentDinoFamous = this.collectionOfDinosaurus[i].species;
            
            if (currentDinoVisitors > max){
                 
                max = currentDinoVisitors
                famousDino = currentDinoFamous
            }
            }
            return famousDino
}

Park.prototype.addSpecificSpeciesOnList = function(species){
    var sameSpecies = []
    for (var i = 0; i < this.collectionOfDinosaurus.length; i++) {  
        var currentDinoSpecies = this.collectionOfDinosaurus[i].species;
        var currentDinoMatching = this.collectionOfDinosaurus[i];
        
        if (currentDinoSpecies === species ){
            sameSpecies.push(currentDinoMatching)
        }
        }
        return sameSpecies
};

Park.prototype.totalVisitorsPerDay = function(){
    var dailyVisitors = 0
    for (var i = 0; i < this.collectionOfDinosaurus.length; i++) {  
        var currentDinoVisitors = this.collectionOfDinosaurus[i].guestsAttractedPerDay;
        dailyVisitors = dailyVisitors + currentDinoVisitors
        }
    return dailyVisitors
};

Park.prototype.visitorsPerYear = function(dailyVisitors){
    return dailyVisitors * 365
};

Park.prototype.revenueOfYear = function(visitors, price){
    return visitors * price
};

  module.exports = Park;
