---
pdf: Hashing
module: 
lecture: 21a, 21b, 21c
date: 2023-12-03T14:09:00
version:
  - DS-24
last-revision: 
notes-taken: false
tags:
  - DataStructures
  - DataStructures/Hashing
---
# Probing Strategies

## Linear Probing
> [!lecture] Lecture-21a

### Search and Deletion 
- A key cannot be directly deleted, it has to leave some marker, since it may pose as an empty location, but the truth is it got emptied after the deletion.
- Do not stop at marker or filled location, only stop at empty location or key is found.

> [!search] 
> Too many markers may increase the search time. It may require a different strategy for too many markers.
### Problems with Linear Probing
- Primary clusters is an issue in Linear Probing.

> [!discussion] Lecture-21a
> ![[Probing Strategies-20231203141813008.webp]]


## Quadratic Probing

$$
h(k, i) = (h'(k) + c_1\;i + c_2\;i^2) \; mod \;m,\;\;\; c_2 \not=0
$$

- For every collision, initially ${} i = 0 {}$.

### Problems with Quadratic Probing
- Secondary Clusters.
- If two keys have the same initial probe position, then their probe sequences are the same.
- Then there is no position for both of them, as it is open addressing.
![[Probing Strategies-20231203160400616.webp]]

- Quadratic probing may create a cycle. Even though, there are empty locations, you may not be able to see the cycles.
- Cycles can be carefully eliminated with the careful selection of ${} c_1, c_2, h(k) {}$.


## Double Hashing
- Double hashing solves the problem of secondary clustering.


# Possible Probes
> [!lecture] Lecture-21c

- In uniform hashing, ${} m! {}$ probes are possible.
- Linear and Quadratic probing both have $m$ probes.
- In double hashing, $m^2$ probes are possible.