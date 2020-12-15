//depth-first-inorder
//Go to the left subtree
//Visit node
//Go to the right subtree

class TreeNode {
    constructor(val = 0, left = none, right = none) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function inorder_traversal(root) {
    let result = []
    recurse(root, result)
    return result
}

function recurse(root, result) {
    if (root === null)
        return

    recurse(root.left, result)
    result.push(root.val)
    recurse(root.right, result)
}