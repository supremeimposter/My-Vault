---
pdf: lec-1-6, lec-7-12
module: 7
lecture: 1, 2, 3, 11, 12
date: 2023-11-01T14:47:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/GroupTheory
---
# Abstract Algebra
Abstract Algebra is the study of abstract mathematical structures.

> [!important] 
> In Group theory, Proofs are important to solve the problems
> 1. **Apply the definitions**
> 2. **Multiply by the inverse on both sides**

## Algebraic Structure (AS)
> [!lecture] Lecture-3

$$
AS = (\text{base set}, \text{operations})
$$
- A non empty set with one or more closed operations is the Algebraic Structure.

- [[Lattice]]
- Boolean Algebra
- Ring
- Field
- Vector


## Algebraic Structure with single binary operation
- For a single base set, there is a single binary operation.
- There are certain [[Properties|properties]] of algebraic structures.

> [!doubt] 
> If the given set is closed under the binary operation, then it is an algebraic structure. No need to consider other properties such as associative, identity, etc...
>> Answer : Yes and it is Magma structure

### Classification of Algebraic Structures with single binary operation
> [!lecture] Lecture-11

![[Pasted image 20231102190449.png]]

- Magma (Groupoid)
- [[Semi-Group]]
- [[Monoid]]
- [[Group]]


> [!important] 
> The above structures are NOT guaranteed to be [[Properties#Commutative Property|commutative]].


- Every group is a Magma, but NOT every magma is a group.
- If any magma satisfies [[Properties#Commutative Property|commutative]] property, then it is called abelian magma.
- A magma may or may not satisfy associative property.


> [!discussion] Lecture-11 homework solutions
> ![[Pasted image 20231102183230.png]]


- Order of Algebraic Structure is the cardinality of the base set.
- Power of any element is defined if the structure holds true for associative property.

---