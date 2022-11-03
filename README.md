# jest-examples

- test or it method 
- expect method :- use .toBe() -> value type like string or number , .toEqual() -> reference type like object or array
- describe method : block of tests
- nested describe method 
- only and skip method : Focusing tests , Skipping tests
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
 - Code Coverage options \ command line : npm test -- --coverage
 - Code Coverage options \ package.json : "jest": {     <br />
     "collectCoverage":     true,                       <br />
     "coverageReporters":   ["html"]                    <br />
     "coverageDirectory":   "reports"                   <br />
     "collectCoverageFrom": ["**/*.{js,jsx,ts}"]        <br />
     "coveragePathIgnorePatterns": ["/node_modules/", "/build/"]     <br />
     } 
### Mock Functions (spies) : jest has built-in function to test behavior function
- Mock Functions : toHaveBeenCalled , toHaveBeenCalledTimes , toHaveBeenCalledWith
- web site -> https://sinonjs.org/ : Standalone test spies, stubs and mocks for JavaScript.
Works with any unit testing framework.
- jest Documentation : https://jestjs.io/
- jest Cheat Sheet :  https://devhints.io/jest
- jest github : https://github.com/sapegin/jest-cheat-sheet