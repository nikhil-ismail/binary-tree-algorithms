// Binary Tree Node Constructor
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const depthFirstSearchIterative = root => {
    if (root === null) return []
    const result = []
    const stack = [root]
    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return result
}

const depthFirstSearchRecursive = root => {
    if (root === null) return []
    const leftValues = depthFirstSearchRecursive(root.left)
    const rightValues = depthFirstSearchRecursive(root.right)
    return [root.val, ...leftValues, ...rightValues]
}

const breadthFirstSearch = root => {
    if (root === null) return []

    const result = []
    const queue = [root]

    while (queue.length > 0) {
        const current = queue.shift()
        result.push(current.val)

        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return result
}
