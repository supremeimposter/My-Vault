---
pdf: lec-11-15
module: 6
lecture: 11, 12, 13, 14, 15
date: 2023-12-06T22:18:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Indexing
---
# B Tree

- Order is the maximum number of block pointers.
- All nodes have the same structure and same size.

> [!attention] 
> The concept of **order** is the same but take the definition of order as per the given question.

## Rules of a B Tree of order p

1. Obvious search tree rules
2. All leaves must be on the same level
3. Space utilization rule - more than 50% utilization
4. B Tree node structure - All nodes have same structure
	1. Non-leaf node structure
	2. Leaf node structure

- Immediate predecessor of every key of non leaf node is always in a leaf.
- Immediate successor of every key of non leaf node is always in a leaf.
- Immediate predecessor or immediate successor of every key of leaf node is always in a leaf.

$$
\text{Number of leaf nodes} = 1 + \text{Number of keys in non leaf nodes}
$$

![[B Tree-20231207205757961.webp|Structure of a B Tree node]]

## Number of Block Pointers and Keys

For a B Tree of order ${} p$, 
1. Number of block pointers
	1. Root node : $2$ to $p$ 
	2. Non-root nodes : ${} \lceil \frac{p}{2} \rceil {}$ to $p$
2. Number of keys
	1. Root node : ${} 1 {}$ to ${} p - 1 {}$ 
	2. Non-root nodes : ${} \lceil \frac{p}{2} \rceil - 1 {}$ to ${} p - 1 {}$

- Order of B Tree is always ${} \ge 2 {}$.


## Search Algorithm

- The levels are reduced, but within a node or block, search occurs.
- Every unsuccessful search goes till the leaf level.
- Search time complexity - ${} \mathcal{O}(log_2 \;n)$, $n$ is the number of keys.

## Insertion

- In B tree, insertion always starts at the leaf node.

### Odd Order Tree
- when leaf is not full, then insert in sorted order.
- when leaf node is full but parent is not full, then split the leaf and put the middle element in the parent.
- when leaf node is full and parent node is also full, then split the parent node and put the middle element in its parent.

### Even Order Tree

- Right-biased
- Left-biased


> [!question] Does the order of insertion of keys matter?
> With the same set of keys, different B trees of varied heights can be obtained by changing the *order-of-insertion* of keys.

- In B trees, insertion can cause split from leaf to root.


