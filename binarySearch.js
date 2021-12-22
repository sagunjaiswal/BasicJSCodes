let nums = [11,22,33,44,55];
let target = 11;

var search = function(nums, target) {
  let start = 0 , end = nums.length-1;
  while(start <= end){
      let mid = start + Math.floor((end-start)/2);
      if(nums[mid] == target){
          return mid;
      }
      else if(nums[mid] > target){
          end = mid-1;
      }
      else {
          start = mid+1;
      }
  }
  return -1;
};
console.log(search(nums,target));
