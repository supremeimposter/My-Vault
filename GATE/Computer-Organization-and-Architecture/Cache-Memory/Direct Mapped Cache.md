---
pdf: 
module: 3
lecture: "1"
date: 2024-03-29T08:49:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/CacheMemory
---
# Direct Mapped Cache

- Each main memory address maps to exactly one cache block.
- Block $j$ of main memory is mapped to $j \text{ mod } n$ of the cache, if the cache has $n$ blocks or lines.
- At any time, there are at-most $n$ blocks in cache memory.

> [!doubt] 
> - The main memory block size is same as cache memory block size.

- Blocks are fixed for each cache in direct mapped cache.
$$
\text{Cache line} = \text{(Main memory Block)} \,\%\, \text{(Number of cache lines)}
$$

> [!template] Approach 1
> The main memory has 16 blocks and the cache memory has 4 lines
> Assume the block size is 1 byte
> 
> ![[Direct Mapped Cache-20240804100335019.webp]]
> 
> If Block 1 is in cache memory, it will be replaced by Block 5 or 9 or 13. 
> 
> If Block 2 is in cache memory, it will be replaced by Block 6 or 10 or 14.
> 
>> Block $x$ in main memory will go to line $x\, \% \,4$ of cache memory

- Because of temporal locality, a particular set of memory blocks at random spots in the main memory is going to be used again and again. So **approach 1** is better.
- At a particular time, the set of memory blocks at random spots will be available in the cache memory.
- Nearby memory blocks go to different cache lines.

![[Direct Mapped Cache-20240329143036833.webp|Approach 1]]

- **Approach 2** : Consecutive blocks of memory are considered as a unit and mapped to the cache memory.

![[Direct Mapped Cache-20240804105937742.webp|Approach 2]]

A block of main memory contains a particular number of bytes.
$$
\text{Address in main memory} = \text{Block Size} \ast \text{Block Number} + \text{Byte Number} 
$$

> [!doubt] 
> ![[Direct Mapped Cache-20240804120443468.webp]]
> 
> Number of blocks = 4
> Block size = 4 bytes
> Address of 10th bytes = $(4 * 4) + 2$

- **Tag** is the ratio of size between main memory and cache memory.
- If $t$ is the number of bits for tag, 
$$
\text{Size of main memory} = 2^{\text{t}} \ast \text{Size of cache memory}
$$

The physical address is divided into 3 components,
1. Tag
2. Index (line number)
3. Block offset

![[Direct Mapped Cache-20240329213143159.webp]]

![[Direct Mapped Cache-20240804132250237.webp]]


---