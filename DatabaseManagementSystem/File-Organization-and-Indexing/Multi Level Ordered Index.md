---
pdf: lec-9-10
module: 6
lecture: 9, 10
date: 2023-12-05T17:03:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Indexing
---
# Multi Level Ordered Index
> [!lecture] Lecture-9

- Consider the single level index as a data file, then keep creating levels of index files.
- In multi level index, the outermost level has 1 block by default.
- In the index file, the search keys are ordered and unique.
- From the second level, the implementation of index is always sparse.
- Innermost level is level `1` and the outermost level is the top level.
- Index level `1` is either primary or clustering or secondary index.
- Index level `k` is Primary index (sparse) on index level `k - 1`.
- In all the index levels, index record size is the same.

![[Multi Level Ordered Index-20231205194831963.webp]]

- Multi level indexing is better **choice** than binary search on single level.

> [!NOTE] 
> Multi level indexing is a choice and not a mandatory one.

- In case of secondary index for the first level which takes either record or block pointer, the higher levels will take block pointers.