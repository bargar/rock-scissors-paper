import engine from "src/game/engine";

describe("engine", () => {
  describe("play", () => {
    const { play } = engine;
    describe("winning", () => {
      test("rock beats scissors", () => {
        expect(play("ROCK", "SCISSORS")).toBe("WIN");
      });
      test("scissors beats paper", () => {
        expect(play("SCISSORS", "PAPER")).toBe("WIN");
      });
      test("paper beats rock", () => {
        expect(play("PAPER", "ROCK")).toBe("WIN");
      });
    });
    describe("losing", () => {
      test("scissors loses to rock", () => {
        expect(play("SCISSORS", "ROCK")).toBe("LOSE");
      });
      test("paper loses to scissors", () => {
        expect(play("PAPER", "SCISSORS")).toBe("LOSE");
      });
      test("rock loses to paper", () => {
        expect(play("ROCK", "PAPER")).toBe("LOSE");
      });
    });
    describe("ties", () => {
      test("rock ties rock", () => {
        expect(play("ROCK", "ROCK")).toBe("TIE");
      });
      test("scissors ties scissors", () => {
        expect(play("SCISSORS", "SCISSORS")).toBe("TIE");
      });
      test("paper ties paper", () => {
        expect(play("PAPER", "PAPER")).toBe("TIE");
      });
    });
  });

  test("move", () => {
    const { move } = engine;
    for (let i = 0; i < 10; i++) {
      expect(move()).toMatch(/ROCK|SCISSORS|PAPER/);
    }
  });
});
