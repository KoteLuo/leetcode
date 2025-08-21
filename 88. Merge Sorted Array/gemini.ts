/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1; // Pointer for nums1's valid elements
    let p2 = n - 1; // Pointer for nums2
    let pMerge = m + n - 1; // Pointer for the merged array's last position

    while (p2 >= 0) {
        // If p1 is still valid and nums1[p1] is greater than nums2[p2],
        // take from nums1
        if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
            nums1[pMerge] = nums1[p1];
            p1--;
        } else {
            // Otherwise, take from nums2
            nums1[pMerge] = nums2[p2];
            p2--;
        }
        pMerge--;
    }
}