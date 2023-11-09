---
pdf: lec-13-18, lec-24
module: 7
lecture: 13, 24, 29
date: 2023-11-02T21:58:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/GroupTheory
  - DM/GroupTheory/AlgebraicStructure
---
# Monoid
- A semi-group with identity element.
- In a monoid, there is NO left and right cancellation property.
- Any element $a \in S$, then $a = a \star e = e \star a$

## Power of an element in a Monoid
- For a monoid $(M, \star)$,  $\forall a \in M$
	- $a^0 = e$
	- $a^n = a^{n - 1} \star a, \; \text{ for } n \ge 1$
- Monoid elements cannot have negative powers, since there is no inverse in monoid.

## Analysis of some monoids

### Multiplicative Modulo n

> [!lecture] Lecture-29
>>[!youtube] [Lecture 29 - Multiplication Modulo n Group | Unit Group Un | Group Theory | Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=6tHH-6h9tvk)

$$
(Z_n = \{0, 1, 2, \ldots, n - 1\}, \otimes_n)
$$
- This structure is a commutative monoid.
- The elements that has the inverses are called units.

# Monoid VS [[Group]]
> [!lecture] Lecture-24


