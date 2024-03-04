const {sum,multiply,divide} = require ('./02-math')

test("adds 1+3 should be 4",()=>{
  const rta = sum(1,3);
  expect(rta).toBe(4);
});

test("multiply 5*3 should be 15",()=>{
  const rta = multiply(5,3);
  expect(rta).toBe(15);
})

test("divide 36/3 should be 12",()=>{
  const rta = divide(36,3);
  expect(rta).toBe(12);
})

test("should divide for zero",()=>{
  const rta = divide(36,0);
  expect(rta).toBeNull();
  const rta2 = divide(10,0);
  expect(rta2).toBeNull();
})
