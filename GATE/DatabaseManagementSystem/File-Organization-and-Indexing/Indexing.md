---
pdf: lec-4-6
module: 6
lecture: 4, 11
date: 2023-12-02T18:16:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Indexing
---
# Index Structures
> [!lecture] Lecture-4

- Index is a data structure.
- Index is a separate file that is stored on the disk.

````col
```col-md
flexGrow=1
===
## Data File
- Data file or main file or indexed file or file
- Data file is not sorted based on index
- Blocks containing the main data records are called **Data Blocks** or Blocks
```
```col-md
flexGrow=1
===
## Index File
- Index file or Index
- Index is sorted based on index field value or search key
- Blocks containing the index records are called **Index Blocks** or index fan-out
```
````

- The main data file can be sorted by only one index field value, but all of the attributes can be used as index field values.
- When the data file is sorted by one index field value, then it becomes unsorted on another index field value.
- Sorting the data file is expensive, whereas sorting the index is NOT.
- There can be separate indexes based on each attribute.
- To gain fast random access to records in a file, we use an index structure.
- The records in the data file may or may not be sorted.
- Each index structure is associated with a particular search key.
- A file may have several indices, on different search keys.

```nomnoml
[Index] -- [Ordered Index(Static)]
[Index] -- [Tree Based Index(Dynamic)]
[Ordered Index(Static)] -- [Single Level Index]
[Ordered Index(Static)] -- [Multi Level Index]
[Tree Based Index(Dynamic)] -- [B Tree]
[Tree Based Index(Dynamic)] -- [B+ Tree]
```

- There is another type of index called the **Hash Index** which is based on the concept of [[Hashing]].
- Hash indexes may or may not be ordered.
- A relation can be physically stored on a disk either sequentially (sorted on some field) or unordered (heap file).
- There are two ways to implement index
```nomnoml
[Index
Implementation] -- [Sparse Index]
[Index] -- [Dense Index]
```
- By default, dense index requires record address. But either block or record address can be given.
- Only block address is used for sparse index.
- Blocking factor of index file is the number of index entries per block.


> [!faq] Can multi-attributes be used as search key in index?
> Yes. But only single attribute search keys are in standard resources. Mutli attribut search keys are complicated.

## Ordered Index
- In an ordered index file, index entries are stored sorted by the search key field.
- All the types of indexes are ordered, though the corresponding search key field may or may not ordered in the main data file.

```nomnoml
[Ordered Index] -- [Single Level Index]
[Ordered Index] -- [Multi Level Index]
[Single Level Index] -- [Primary Index]
[Single Level Index] -- [Clustering Index]
[Single Level Index] -- [Secondary Index]
```

- [[Single Level Ordered Index]]
- [[Multi Level Ordered Index]]

### Disadvantages of Ordered Index
> [!lecture] Lecture-10
- Issues arise when data file is modified.
- All the indexes may have to be changed for a little modification in the data file.
- Use ordered index only when the data file is almost static i.e. ordered indexes are called static indexes.

---
## Tree based Index
> [!lecture] Lecture-11

- Dynamic multi level tree based index.
- Modification is less costly.
- Lots of keys can be put together in a single node in Tree based indexes.

```nomnoml
[Tree Based Index] -- [B Tree]
[Tree Based Index] -- [B+ Tree]
```

> [!tip] 
> - Duplication of keys is NOT discussed in the standard books for B trees.
> - B and B+ trees are discussed in the data structure point of view not the implementation point of view.

### Disadvantages of In-memory data structures
> [!header] Why in-memory data structures are not suitable for disk data structures?

- In-memory data structures are not using the disk block space completely.
- In-memory tree data structures use all those space in the data block only for two pointers and a small node of data.
- They form many levels compared to B and B+ Trees leading to more I/O costs.

![[Indexing-20231206221432011.webp]]

### Obvious Rules of Search Trees

- B and B+ trees are multi way search trees.
- Height of a tree is the number of edges along a path.

### Design of Disk Data Structures
1. Minimize I/O access cost
2. Completely utilize the disk block space

- [[B Tree]] and [[B+ Tree]] addresses both of these issues with additional constraints on the search tree.

> [!convention] 
> - Block ${} \equiv {}$ Node
> - Block Pointer $\equiv$ Node pointer $\equiv$ Tree pointer ${} \equiv {}$ Child pointer ${} \equiv {}$ Index pointer
> - Record Pointer is just record pointer

