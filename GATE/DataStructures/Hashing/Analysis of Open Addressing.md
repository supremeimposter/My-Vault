---
pdf: Hashing
module: 
lecture: 22a, 22b
date: 2023-12-03T17:01:00
version:
  - DS-24
last-revision: 
notes-taken: false
tags:
  - DataStructures
  - DataStructures/Hashing
---
# Analysis of Open Addressing with respect to Uniform Hashing

- In open addressing, ${} \alpha \le 1 {}$ since ${} n \le m {}$.
- The probability that a stand is occupied is ${} \alpha {}$

## Unsuccessful Search Time
P(hitting empty slot) = ${} 1 - \alpha$
Expected number of searches for unsuccessful search time = $\frac{1}{1 - \alpha} {}$

## Successful Search Time
The cost of a successful search is the same as an unsuccessful search at the time the key was added to the table.
