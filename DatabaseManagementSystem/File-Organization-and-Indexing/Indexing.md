---
pdf: lec-4-6
module: 6
lecture: "4"
date: 2023-12-02T18:16:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
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
```
```col-md
flexGrow=1
===
## Index File
- Index file or Index
- Index is sorted based on index field value or search key
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

- There is another type of index called the **Hash Index** which is based on the concept of [[hashing]].
- A relation can be physically stored on a disk either sequentially (sorted on some field) or unordered (heap file).
- There are two types of index implementation
```nomnoml
[Index
Implementation] -- [Sparse Index]
[Index] -- [Dense Index]
```

- Blocking factor of index file is the number of index entries per block.
## Ordered Index
- In an ordered index file, index entries are stored sorted by the search key value.
- The main data file is physically stored [[File Organization#Sequential File Organization|sequentially]].