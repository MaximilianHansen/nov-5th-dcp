const num = 48975;
const num1 =489;

function numLength (e) {
    x = String(e).length;
    return x
}

function convertNumToArray(e) {
    let arrayX = [];
    let i = 0;
    while (i < numLength(e)) {
        let stringy = String(e);
        arrayX.push(stringy[i]);
        i++
    }
    return arrayX
}


function getPermutations(array) {

        let foundPermutations = [];

        function perms(subArr, currentPerm) {

            if (subArr.length === 0) {
                foundPermutations.push(currentPerm.join(""));
            }

            for (let i = 0; i < subArr.length; i++) {

                const newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1));

                const newCurrentPerm = currentPerm.concat(subArr[i]);

                perms(newSubArr, newCurrentPerm);
        }

       
    }

    perms(array, []);

    return foundPermutations.sort();

}



function run(e) {
    newArr = getPermutations(convertNumToArray(e));
    console.log(newArr);
    i = newArr.indexOf(String(e));
    console.log(` the next permutation of ${e} is ${newArr[i+1]} `)
}





