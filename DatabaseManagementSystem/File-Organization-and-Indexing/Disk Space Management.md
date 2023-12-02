---
pdf: lec-3
module: 6
lecture: "3"
date: 2023-12-02T11:04:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/FileOrganization
---
# Disk Space Management
> [!lecture] Lecture-3
>> [!youtube] [Free Disk Space Management - Bitmap, Free List | DBMS | OS | COA | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=658i1Se9a0g)


> [!question] Why reading a file consisting of many small size blocks is slow?


## Keep Track of Free Blocks
- To keep track of the free disk space, the system maintains a free-space list.
- There are two methods to keep track of the free blocks in the disk
	1. Bitmap (Bit vector) method
	2. Linked list method (Free list)

### Bit Map
- The bit map containing the information about the free space is stored in blocks and later stored in main memory during execution.
- A disk with n blocks requires a bit map with n bits.
	- Number of bits in bitmap = Number of blocks
- The free blocks are represented by the bit `1` and the occupied blocks are represented by the bit `0` or vice versa.
- The bit map contains bits in the order of the block number.
- Bit map does not store address.
- Block number if the bit map is given as sequence of words is 
	- (No of zero words from the beginning) ${} \ast {}$ (word size) + (offset of first non-zero word)

### Linked List (Free List)

<u>Approach 1</u>
- Create a linked list with each free block containing the address of the next free block and the main memory has the address of the first free block.
- But the space of the blocks is not used.


<u>Approach 2</u>



> [!important] Advantage of Free List over Bit Map

- When there are only few free blocks, then Bit Map will take more blocks than the linked list.
- Free list only uses blocks if it needs, but Bit Map will always use the allocated blocks even if the disk is nearly full.


> [!cases] File Creation and Deletion

