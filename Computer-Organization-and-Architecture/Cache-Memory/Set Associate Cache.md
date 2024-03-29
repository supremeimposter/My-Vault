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
# Set Associate Cache

- In set associative, a block can be placed anywhere within a set of locations in the cache.

- In set associative, if a set has $n$ lines, then the cache is $n$-way associative.
- [[Direct Mapped Cache|Direct mapped cache]] is 1-way set associative.


$$
\text{Number of sets in cache} = \frac{\text{Number of lines in cache}}{\text{Number of lines in a set}}
$$

$$
\text{Set Number} = {\text{Block Number}} \;\%\;  {\text{Number of sets in cache}}
$$

$$
\text{Line Number} = {\text{Block Number}} \;\%\;  {\text{Number of Lines in cache}}
$$



> [!timer] 01:02:00
