import { Fetch } from "../test-scripts/api";

test('El codigo debe de ser 200', async() => {
    const {cod} = await Fetch("Madrid")
    expect(cod).toBe(200)
});
