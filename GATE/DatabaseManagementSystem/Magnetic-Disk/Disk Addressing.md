---
pdf: lec-1-2
module: 5
lecture: "2"
date: 2023-11-29T14:51:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Disks
---
# Disk Addressing

> [!lecture] Lecture-2
>> [!youtube] [Magnetic Disk Addressing | CHS Addressing Vs LBA Sector Addressing | COA, DBMS - Deepak Poonia - YouTube](https://www.youtube.com/watch?v=5XzFAOJGHFI)

- The order in which the sectors are read from the disk has a tremendous effect on I/O performance.
- Sectors are the smallest unit that can be read or write. 
- Sectors are given addresses.
- Sectors are numbered from $0 {}$

![[Disk Structure and Performance-20231129130255654.webp]]

## Closeness of Sectors


## Types of Disk Addressing

1. Logical Block Addressing (LBA)
2. Cylinder Head Sector (CHS)

### CHS to LBA

LBA is an integer starting from the 0, denoting the sector number.
It can be calculated from CHS addressing.
If Sectors per cylinder is ${} n_c {}$ and sectors per track is ${} n_t {}$
$${} \langle c, h, s\rangle = c\;n_c + h\; n_t + s {}$$
### LBA to CHS




> [!summary] 

![[Disk Addressing-20231130161020169.webp]]

![[Disk Addressing-20231130161036855.webp]]

---