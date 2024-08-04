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
- In direct-mapped cache, each memory block maps to exactly one cache line.
- Block $j$ of main memory is mapped to $j \:\%\: n$ of the cache, if the cache has $n$ blocks.

- Blocks are fixed for each cache in direct mapped cache.

$$
\text{Cache block} = \text{(Main memory Block)} \,\%\, \text{(Number of cache block)}
$$

$$
\text{Number of cache blocks} = \frac{\text{Cache size}}{\text{Block size}}
$$

**Approach 1**:

> [!example] 
> The main memory has 16 blocks and the cache memory has 4 lines
> Assume the block size is 8 bytes
> 
> ![[Direct Mapped Cache-20240804201619398.webp]]
> 
> Block 0, 4,  8, 12 can be mapped only to Line 0
> Block 1, 5,  9, 13 can be mapped only to Line 1
> Block 2, 6, 10, 14 can be mapped only to Line 2
> Block 3, 7, 11, 15 can be mapped only to Line 3
> 
>> Block $x$ in main memory will go to line $x\, \% \,4$ of cache memory
>
> If Block 1 is in cache memory, it will be replaced by Block 5 or 9 or 13. 
> 
> If Block 2 is in cache memory, it will be replaced by Block 6 or 10 or 14.

- A particular set of memory blocks at random spots in the main memory is going to be used again and again i.e. temporal locality is achieved. So **approach 1** is better.
- At a particular time, the set of memory blocks at random spots will be available in the cache memory.
- Nearby memory blocks go to different cache lines.

![[Direct Mapped Cache-20240329143036833.webp|Approach 1]]

**Approach 2**: 

- Consecutive blocks of main memory are mapped to the cache memory.

![[Direct Mapped Cache-20240804225835567.webp|Approach 2]]

> Approach 1 is better.

A block of byte-addressable memory contains a number of bytes and each byte has an address.
$$
\text{Address of byte in main memory} = \text{Block Size} \ast \text{Block Number} + \text{Block Offset} 
$$

> [!example] 
> If the block size of a direct-mapped cache is 16 bytes and there are 64 blocks, then 
> 
> ![[Direct Mapped Cache-20240804152535537.webp|320]]

The block number for a given address (byte number) is,
$$
\text{Block Number} = \left\lfloor \,  \frac{\text{Byte Number}}{\text{Block size}}  \, \right\rfloor
$$

The address of the first byte in a block is the block address,
$$
\text{Block address} = \text{Block number} \ast \text{Block size}
$$

> [!example] 
> ![[Direct Mapped Cache-20240804120443468.webp]]
> 
> Number of blocks = 4
> Block size = 4 bytes
> Block offset = 2
> 
> Address of $10^{\text{th}}$ byte = $(4 * 4) + 2 = 10$

**Tag** is the ratio of size between main memory and cache memory.
$$
\text{Tag} = \frac{\text{Size of main memory}}{\text{Size of cache memory}}
$$
If $t$ is the number of bits to represent tag in memory address, 
$$
\text{Size of main memory} = 2^{\text{t}} \ast \text{Size of cache memory}
$$
Tag uniquely identifies each block.

The physical address of a byte in main memory is divided into 3 components,
1. Tag (block number in main memory)
2. Index (line number in cache)
3. Block offset (position of byte in block)

![[Direct Mapped Cache-20240329213143159.webp]]

![[Direct Mapped Cache-20240804132250237.webp]]


---