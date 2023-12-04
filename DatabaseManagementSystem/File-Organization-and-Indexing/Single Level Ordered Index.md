---
pdf: lec-4-6, lec-7-8
module: 6
lecture: 5, 6, 7, 8
date: 2023-12-04T09:42:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Indexing
---
# Single Level Ordered Index

```nomnoml
[Single Level Ordered Index] -- [Primary Index]
[Single Level Ordered Index] -- [Clustering Index]
[Single Level Ordered Index] -- [Secondary Index]
```

## Primary Index
> [!lecture] Lecture-5

- If the data file is sorted on a key (candidate key) attribute ${} A$, then index on ${} A {}$ is called Primary Index. 
- Primary index cannot be created on a heap file.

> [!summary] 
> If the main data file is sorted on a candidate key and a index is created on that key, then it is called Primary Index.

- If a data file ${} R(A, B, C) {}$ is,
	- Ordered (sorted) by $A$, then it is called **ordering field**.
	- ${} A {}$ is the key, then it is a **key field**.
	- $A$ is the key and the file is ordered by $A$, then $A$ is **ordering key field** (OKF).

- There can be at most 1 ordering field at a time for a data file which means there can be only at most 1 primary index for a data file.

### Implementation

- In dense implementation, for every record, there is an entry in the index.
- If dense implementation is given, then record address or block address is taken. But if the question says record address, use the record address.

- Sparse implementation is suitable for primary index, as the keys are already in order.
- In sparse implementation, every entry in the index is a block anchor or the first record in that block.
- Primary index is sparse indexed.
- Number of index entries in primary index is equal to number of data blocks.

### Search Algorithm

- Binary search in blocks is more significant than the binary search in records.

---
## Clustering Index
> [!lecture] Lecture-6
>> [!youtube] [Clustering Index - Indexing & File Organization | DBMS | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=Wvc0o2eBgmI)

- If the main data file is sorted on a non key field and a index is created on that field, then it is called Clustering Index.
- Since the sorting non key field is not a key, it may have redundancies, so it leads to clusters based on the redundant entries of the non key field.
- Since the main data file is sorted on a non key field, so it is called a clustered file.
- For a data file, at most 1 clustering index can be created.
- Number of index entries = Number of clusters = Number of distinct search key values
- One index entry for every distinct search key value in Clustering index.

### Implementation

- The index entry contains block address of the first entry of the index search key.
- Clustering index is a sparse index.


---
## Secondary Index
> [!lecture] Lecture-7
