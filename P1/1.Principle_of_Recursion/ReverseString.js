/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // Checking for base cases
  if (s.length === 0) return
  if (s.length === 1) return s

  // Recurrence Relation
  // Retrieve the left-most and right-most element in the array
  let left = s.shift()
  let right = s.pop()

  // Call reverseString to commence recursion
  reverseString(s)

  // Swap the left and right element
  s.unshift(right)
  s.push(left)

  // Return the reversed string
  return s
};