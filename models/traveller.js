const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startJourneyLocations = this.journeys.map((journey) =>{
    return journey.startLocation;
  });
return startJourneyLocations;
}



Traveller.prototype.getJourneyEndLocations = function () {
  const endJourneyLocations = this.journeys.map((journey) =>{
    return journey.endLocation;
  });
  return endJourneyLocations;
};


Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransport = this.journeys.map((journey) =>{
    return journey.transport;
  })
  return modesOfTransport;

};



Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeysByTransport;

};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  },0);
    return totalDistanceTravelled;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
