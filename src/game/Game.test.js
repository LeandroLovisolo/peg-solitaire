import { Game, UP, RIGHT, DOWN, LEFT } from "./Game";

describe("Game", () => {
  test("has the correct initial state", () => {
    const game = new Game();
    expect(game.toString()).toEqual(
      "  XXX  \n" +
        "  XXX  \n" +
        "XXXXXXX\n" +
        "XXX.XXX\n" +
        "XXXXXXX\n" +
        "  XXX  \n" +
        "  XXX  "
    );
  });

  describe("move", () => {
    test("can move right", () => {
      const game = new Game();
      const game2 = game.move(1, 3, RIGHT);
      expect(game2.toString()).toEqual(
        "  XXX  \n" +
          "  XXX  \n" +
          "XXXXXXX\n" +
          "X..XXXX\n" +
          "XXXXXXX\n" +
          "  XXX  \n" +
          "  XXX  "
      );
    });

    test("invalid move", () => {
      const game = new Game();
      expect(() => game.move(0, 0, UP)).toThrowError("Invalid move");
    });
  });

  describe("_isValidMove", () => {
    test("valid move up", () => {
      const game = new Game();
      expect(game._isValidMove(3, 5, UP)).toEqual(true);
    });

    test("invalid move up", () => {
      const game = new Game();
      expect(game._isValidMove(2, 5, UP)).toEqual(false);
    });
  });

  describe("_computeDstSquare", () => {
    test("up", () => {
      const game = new Game();
      expect(game._computeDstSquare(1, 1, UP)).toEqual([1, 0]);
    });

    test("right", () => {
      const game = new Game();
      expect(game._computeDstSquare(1, 1, RIGHT)).toEqual([2, 1]);
    });

    test("down", () => {
      const game = new Game();
      expect(game._computeDstSquare(1, 1, DOWN)).toEqual([1, 2]);
    });

    test("left", () => {
      const game = new Game();
      expect(game._computeDstSquare(1, 1, LEFT)).toEqual([0, 1]);
    });

    test("invalid direction", () => {
      const game = new Game();
      expect(() => game._computeDstSquare(1, 1, "kaboom")).toThrowError(
        "kaboom is not a valid direction"
      );
    });
  });

  describe("getPossibleMoves", () => {
    test("computes the right initial possible moves", () => {
      const game = new Game();
      expect(game.getPossibleMoves().map((game) => game.toString())).toEqual([
        "  XXX  \n" +
          "  X.X  \n" +
          "XXX.XXX\n" +
          "XXXXXXX\n" +
          "XXXXXXX\n" +
          "  XXX  \n" +
          "  XXX  ",

        "  XXX  \n" +
          "  XXX  \n" +
          "XXXXXXX\n" +
          "X..XXXX\n" +
          "XXXXXXX\n" +
          "  XXX  \n" +
          "  XXX  ",

        "  XXX  \n" +
          "  XXX  \n" +
          "XXXXXXX\n" +
          "XXXX..X\n" +
          "XXXXXXX\n" +
          "  XXX  \n" +
          "  XXX  ",

        "  XXX  \n" +
          "  XXX  \n" +
          "XXXXXXX\n" +
          "XXXXXXX\n" +
          "XXX.XXX\n" +
          "  X.X  \n" +
          "  XXX  ",
      ]);
    });
    test("computes the right possible moves for some board", () => {
      const game = new Game(
        [
          "  XXX  ",
          "  X.X  ",
          "XXX.XXX",
          "XXXXXXX",
          "XXXXXXX",
          "  XXX  ",
          "  XXX  ",
        ].map((line) => line.split(""))
      );
      expect(game.getPossibleMoves().map((game) => game.toString())).toEqual([
        "  XXX  \n" +
          "  X.X  \n" +
          "X..XXXX\n" +
          "XXXXXXX\n" +
          "XXXXXXX\n" +
          "  XXX  \n" +
          "  XXX  ",

        "  XXX  \n" +
          "  X.X  \n" +
          "XXXX..X\n" +
          "XXXXXXX\n" +
          "XXXXXXX\n" +
          "  XXX  \n" +
          "  XXX  ",

        "  XXX  \n" +
          "  X.X  \n" +
          "XXXXXXX\n" +
          "XXX.XXX\n" +
          "XXX.XXX\n" +
          "  XXX  \n" +
          "  XXX  ",
      ]);
    });
  });
});
