// Challenge 2: Serialize / Deserialize Binary Tree
// Run: node 2_serialize_tree.js

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}

function serialize(root) {
  if (!root) return "null";
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
  const vals = data.split(",");
  let i = 0;
  function build() {
    if (vals[i] === "null") { i++; return null; }
    const node = new TreeNode(+vals[i++]);
    node.left  = build();
    node.right = build();
    return node;
  }
  return build();
}

// Test
const tree = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);
const s = serialize(tree);
console.log("Serialized:", s);
// Serialized: 1,2,null,null,3,4,null,null,5,null,null

const restored = deserialize(s);
console.log("Root:", restored.val);       // 1
console.log("Right:", restored.right.val); // 3
