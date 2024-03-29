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
- Block $j$ of main memory is mapped to $j \text{ mod } n$ of the cache, if the cache has $n$ blocks.

- Because of temportal locality, a particular set of memory blocks at random spots in the memory is going to be used again and again. So approach 1 is better.
- At a particular time, the set of memory blocks at random spots will be available in the cache memory.

![[Direct Mapped Cache-20240329143036833.webp|Approach 1]]


- Tag is the ratio of size between main memory and cache memory.
- If $t$ is the number of bits in the tag, 
$$
\text{size of main memory} = 2^{\text{t}} \cdot \text{size of cache memory}
$$

![[Direct Mapped Cache-20240329213143159.webp]]

- If the main memory address has $k$ bits, then the size of main memory is $2^k$ bytes.



