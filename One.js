function find3Numbers(Array, sum) {

    for (let i = 0; i < Array.length - 2; i++) {

        for (let j = i + 1; j < Array.length - 1; j++) {

            for (let k = j + 1; k < Array.length; k++) {

                if (Array[i] + Array[j] + Array[k] == sum) {
                    const total = ("Triplet is: " + Array[i] +
                        ", " + Array[j] + ", " + Array[k]);
                    return total;
                }
            }
        }
    }


    return 'No element found';
}


// Input your number and sum
let Array = [-4, 1, 3, -2, -1];
let sum = 0;

console.log(find3Numbers(Array, sum));
