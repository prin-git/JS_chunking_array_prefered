function chunkArray(arr, size) {
  let parentArr = [];
  for (let i = 0; i < arr.length; i++) {
    let childArr = parentArr[parentArr.length - 1];
    console.log(childArr);
    if (!childArr || childArr.length === size) {
      parentArr.push([arr[i]]);
    } else {
      childArr.push(arr[i]);
    }
  }
  return parentArr;
}

let a = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);
console.log(a);
