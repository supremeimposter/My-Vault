---
pdf: lec-16, lec-17-19
module: 6
lecture: 16, 17, 18, 19
date: 2023-12-08T14:14:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Indexing
---
# B+ Tree

- In B+ trees, there are no data pointers (record pointer for the keys) in the non-leaf nodes.
- All of the keys are in the leaf nodes and some are in the non-leaf node.
- The non-leaf nodes have only block pointers and NO data pointers.
- All data pointers are in the leaf nodes.
- Every leaf node has only one block pointer to point to the next leaf node on the right side.
- There are repetition of keys in B+ trees, but not in B trees.
- Duplication does not occur at the non-leaf nodes.
- The internal nodes in B+ trees are only for searching purposes.

![[B+ Tree-20231208150329093.webp]]

- In right-biased B+ trees, the key in the non-leaf node is found by going on the right side of the node.

- The duplicate of a key in the non-leaf node is its immediate successor in the leaf node.

$$
\text{Number of leaf nodes} = 1 + \text{Number of keys in non leaf nodes}
$$
^noderel

![[B+ Tree-20231208151220349.webp]]
![[B+ Tree-20231208155433296.webp]]

- Order of a B+ Tree is the maximum number of total pointers per node.

> [!question] Does the order of insertion of keys matter?
> With the same set of keys, different B+ trees of varied heights can be obtained by changing the *order-of-insertion* of keys.

## Rules of B+ Trees

- Right-biased is by default in searching.

## Structure of Nodes

- In B+ trees, the leaf node structure is different from internal nodes structure.


## Order of Leaf and Internal Nodes

- If the block size is fixed (order is not fixed), the order of leaf node and internal nodes is different.


- If B+ tree have an order ${} p$, then all nodes have an order $p {}$. Internal nodes are not utilized completely since size of record pointers is larger than that of block pointers.

![[File Organization#^458978]]

## Search in B+ Tree

- In B+ trees, the search will always go from root till the leaf node.

```nomnoml
[Search in B+ Tree] --> [Equality Search
k = 10]
[Search in B+ Tree] --> [Range Search
30 ≤ k ≤ 50]
```

- Range search fetches the keys between the given range. Exact end points need not be present.

## Insertion Algorithm

- Insertion of B+ tree is similar to the [[B Tree#Insertion|insertion of B Tree]] except for the splitting of leaf node.

> [!remember] 
> In a B+ tree, every key must be present in the leaf nodes.
> No key must repeat among the internal nodes.

![[B+ Tree-20231208225053941.webp|Right-biased Insertion Algorithm]]

![[B+ Tree#^noderel]]