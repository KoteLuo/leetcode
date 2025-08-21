// Definition for a binary tree node
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;
    
    function buildBST(left: number, right: number): TreeNode | null {
        // Base case: invalid range
        if (left > right) return null;
        
        // Choose middle element as root to maintain balance
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);
        
        return root;
    }
    
    return buildBST(0, nums.length - 1);
}

// Helper function to print tree in level order (for testing)
function printLevelOrder(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        
        if (node === null) {
            result.push(null);
        } else {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    // Remove trailing nulls for cleaner output
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }
    
    return result;
}

// Test cases
console.log("Test Case 1:");
const nums1 = [-10, -3, 0, 5, 9];
const result1 = sortedArrayToBST(nums1);
console.log("Input:", nums1);
console.log("Output:", printLevelOrder(result1));

console.log("\nTest Case 2:");
const nums2 = [1, 3];
const result2 = sortedArrayToBST(nums2);
console.log("Input:", nums2);
console.log("Output:", printLevelOrder(result2));

console.log("\nTest Case 3:");
const nums3 = [1];
const result3 = sortedArrayToBST(nums3);
console.log("Input:", nums3);
console.log("Output:", printLevelOrder(result3));

// Verify BST property and balance
function isBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}

function getHeight(root: TreeNode | null): number {
    if (!root) return 0;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    return Math.abs(leftHeight - rightHeight) <= 1 && 
           isBalanced(root.left) && 
           isBalanced(root.right);
}

// Verify the results
console.log("\nVerification:");
console.log("Result 1 is BST:", isBST(result1));
console.log("Result 1 is balanced:", isBalanced(result1));
console.log("Result 2 is BST:", isBST(result2));
console.log("Result 2 is balanced:", isBalanced(result2));