---
pdf: lec-41, lec-44, lec-45-46
module: 5
lecture: 41, 44, 45
date: 2023-10-26T08:45:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/Sets/Lattices
---
# Lattice

> [!lecture] Lecture-41

- A lattice is a POSET in which any two elements $a, b$ have both LUB and GLB.
![[Hasse Diagram of POR#^d4c5bd]]
- A lattice is a POSET in which any two non-comparable elements $a, b$ have both LUB and GLB.

---

## Properties of Lattice

> [!lecture] Lecture-44

### Properties satisfied by every lattices
#### Idempotent

#### Commutative

#### Associative

#### Absorption


> [!cases] By-case cases
> case 1 : $aRb$
> case 2 : $bRa$
> case 3  : $a, b$ are not comparable

### Properties satisfied by some lattices
#### Identity 

#### Distributive


---

# Sub-Lattice

> [!lecture] Lecture-45

- A sub-lattice is a non-empty subset of a lattice $L$ which is also a lattice and it has the same meet and join operations as $L$.
- A sub-lattice of a lattice $L$ is,
	- a lattice
	- a subset of lattice $L$
	- contains the same LUB and GLB for two elements as in $L$

> [!think] 
> Even if a subset of a lattice is again a lattice, but it may NOT be a sub-lattice.
> ![[Pasted image 20231026190045.png|Example]]

> [!doubt] 
> - If a subset of a lattice contains only comparable elements, then it is guaranteed to form a sub-lattice.
> - Because two comparable elements definitely has a GLB and LUB.

