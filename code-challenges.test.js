

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.


// a) Create a test with expect statements for each of the variables provided.


// PSEUDOCODE:
// create a test starting with describe and the function name "fib" with the information provided and desired output

    describe("fib", () => {
          const fibLength1 = 6
          // Expected output: [1, 1, 2, 3, 5, 8]
          const fibLength2 = 10
          // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        it("takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence", () => {
            expect(fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
            expect(fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
    })

// b) Create the function that makes the test pass.

 //Pseudo code declare a function named fib
// create a for loop that iterates through the number length
// start for loop at i = 2 since there are already 2 items in array
// make a new index in array that equals to the sum of the previous 2 numbers

        const fib = (num) => {
            let array = [1, 1]
            for (let i = 2; i < num; i++) {
                array[i] = array[i-2] + array[i-1]
            }
            return array
        }

//output:PASS

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE: create a test starting with describe and the function name "leastToGreatest" with the information provided and the desired output

describe("leastToGreatest", () => {
    it(`Takes in an object and returns an array of the numbers sorted from least to greatest.`, () => {
      const studyMinutesWeek1 = {
        sunday: 90,
        monday: 30,
        tuesday: 20,
        wednesday: 15,
        thursday: 30,
        friday: 15,
        saturday: 60,
      }
      const studyMinutesWeek2 = {
        sunday: 100,
        monday: 10,
        tuesday: 45,
        wednesday: 60,
        thursday: 20,
        friday: 15,
        saturday: 65,
      }
      expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
  })
  
  
// b) Create the function that makes the test pass.
// PSEUDOCODE: created a function named leastToGreatest, created an array to pass through wanted array
//at first I thought of using the method filter but that did not work, and then i found the method .sort 

  const leastToGreatest = (object) => {
    emptyArr = Object.values(object).sort((a, b) => a - b)
    return emptyArr
  }
  //output: PASS

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE: create a test starting with describe and the function name "accSum" with the information provided and the desired output
  
    describe("accSum", () => {
      const accountTransactions1 = [100, -17, -23, -9]
      // Expected output: [100, 83, 60, 51]
      const accountTransactions2 = [250, -89, 100, -96]
      // Expected output: [250, 161, 261, 165]
      const accountTransactions3 = []
      // Expected output: []
        it("takes in an array and returns an array of the accumulating sum", () => {
            expect(accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
            expect(accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
            expect(accSum(accountTransactions3)).toEqual([])
        })
    })

// b) Create the function that makes the test pass.
// PSEUDOCODE: naming the function accSum, creating an empty array (sumArr) so the updated sum can be inputed into it
//made a forloop to iterate through old array and to get the some of each index
    const accSum = (numArr) => {
        let sumArr = []
        if (numArr.length > 0) {
            for (let i = 1; i < numArr.length; i++) {
                sumArr[0] = numArr[0]
                sumArr[i] = sumArr[i-1] + numArr[i]
            }
        }
        return sumArr
    }

    //output:PASS
    