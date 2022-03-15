document.addEventListener('DOMContentLoaded', (event) => {
    

    const doMath = () => {
        return new Promise((resolve, reject) => {
            resolve(slowMath.add(1, 1));
            reject(new Error('Oops! Something went wrong with Task 1!'));
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.multiply(result, 2));
                reject(new Error('Oops! Something went wrong with Task 2!'));
            })
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.divide(result, 4));
                reject(new Error('Oops! Something went wrong with Task 3!'));
            })
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.subtract(result, 3));
                reject(new Error('Oops! Something went wrong with Task 4!'));
            })
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.add(result, 98));
                reject(new Error('Oops! Something went wrong with Task 5!'));
            })
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.remainder(result, 2));
                reject(new Error('Oops! Something went wrong with Task 6!'));
            })
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.multiply(result, 50));
                reject(new Error('Oops! Something went wrong with Task 7!'));
            })
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.remainder(result, 40));
                reject(new Error('Oops! Something went wrong with Task 8!'));
            })
        }).then((result) => {
            console.log(`${result} `)
            return new Promise((resolve, reject) => {
                resolve(slowMath.add(result, 32));
                reject(new Error('Oops! Something went wrong with Task 9!'));
            })
        }).then((result) => {
            console.log(`The final result is: ${result}`)
        }).catch((error) => {
            console.log(`An error has occurred!`)
            console.log(`${error}`)
        })
    }

    doMath();

    
})
 