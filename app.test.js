const fun =require('./All/app')

//toBe is used for checking primitive types
test('ADD 2+3=5',()=>{
    expect(fun.add(2,3)).toBe(5)
})

test('ADD 2+2!=5',()=>{
    expect(fun.add(2,2)).not.toBe(5)
})

test('should be null',()=>{
    expect(fun.isNull()).toBeNull()
})

test('should be undefined',()=>{
    expect(fun.isundefined()).toBeUndefined()
})
test('should be True',()=>{
    expect(fun.isTrue()).toBeTruthy()
})


test('should be False',()=>{
    expect(fun.isFalse()).toBeFalsy()
})


test('should be',()=>{
    expect(fun.is(false)).toBeFalsy()
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull() matches only null
// toBeUndefined() matches only undefined
// toBeDefined() is the opposite of toBeUndefined
// toBeTruthy() matches anything that an if statement treats as true
// toBeFalsy() matches anything that an if statement treats as false


// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
  });


  // Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
  });

  test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
  });
  