# jest-examples

- test or it method 
- expect method
- describe method 
- nested describe method 
- only and skip method 
- beforeAll and beforeEach
- afterAll and afterEach
- Matchers methods : toHavelength , toContain , not.toContain , not.toBe , isNaN , toBeFalsy , toBeTrusy
- Matchers methods : toBeGreaterThan , toBeGreaterThanOrEqual , toBeLessThan , toBeLessThanOrEqual 
- Matchers methods : toBeUndefined , toMatch , toHaveProperty
- Create Your Own Matchers using expect.extend(recived,target) and built in property: pass , message , then call your new matcher inside the test method via expect method.
- expect.anything() => expect anything else 'undefiend' or 'null'
- expect.any(Constructor) => expect the input is any Constructor like String or Number
- expect.arrayContaining(array) => expect the received array is contains the target array
### What parts of code are tested, which functions and lines get tested:-
 - Code Coverage options \ comand line : npm test -- --coverage
 - Code Coverage options \ package.json : "jest": { "collectCoverage": true, "coverageReporters": ["html"]  }