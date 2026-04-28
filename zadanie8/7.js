function removeDuplicates(nums){
    let i = 0;
    for (let j = 0; j < nums.length; j++){
        if (nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

    let nums = [1, 1, 2,3,7,9];
    console.log(removeDuplicates(nums));

    