import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    let inputCarName = await Console.readLineAsync("");
    let arrCarName = inputCarName.split(",");
    let numberOfCars = arrCarName.length;
    Console.print("시도할 횟수는 몇 회인가요?");
    let playCount = await Console.readLineAsync("");
    Console.print("실행 결과");

  }
}
class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  randomMove() {
    let randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.moveCount++;
    }
  }
}

function Race (cars) {
  cars.forEach(car => {
    car.randomMove();
  });
  return cars;
}

function RoundResultPrint (cars) {
  let carsMove = Race(cars);
  for (let carNumber = 0; carNumber < carsMove.length; carNumber++) {
    let moveDistance = "";
    for (let move = 0; move < carsMove[carNumber].moveCount; move++) {
      moveDistance += "-";
    }
    Console.print(carsMove[carNumber].name + " : " + moveDistance);
  }
  Console.print("");
}
export default App;
