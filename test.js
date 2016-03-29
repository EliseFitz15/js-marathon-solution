var ship;
var loadCrew;
var trainCrewmate;
var crewNames;
var rocket;
var countdown;

ship = {
  name: "YOUR SHIP NAME HERE",
  crew: [],
  propulsion: null,
  captain: function(){
    randomIndex = Math.floor(Math.random()*this.crew.length)
    return this.crew[randomIndex];
  },
  mountPropulsion: function(propulsion){
    this.propulsion = propulsion
  },
  fuelShip: function(fuel){
    console.log("Fueling ship - adding " + fuel + " units of fuel");
    fuel = this.propusion.fuel + fuel
  },
  takeoff: function(){
    this.propulsion.fire();
    console.log("pshooooooooo!!!!");
  }
}

rocket = {
  fuel: 0,
  fire: function(){
    if(this.fuel > 0){
      this.fuel = this.fuel - 1;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    }else{
      console.log("Engines failed to fire. No Fuel!")
      return false;
    };
  }
};

loadCrew = function(array, ship){
  for(var i = 0; i < array.length; i++){
    crewmate = trainCrewmate(array[i])
    ship.crew.push(crewmate)
  }
};

trainCrewmate = function(name){
  return {name: name}
};

crewNames = ["Names", "of", "Launchers", "currently", "going", "into", "space"];

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

launchpad = function(ship, crew, rocket){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
  loadCrew(crew, ship);
  console.log("Our captain for this voyage will be " + ship.captain());
  ship.mountPropulsion(rocket);
  ship.fuelShip(5);
  countdown(10, ship.takeoff);
};

launchpad(ship, crewNames, rocket);
