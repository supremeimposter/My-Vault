---
pdf: 
module: 3
lecture: "3"
date: 2024-03-29T22:26:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/CacheMemory
---
# Set Associative Cache

- In set associative, a block can be placed anywhere within a set of locations in the cache.

- In set associative, if a set has $n$ lines, then the cache is $n$-way associative.
- [[Direct Mapped Cache|Direct mapped cache]] is 1-way set associative. Number of sets is same as number of blocks in direct mapped cache.

$$
\text{Number of sets in cache} = \frac{\text{Number of lines in cache}}{\text{Number of lines in a set}}
$$

$$
\text{Set Number} = {\text{Block Number}} \;\%\;  {\text{Number of sets in cache}}
$$

$$
\text{Line Number} = {\text{Block Number}} \;\%\;  {\text{Number of Lines in cache}}
$$

$$\text{Number of lines} = \frac{\text{Cache size}}{\text{Block size}}$$

---
# Associative Cache

- There are no index bits in fully associative cache memory.
- Block number is same as tag bits.

![[Associative Cache-20240824125344029.webp]]

Direct-mapped = 1 way associative
As the associativity increases, the tag bits also increases. 

![[Associative Cache-20240824125509899.webp]]

In any cache mapping, only a block in main memory is mapped to a block in cache memory. Associativity plays no role in mapping a block.


> Finding out tag for associative cache is different from direct mapped cache.


