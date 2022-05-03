import Pokemon from "../parentClass/pokemon.parentClass";

interface Coordinate {
  x: number;
  y: number;
}

export default class invisibleHitbox {
  protected coordinates: Coordinate;
  protected height: number;
  protected width: number;

  constructor(coordinates: Coordinate, height: number, width: number) {
    this.coordinates = coordinates;
    this.height = height;
    this.width = width;
  }

  setCoordinates() {
    
  }

  private update() {
    throw "method not implemented";
  }

  private draw() {
    throw "method not implemented";
  }

  coordinate(x: number, y: number): void;
  coordinate(param1: unknown, param2?: unknown): Coordinate {
    let coord: Coordinate = {
      x: 0,
      y: 0,
    };

    if (typeof param1 === "number") {
      coord = {
        x: Number(param1),
        y: Number(param2),
      };
    }
    return coord;
  }
}
