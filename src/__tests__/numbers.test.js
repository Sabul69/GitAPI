import { suma } from "../test-scripts/numbers";

test('La suma debe ser 10', () => {
    expect(suma(2,8)).toBe(10)
})
test('La suma debe ser mayor a 10', () => {
    expect(suma(3,8)).toBeGreaterThan(10)
})
