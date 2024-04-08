---
pdf: lec-51-52, lec-53-54, lec-55, lec-56-60
module: 5
lecture: 51, 52, 53, 54, 55, 56, 57, 58
date: 2023-10-28T14:14:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DiscreteMath
  - DiscreteMath/Sets/Lattices
---
# Types of Lattices
> [!lecture] Lecture-51

- There are special types of lattices based on whether they satisfy some properties. Not every lattice satisfy these properties.
![[Lattice#Properties satisfied by some lattices]]

1. Bounded Lattices - Lattices that satisfy Identity and Domination property
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

- A lattice is called a complemented lattice iff every element in a bounded lattice has at least one complement. ^8eea52
- Every complemented lattice is a bounded lattice as complemented lattices are defined on bounded lattices.

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
- Since all elements must satisfy the distributivity, every three elements must be checked for distributivity. It will be a lot of work to check for distributivity.

> [!NOTE] 
> - These two theorems are found in research papers only.
> - Proof for theorem I is very complicated and for theorem II is very boring. It is not required.
> - Theorem I is a bi-implication and Theorem II is an implication.

### Theorem I
- If a lattice $L$ has a sub-lattice which is either Pentagon or Kite, then the lattice $L$ is not distributive.
- A lattice $L$ is distributive iff there is no sub-lattice of $L$ which is either Pentagon or Kite.
- If a lattice $L$ if it has at most $4$ elements, then is it definitely distributive i.e. $\mid L \mid \le 4$ since pentagon and kite has 5 elements.
- Every lattice other than exactly kite or pentagon are distributive.
- Every total order is distributive since no pentagon or kite can be formed in a chain.

### Theorem II
- If $L$ is a distributive lattice, then there at most one complement ($\le 1$) for every element. (the converse is NOT true) ^f645f5
- If a lattice $L$ has more than one complement for some element ($\gt 1$), then it is NOT a distributive lattice (contra-positive). 

> [!tip] 
> **When trying to figure out whether a lattice is distributive or not**
> - See if any element has more than one complement to prove it is not distributive 
> - Then go for looking for the pentagon or kite sub-lattice.

## Distributed Complemented Lattice

![[Types of Lattices#^f645f5]]
![[Types of Lattices#^8eea52]]
- If a lattice $L$ is a distributive complemented lattice, then every element has exactly one complement. (implication)

> [!tip]
> Not complemented does NOT mean not distributive.

---
## Boolean Lattice or Boolean Algebra
> [!lecture] Lecture-57

- A boolean lattice is a distributed complemented lattice
- A boolean lattice is bounded, distributive and complemented.
- Only boolean lattices satisfy De-Morgan's property.

### Theorem I
- Every Boolean Algebra has the same structure as $(\mathcal{P}(A), \subseteq)$ structure for some set $A$.
- Every Boolean Algebra has $2^n$ elements $n \ge 0$. But if a lattice has $2^n$ elements it does NOT mean it is a Boolean Algebra.

### Why the name "Boolean Algebra"?
> [!lecture] Lecture-58
- If any mathematical structure satisfies all the properties, then it is called **Boolean Algebra**.
	- Commutative
	- Associative
	- Distributive
	- Identity
	- Idempotent
	- Complement
	- De-Morgans'

---
