//depth-first-preorder traversal
//Visit the node
//Go to the left subtree
//Go to the right subtree

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function helper(root, res) {
    if (root === null)
        return

    res.push(root.val)
    helper(root.left, res)
    helper(root.right, res)
}

function preorder_traversal(root) {
    let result = []
    helper(root, result)
    return result
}


