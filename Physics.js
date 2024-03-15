import Matter, { Sleeping } from "matter-js";
//import Constants from "./Constants";

const Physics = (entities, { touches, dispatch, events, time }) => {
  let engine = entities.physics.engine;
  let world = engine.world;

  engine.world.gravity.y = 0.5;

  //////////////// Define connect1 as constraint between Two circles /////////////////////////////////////////////////////////////////
  // var connect1 = {
  //   bodyA: entities.Circle1.body,
  //   bodyB: entities.Circle2.body,
  //   length: 150, //Distance between two bodies in pixel -- try with some Negative length.

  //   stiffness: 0.2,
  // The rate at which it retruns to its resting.
  //   //Default is 1 . A value of 1 is very stiff. 0.2 acts like a soft spring. Try 0.5,0.9,2

  //   damping: 0, //the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
  //   //A value of 0.1 means the constraint will apply heavy damping, resulting in little to no oscillation.
  //   //A value of 0 means the constraint will apply no damping.
  // };

  // var constraint1 = Matter.Constraint.create(connect1); //Passing "connect1" constraint as an argument
  // Matter.World.add(world, constraint1);

  var connect1 = {
    bodyA: entities.Circle1.body,
    bodyB: entities.Circle2.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint1 = Matter.Constraint.create(connect1);
  Matter.Sleeping.set(entities.Circle1.body, true);
  Matter.World.add(world, constraint1);

  var connect2 = {
    bodyA: entities.Circle2.body,
    bodyB: entities.Circle3.body,
    length: 20,
    // stiffness: 0,
    // damping: 0,
  };

  var constraint2 = Matter.Constraint.create(connect2);
  Matter.World.add(world, constraint2);

  var connect3 = {
    bodyA: entities.Circle3.body,
    bodyB: entities.Circle4.body,
    length: 20,
    // stiffness: 0,
    // damping: 0,
  };

  var constraint3 = Matter.Constraint.create(connect3);
  Matter.World.add(world, constraint3);

  var connect4 = {
    bodyA: entities.Circle4.body,
    bodyB: entities.Circle5.body,
    length: 20,
    // stiffness: 0,
    // damping: 0,
  };

  var constraint4 = Matter.Constraint.create(connect4);
  Matter.World.add(world, constraint4);

  var connect5 = {
    bodyA: entities.Circle5.body,
    bodyB: entities.Circle6.body,
    length: 20,
    // stiffness: 0,
    // damping: 0,
  };

  var constraint5 = Matter.Constraint.create(connect5);
  Matter.World.add(world, constraint5);

  var connect6 = {
    bodyA: entities.Circle6.body,
    bodyB: entities.Circle7.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint6 = Matter.Constraint.create(connect6);
  Matter.World.add(world, constraint6);

  var connect7 = {
    bodyA: entities.Circle7.body,
    bodyB: entities.Circle8.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint7 = Matter.Constraint.create(connect7);
  Matter.World.add(world, constraint7);

  var connect8 = {
    bodyA: entities.Circle8.body,
    bodyB: entities.Circle9.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint8 = Matter.Constraint.create(connect8);
  Matter.World.add(world, constraint8);

  var connect9 = {
    bodyA: entities.Circle9.body,
    bodyB: entities.Circle10.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint9 = Matter.Constraint.create(connect9);
  Matter.World.add(world, constraint9);

  var connect10 = {
    bodyA: entities.Circle10.body,
    bodyB: entities.Circle11.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint10 = Matter.Constraint.create(connect10);
  Matter.World.add(world, constraint10);

  var connect11 = {
    bodyA: entities.Circle11.body,
    bodyB: entities.Circle12.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint11 = Matter.Constraint.create(connect11);
  Matter.World.add(world, constraint11);

  var connect12 = {
    bodyA: entities.Circle12.body,
    bodyB: entities.Circle13.body,
    length: 20,
    // stiffness: 0.2,
    // damping: 0.5,
  };

  var constraint12 = Matter.Constraint.create(connect12);
  Matter.World.add(world, constraint12);

  //////////////////////////////// constraint2 between a Point A and Circle1 (bodyB)  /////////////////////////////////////////////////////////

  // var constraint0 = Matter.Constraint.create({
  //   pointA: { x: 545, y: 600 },
  //   bodyB: entities.Circle1.body,
  //   // pointB: { x: 0, y: 0 },
  //   length: 20,
  // });

  // Matter.World.add(world, constraint0);

  // var constraint00 = Matter.Constraint.create({
  //   pointA: { x: -180, y: 600 },
  //   bodyB: entities.Circle13.body,
  //   // pointB: { x: 0, y: 0 },
  //   length: 20,
  // });

  // Matter.World.add(world, constraint00);

  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Square.body, {
        x: 0, //move along x-axis with given velocity
        y: 10, //move along y-axis with given velocity
      });
      Matter.Body.setPosition(entities.Square.body, {
        x: Math.floor(Math.random() * (300 - 0 + 1)) + 40,
        y: Math.floor(Math.random() * (300 - 0 + 1)) + 40,
      });
    });

  //////////////////////////////////////////////////////////////////////////////

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Circle1.body, {
        x: 0, //move along x-axis with given velocity
        y: 10, //move along y-axis with given velocity
      });
    });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
