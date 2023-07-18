test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js')

    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", ()=>{
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(127.9); //1 us son 127.9 yen, entonces 1.2 dollar deberian ser = (1.2 * 127.9)
})

test("One yen should be 0.8 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.8); //1 yen son 0.8 pound, entonces 127.9 yen deberian ser = (127.9 * 0.8)
})

