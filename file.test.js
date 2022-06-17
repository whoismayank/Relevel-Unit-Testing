test('test a object', () => {
    const data = { 
        a: 1
    }
    expect(data).toEqual({a:1})
})






//test undefined

test('test undefined', () => {
    const val = undefined
    expect(val).toBeUndefined();
})

// test null
test('test null', () => {
    const val = null;
    expect(val).toBeNull();
})

// test truthiness
test('test truthiness', () => {
    let a = true;
    let b = 1;
    let c = 'mahendra';
    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(c).toBeTruthy();
})

// testing numbers

test('test numbers', () => {
    const num = 3.5;
    expect(num).toBeGreaterThan(2);
    expect(num).toBeGreaterThanOrEqual(3.5);
    expect(num).toBeLessThan(5);
    expect(num).toBeLessThanOrEqual(3.5)
})


// test a array
test('test a array', () => {
    const arr = ['Mahendra','Ajay','Vinod','Vijay'];
    expect(arr).toContain('Vinod');
})

// negative testing on the array
test('negative test a array', () => {
    const arr = ['Mahendra','Ajay','Vinod','Vijay'];
    expect(arr).not.toContain('Rahul');
})


// exceptions testing

const compileCode = () => {
    throw Error('Something went wrong!')
}

test('exceptions testing', ()=> {
    expect(compileCode).toThrow();
    expect(compileCode).toThrow(Error);
    expect(compileCode).toThrow(`Something went wrong!`);
})



// test promises in jest
const promiseFunc = () => {
    return new Promise((resolve, reject) =>{
        return resolve('Mahendra')
    })
}

test('promises in jest', ()=> {
    return promiseFunc().then((response) => {
        expect(response).toBe('Mahendra');
    })
})