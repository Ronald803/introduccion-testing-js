// matchers
test('test obj', ()=>{
  const data = { name: 'osso' };
  data.lastname = 'blanco'
  expect(data).toEqual({name: 'osso',lastname: 'blanco'});
})

test('null',()=>{
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
})

test("boolean",()=>{
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
})

test("strings",()=>{
  expect('Christopher').toMatch(/stop/);
})

test("arrays",()=>{
  const numbers = [1,2,3,4];
  expect(numbers).toContain(3);
})
