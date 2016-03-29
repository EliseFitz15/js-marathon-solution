
#### Step 0

```
var launchpad = function(){
  console.log("Initiating Preflight Checks!")
}

launchpad();
```

#### Step 1
```
var ship = {
  name: "The Galactronica"
};

var launchpad = function(){
  console.log("Initiating Preflight Checks!")
}

launchpad();
```
#### Step 2
```
var ship = {
  name: "The Galactronica"
};

var launchpad = function(spaceship){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
}

launchpad(ship);
```

#### Step 3

```
var trainCrewmate = function(name){
  return {name: name}
};

var crewNames = ["Names", "of", "Launchers", "currently", "going", "into", "space"];
```

#### Step 4

```
var loadCrew = function(array){
  crew = []
  for(var i = 0; i < array.length; i++){
    crewmate = trainCrewmate(array[i])
    crew.push(crewmate)
  }
  return crew
};
```

#### Step 5

```
var ship;
var loadCrew;
var trainCrewmate;
var crewNames;

ship = {
  name: "The Galactronica"
};

loadCrew = function(array){
  crew = []
  for(var i = 0; i < array.length; i++){
    crewmate = trainCrewmate(array[i])
    crew.push(crewmate)
  }
  return crew
};

trainCrewmate = function(name){
  return {name: name}
};

crewNames = ["Names", "of", "Launchers", "currently", "going", "into", "space"];

launchpad = function(spaceship){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
}

launchpad(ship);
```

#### Step 6

```
ship = {
  name: "The Galactronica",
  crew: []
};

```

```
loadCrew = function(array, ship){
  for(var i = 0; i < array.length; i++){
    crewmate = trainCrewmate(array[i])
    ship.crew.push(crewmate)
  }
};
```

```
launchpad = function(ship, crew){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
  loadCrew(crew, ship);
};
```

#### Step 7

```
ship = {
  name: "YOUR SHIP NAME HERE",
  crew: [],
  captain: function(){
    randomIndex = Math.floor(Math.random()*this.crew.length)
    return this.crew[randomIndex]
  }
};
```

## Step 8


```
launchpad = function(ship, crew){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
  loadCrew(crew, ship);
  console.log("Our captain for this voyage will be " + ship.captain().name);
};
```

```
launchpad(ship, crewNames);
```

##Step 9

```
var rocket;

// Other code

rocket = {
  fuel: 0,
  fire: function(){
  }
};

```

```
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

```

## Step 10

ship = {
  name: "YOUR SHIP NAME HERE",
  // Other properties on ship...
  propulsion: null,
  mountPropulsion: function(propulsion){
    this.propulsion = propulsion
    }
  }
};


#### Step 11

```
ship = {
  fuelShip: function(fuel){
    console.log("Fueling ship - adding " + fuel + " units of fuel");
    fuel = ship.propulsion.fuel + fuel
  }
};

```


```
launchpad = function(ship, crew, rocket){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
  loadCrew(crew, ship);
  console.log("Our captain for this voyage will be " + ship.captain());
  ship.mountPropulsion(rocket);
  ship.fuelShip(5);
};

launchpad(ship, crewNames, rocket);
```

#### Step 12

```
ship = {
  // other properties
  takeoff: function(){
    this.propulsion.fire();
    console.log("pshooooooooo!!!!");
  }
}
```

```
launchpad = function(ship, crew, rocket){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
  loadCrew(crew, ship);
  console.log("Our captain for this voyage will be " + ship.captain());
  ship.mountPropulsion(rocket);
  fuelShip(ship, 5);
  ship.takeoff();
};

launchpad(ship, crewNames, rocket);
```

#### Step 13

```
var countdown;

//Other code

countdown = function(num){
  if( num > 0){
    setTimeout(function(){
      console.log(num);
      countdown(num - 1);
    }, 1000);
  }else{
    console.log("Blastoff!!");
  };
}
```

```
launchpad = function(ship, crew, rocket){
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + ship.name);
  loadCrew(crew, ship);
  console.log("Our captain for this voyage will be " + ship.captain().name);
  ship.mountPropulsion(rocket);
  ship.fuelShip(5);
  countdown(10);
  ship.takeoff();
};

launchpad(ship, crewNames, rocket);
```

#### Step 14
```
countdown = function(num, ship){
  if( num > 0){
    setTimeout(function(){
      console.log(num);
      countdown(num - 1, callback);
    }, 1000);
  }else{
    console.log("Blastoff!!");
    ship.takeoff();
  };
}
```

```
launchpad = function(ship, crew, rocket){
  loadCrew(crew, ship);
  console.log("Our captain for this voyage will be " + ship.captain());
  ship.mountPropulsion(rocket);
  ship.fuelShip(5);
  countdown(10, ship.takeoff);
};

launchpad(ship, crewNames, rocket);
```



#### FULL SOLUTION

```
var ship;
var loadCrew;
var trainCrewmate;
var crewNames;
var rocket;
var countdown;

ship = {
  name: "YOUR SHIP NAME HERE",
  crew: [],
  captain: function(){
    randomIndex = Math.floor(Math.random()*this.crew.length)
    return crew[randomIndex]
  },
  propulsion: null,
  mountPropulsion: function(propulsion){
    this.propulsion = propulsion
    }
  },
  fuelShip: function(fuel){
    console.log("Fueling ship - adding " + fuel + " units of fuel");
    fuel = ship.propusion.fuel + fuel
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
```
