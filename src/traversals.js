//depth-first-preorder traversal iteratively

function iter_dft(root) {
    let stack = []
    let result = []

    stack.push(root)

    while (stack.length > 0) {
        let current = stack.pop()
        if (current.right !== null)
            stack.push(current.right)

        if (current.left !== null)
            stack.push(current.left)

        result.push(current.value)
    }

    return result
}

//breadth-first traversal

function bft(root) {
    let queue = []
    let result = []

    queue.push(root)

    while (queue.length > 0) {
        let current = queue.shift()
        result.push(current.value)

        if (current.left !== null)
            queue.push(current.left)

        if (current.right !== null)
            queue.push(current.right)
    }

    return result
}



