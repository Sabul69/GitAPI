import { example1, example2 } from "../test-scripts/objects";

test('Comparacion de objetos', () => {
  expect(example1).toEqual(example2)  
})
