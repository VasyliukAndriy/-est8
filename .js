function mergeArray(arr1, arr2) {
    let i = 0;
    let k = 0;
    let resArray = [];

    do {
        if (arr1[i] !== undefined) {
            if (arr1[i] > arr2[k]) {
                resArray.push(arr2[k]);
                k++;
            } else {
                resArray.push(arr1[i]);
                i++;
            }
        } else {
            resArray.push(arr2[k]);
            k++;
        }
    } while (i < arr1.length || k < arr2.length);

    return resArray;
}

const mergedArr = mergeArray([1, 9], [4, 8]);
console.table(mergedArr);

function split(oneArray) {
    let resArr = [];
    let mid = Math.floor(oneArray.length / 2);

    let firstPartArray = oneArray.slice(0, mid);
    let secondPartArray = oneArray.slice(mid);

    if (firstPartArray.length > 1 || secondPartArray.length > 1) {
        return mergeArray(split(firstPartArray), split(secondPartArray));
    }
    return mergeArray(firstPartArray, secondPartArray);
}

const res = split([1, 9, 4, 8, 9, 6, 4, 8, 3]);
console.table(res);
