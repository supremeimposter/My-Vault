---
pdf: mod-1
module: 1
lecture: 4.a, 4.b, 4.c
date: 2023-10-23T08:45:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - ALGO
  - ALGO/Recursion
---
# Masters Theorem
> [!lecture] Lecture-4.a-4.c

- The recurrence relation of the following format can be solved by Masters theorem.
$$
T(n) = aT \bigg( \frac{n}{b} \bigg) + f(n)
$$
- The cost of each node in the tree is $f(n)$ 

## Polynomial comparison

> [!lecture] Lecture-4.a
- The polynomially greater or smaller comparison is based on terms of $n$.
- After cancelling out the common terms, if there is some polynomial still remaining, then it can be polynomial-ly greater or smaller.
- After cancelling out the common terms, if there is no polynomial terms left, then it cannot be polynomially compared.

> [!intuition] At least one of the sides must have the term $n$ for comparison

- Masters theorem CANNOT be applied if polynomial comparison cannot be made.
- Transitivity can be applied when there polynomial comparison cannot be made.
