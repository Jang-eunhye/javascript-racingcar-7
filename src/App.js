import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    let inputCarName = await Console.readLineAsync("");
    let arrCarName = inputCarName.split(",");
    Console.print("시도할 횟수는 몇 회인가요?");
    let playCount = await Console.readLineAsync("");
  }
}

export default App;
