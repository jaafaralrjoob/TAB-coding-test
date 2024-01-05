// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// assignment
function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // summation from 0 to n using summation law
  const actualSum = nums.reduce((sum, num) => sum + num, 0); // array sum
  return expectedSum - actualSum;
}

// Example 1
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

// Example 2
const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums2)); // Output: 8

// Example 3
const nums3 = [0, 1];
console.log(missingNumber(nums3)); // Output: 2
