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
- The cost of each node in the tree is function on $n$ at that level i.e. $f(n)$ 

## Polynomial comparison
> [!lecture] Lecture-4.a
- The polynomially greater or smaller comparison is based on terms of $n$ 
- After cancelling out the common terms, if there is some polynomial still remaining, then it can be polynomial-ly greater or smaller.
- Transitivity can be applied if you are not sure about polynomial comparison for a given scenario.
- After cancelling out the common terms, if there is no polynomial terms left, then it cannot be polynomially compared.

> [!intuition] At least one of the sides must have the term $n$ for comparison
> If one of the sides has only $log n$ and the other has $1$, then also comparison CANNOT be made.

- Masters theorem CANNOT be applied if polynomial comparison cannot be made.


## Proof of Masters Theorem
> [!lecture] Lecture-4.c



> [!intuition] Understanding of GP is the core of masters theorem.


# Generalised Masters theorem

> [!lecture] Lecture-5.a

- This is the case when polynomial comparison CANNOT be made.