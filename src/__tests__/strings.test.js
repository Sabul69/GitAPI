import {saludo, HolaMundo} from "../test-scripts/strings"

test("Debe ser Hola Daniel",()=>{
    const name = "Daniel";
    expect(saludo(name)).toBe("Hola Daniel");
})

test('Debe de contener la palabra Hola ', () => {
    expect(HolaMundo()).toMatch(/Hola Mundo/)
})
