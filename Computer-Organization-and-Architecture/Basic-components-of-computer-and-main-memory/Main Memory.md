---
pdf: 
module: 1
lecture: "2"
date: 2024-03-17T18:18:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/BasicComponents
---
# Main Memory

- Main memory is equally divided into small units called **cells**.
- Each cell is uniquely identified by a binary number called **address**.
- The representation of main memory is,
$$
\text{Number of cells} \times \text{size of each cell (bits)}
$$
- The capacity of the cell is decided when manufacturing the hardware.
- If there are $2^k$ cells(or locations or addresses), then minimum $k$ bits are required to uniquely identify each cell (or location or address).

> [!NOTE] 
> Addresses are not stored physically.

- Memory Address Register **MAR** is used to store the address to access the memory.
- If a memory has 8 bits in a cell, then the memory is called **byte-addressable**.
- **Word** Length is a property of CPU.
- **Word-addressable** memory is a memory in which each cell size is 1 word.

````col
```col-md
flexGrow=1
===
### Byte Addressable
![[Main Memory-20240317210126736.webp]]
```
```col-md
flexGrow=1
===
### Word Addressable
![[Main Memory-20240317210135659.webp]]
```
````
- Size of Address = Number of Address Lines

