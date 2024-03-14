import { Dimensions } from "react-native";
import Circle1 from "../components/Circle1";
import Circle2 from "../components/Circle2";
import Box from "../components/Box";
import BoundaryBottom from "../components/BoundaryBottom";
import BoundaryLeft from "../components/BoundaryLeft";
import BoundaryRight from "../components/BoundaryRight";
import Constants from "../Constants";

import Matter from "matter-js";

export default (gameWorld) => {
  let engine = Matter.Engine.create();
  let world = engine.world;
  engine.gravity.y = 0;
  engine.gravity.x = 0;

  return {
    physics: { engine, world },

    Square: Box(world, "green", { x: 130, y: 16 }, { width: 40, height: 40 }),

    BottomBoundary: BoundaryBottom(
      world,
      "yellow",
      { x: 20, y: 750 },
      { height: 50, width: 900 }
    ),

    LeftBoundary: BoundaryLeft(
      world,
      "red",
      { x: 0, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: 90 }
    ),

    RightBoundary: BoundaryRight(
      world,
      "red",
      { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: 90 }
    ),

    Circle1: Circle1(world, "red", { x: 65, y: 600 }, 10),

    Circle2: Circle2(world, "red", { x: 0, y:0 }, 10),
    Circle3: Circle2(world, "red", { x: 0, y: 0 }, 10),
    Circle4: Circle2(world, "red", { x: 0, y: 0 }, 10),
    Circle5: Circle2(world, "red", { x: 0, y: 0 }, 10),
    Circle6: Circle2(world, "red", { x: 0, y: 0 }, 10),
    Circle7: Circle2(world, "red", { x: 0, y: 0 }, 10),
    Circle8: Circle2(world, "red", { x: 0, y: 0 }, 10),
    Circle9: Circle2(world, "red", { x: 0, y: 0 }, 10),

    Circle10: Circle1(world, "red", { x: 300, y: 600 }, 10),
  };
};
