class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  // Creating a sample tree
  const root = new TreeNode('Root');
  
  const child1 = new TreeNode('Child 1');
  const child2 = new TreeNode('Child 2');
  const child3 = new TreeNode('Child 3');
  
  const grandchild1 = new TreeNode('Grandchild 1');
  const grandchild2 = new TreeNode('Grandchild 2');
  
  root.addChild(child1);
  root.addChild(child2);
  root.addChild(child3);
  
  child1.addChild(grandchild1);
  child2.addChild(grandchild2);
  
  console.log(root);
  