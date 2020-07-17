//Objective is to return the length of a new array after a certain value is deleted.

let nums = [3,2,2,3], val = 3


//We use the 'left' pointer to check how many values are NOT the given value,
//and return it at the end.

let left = 0
let right = 0

while (right < nums.length) {
    if (nums[right] != val) {
        nums[left++] = nums[right]
    }
    right++
}

return left