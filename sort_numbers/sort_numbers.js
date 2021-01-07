function sort (arr) {
  console.log(arr);

  function compare(a, b) {
    if (a > b) {
      return false
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let first = arr[i]
    let second = arr[i + 1]
    if (compare(first, second) == false) {
      arr[i] = second
      arr[i + 1] = first
    }
    
    console.log(arr);
  }


  console.log(arr)
}

sort([2,1,14,27,6]);