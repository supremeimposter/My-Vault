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
- From the second level, the implementation of index is always sparse and primary.
- Innermost level is level `1` and the outermost level is the top level.
- Index level `1` is either primary or clustering or secondary index.
- Index level `k` is Primary index (sparse) on index level `k - 1`.
- In all the index levels, index record size is the same.

![[Multi Level Ordered Index-20231205194831963.webp]]

![[Multi Level Ordered Index-20231206163716795.webp]]

- Multi level indexing is better **choice** than binary search on single level.

> [!NOTE] 
> Multi level indexing is a choice and not a mandatory one.

- In case of secondary index for the first level which takes either record or block pointer, the higher levels will take only block pointers.
- If the 

> [!doubt] 
> Should the extra level of indirection from secondary index on non key be considered as a level in multi level ordered index?

## Indexed Sequential Access Method

- An **index sequential file** is nothing but an ordered file on an key or non key with multi level primary or clustering index. (Primary by default)
- Ordered file with multi level primary or clustered index.
## Examples

> [!example] 
> ![[Multi Level Ordered Index-20231206165816013.webp]]

![[Multi Level Ordered Index-20231206172109811.webp]]

![[Multi Level Ordered Index-20231206172141253.webp]]

![[Multi Level Ordered Index-20231206172205015.webp]]

- Levels of index = ${} 3$
- Size of data file = ${} 2000 {}$ blocks
- Size of index file = ${} 1 + 2 + 63 = 66 {}$ blocks

![[Multi Level Ordered Index-20231206172318743.webp]]
