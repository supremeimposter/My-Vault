---
pdf: lec-51-52, lec-53-54, lec-55
module: 5
lecture: 51, 52, 53, 54, 55
date: 2023-10-28T14:14:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/Sets/Lattices
---
# Types of Lattices
> [!lecture] Lecture-51

- There are special types of lattices based on whether they satisfy some properties. Not every lattice satisfy these properties.
![[Lattice#Properties satisfied by some lattices]]

1. Bounded Lattices - Lattices that satisfy Identity property
2. Distributive Lattice - Lattices that satisfy Distributive property
3. Complemented Lattice - Lattices that satisfy Complement Property
4. Boolean Lattice - Lattices that satisfy all of the above properties

---
## Bounded Lattice
> [!lecture] Lecture-52

- A lattice that has one greatest element and one least element. 
### Why every lattice is not bounded?
![[Lattice#^1c02c6]]
- Every finite lattice has a greatest and least element. So every finite lattice is a bounded lattice.
- In a bounded lattice, Greatest element can be represented by `1` and the least element can be represented by `0`.
- Bounded lattice has identity element for both LUB and GLB.
- Bounded lattice has dominator for both LUB and GLB.

---

## Complemented Lattice 

> [!lecture] Lecture-54

- A lattice is called a complemented lattice iff every element in a bounded lattice has a complement.
![[Lattice#Complement]]

- If $a\;R\;b$ and $a \not= L$ and $b \not= G$, then $a$ and $b$ are not complement of each other.
- A TOSET $T$ can be a complemented lattice iff $\mid T \mid \le 2$.

> [!col]
>> [!col-md]
>> ![[Pasted image 20231028183707.png|$\mid T \mid \le 2$]] 
> 
>> [!col-md]
>> ![[Pasted image 20231028183824.png|$\mid T \mid \gt 2$]]

----

## Distributive Lattice
> [!lecture] Lecture-55

![[Lattice#Distributive]]
- A lattice is distributive iff it holds distributive for any three elements $a, b, c$ in the lattice.
- All elements must satisfy the distributivity. Every three elements must be checked for distributivity.
### Special Theorem (Proof not required)
- If a lattice $L$ has a sub-lattice which is either Pentagon or Kite, then the lattice $L$ is not distributive.
- A lattice $L$ is distributive iff there is no sub-lattice of $L$ which is either Pentagon or Kite.
- If a lattice $L$ if it has at most $4$ elements, then is it distributive i.e. $\mid L \mid \le 4$ since pentagon and kite has 5 elements.
- Every lattice other than exactly kite or pentagon are distributive.