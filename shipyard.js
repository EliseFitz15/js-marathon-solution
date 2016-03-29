var ship;
var trainCrewmate;
var loadCrew;
var launchPad;
var fuelShip;
var takeoff;
var countdown;

ship = {
  name: "Pickle Launcher",
  crew: [],
  captain: function(){
    var lengthOfArray = this.crew.length;
    var randomFloat = Math.random() * lengthOfArray;
    var calcIndex = Math.floor(randomFloat);
    return this.crew[calcIndex];
  },
  propulsion: null,
  mountPropulsion: function(propulsion){
    this.propulsion = propulsion
  },
  fuelShip: function(fuel){
    console.log("Adding " + fuel + " units of fuel to the " + this.name + " rocket.");
    this.propulsion.fuel = this.propulsion.fuel + fuel
    console.log("Fuel level now at " + this.propulsion.fuel);
  },
  takeoff: function(){
    ship.propulsion.fire;
    console.log("pshooooooooo!!!!");
  }
};

rocket = {
  fuel: 1,
  fire: function(){
    if (this.fuel > 0){
      this.fuel = this.fuel - 1;
      console.log("Engine fired! " + this.fuel + " fuel remaining.");
      return true;
    } else {
      console.log("Engine failed to fire up!");
      return false;
    };
  }
};

trainCrewmate = function(name){
    return {name: name}
};

crewNames = ["Ari", "Nat", "Leise", "Trish", "Eric", "Sorachantha", "Jake", "Matt", "Michelle", "Elise"];

loadCrew = function(ship){
  for(var i = 0; i < crewNames.length; i++){
    crewmate = trainCrewmate(crewNames[i]);
    ship.crew.push(crewmate);
  }
  return ship.crew
};


countdown = function(num, callback){
  if( num > 0){
    setTimeout(function(){
      console.log(num);
      countdown(num - 1, callback);
    }, 1000);
  }else{
    console.log("Blastoff!!");
    callback();
  };
}

launchPad = function(ship, array, rocket){
  console.log("Preparing for Launch!");
  console.log("Ship " + ship.name + " preparing on the Launch Pad");
  loadCrew(ship);
  console.log(ship.crew)
  console.log(ship.captain().name + " will be our captain for this voyage.");
  ship.mountPropulsion(rocket);
  ship.fuelShip(4);
  countdown(3, ship.takeoff);
};

launchPad(ship, crewNames, rocket);
