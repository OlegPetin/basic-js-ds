const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



// class BinarySearchTree {


//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {    
    return this.rootNode;
  }

  add( data ) {
   this.rootNode=addNode(this.rootNode, data);
   function addNode(node, data){
     if(!node){
       return new Node(data);
     }
     if(node.data===data){
       return node;
     }
     if(data < node.data){
       node.left = addNode(node.left, data);
     }
     else{
       node.right = addNode(node.right, data);
     }
     return node;
   }   
  }

  has( data ) {
    return searchNode(this.rootNode, data);
    
    function searchNode(node, data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      if(data < node.data){
        return searchNode(node.left, data);
      }
      else{
        return searchNode(node.right, data);
      }
    }    
  }

  find( data ) {
    return findNode(this.rootNode, data);

    function findNode(node, data){
      if(!node){
        return null;
      }
      if(node.data===data){
        return node;
      }
      if(data<node.data){
        return findNode(node.left, data);
      }
      else{
        return findNode(node.right, data);
      }
    }
  }

  remove( data ) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data){
      if(!node){
        return null;
      }
      if(data<node.data){
        node.left = removeNode(node.left,data);
        return node;
      }
      else if(data>node.data){
        node.right = removeNode(node.right,data);
        return node;
      }
      else{
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let minFromRight=node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right,minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.rootNode){
      return;
    }
    let node=this.rootNode;
    while(node.left){
      node=node.left;
    }
    return node.data;
  }

  max() {
    if(!this.rootNode){
      return;
    }
    let node=this.rootNode;
    while(node.right){
      node=node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};