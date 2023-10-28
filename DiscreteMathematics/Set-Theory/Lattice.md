---
pdf: lec-41, lec-44, lec-45-46, lec-48, lec-49
module: 5
lecture: 41, 44, 45, 48, 49, 53, 54
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
- A POSET of $n$ elements costs $n^2$ comparison to find out whether it is a lattice or NOT. But comparable elements does not have to be checked as they always have both LUB and GLB.
- It is enough to check only for non-comparable pairs of elements to verify if a POSET is a lattice, so the definition can be shortened down to, 
	- A lattice is a POSET in which any two non-comparable elements $a, b$ have both LUB and GLB.
- In a lattice $L$, any element $x, y \in L$ and $x R y$ then $x R (x \lor y)$ and $(x \land y) R x$ . 

> [!convention] 
> If $L$ is said to be a lattice, there is a relationship $R$ fixed to it.
> If $L$ is a lattice, then it means $(L, R)$ is a poset any subset of it is also a lattice and a poset under the same relation $R$.

- A lattice does NOT necessarily need to have greatest and least element ^1c02c6
	- Example : $(\mathbb{Z}, \le)$ is lattice but has no greatest and least element.

---
> [!lecture] Lecture-49

- In any lattice $L$, for any two different elements, there can be only two cases
	- case 1: $a, b$ are comparable
	- case 2: $a, b$ are NOT comparable
- In any lattice $L$, regardless of the above two cases, there are some common relations
	- $a \;R\; (a \lor b)$ and $b\; R \;(a \lor b)$
	- $(a \land b) \;R\; a$ and $(a \land b) \;R\; b$
	- $(a \land b) \;R\; (a \lor b)$

![[Pasted image 20231028124858.png]]


> [!conflict] 
> **Is a single element POSET a lattice?**
> It is author dependent. We will consider that a single element POSET is a latice.


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
> [!lecture] Lecture-53
>> [!youtube] [Identity Property in Lattices | Domination Law | Bounded Lattice | Set Theory | Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=HBAZEv2Lj00)

- In any lattice $L$, identity element for,
	- GLB is Greatest element
	- LUB is Least element

#### Domination
- In any lattice $L$, dominator for
	- GLB is Least element
	- LUB is Greatest element

#### Complement
- An element $b$ is the complement of an element $a$ or vice versa iff $a \lor b = G$ and $a \land b = L$.
- This is possible only if a lattice is [[Types of Lattices#Bounded Lattice|bounded]]. 
- Complement may not exist for all elements.
- There can be one or more complements for an element.
- In a bounded lattice, ${L}^\complement = G$ and ${G}^\complement = L$
#### Distributive
$$
\begin{align} \\
a \lor (b \land c) = (a \lor b) \land (a \lor c)\\
a \land (b \lor c) = (a \land b) \lor (a \land c)
\end{align}
$$

#### De-Morgan


---

## Sub-Lattice

> [!lecture] Lecture-45

- A sub-lattice is a non-empty subset of a lattice $L$ which is also a lattice and it has the same meet and join operations as $L$.
- A sub-lattice of a lattice $L$ is,
	- a lattice
	- a subset of lattice $L$
	- contains the same LUB and GLB for two elements as in $L$

> [!think] 
> Even if a subset of a lattice $L$ is again a lattice, but it need NOT be a sub-lattice $L$.
> ![[Pasted image 20231026190045.png|Example]]

> [!tip] 
> - If a subset $S$ of a lattice $L$ contains only comparable elements from the lattice $L$, then it is guaranteed to form a sub-lattice of $L$.
> - Because two comparable elements definitely has a GLB and LUB.


## Elements in a Lattice

> [!lecture] Lecture-48
>> [!youtube] [Lecture 48 - Questions - Maximal, Greatest Elements in a Lattice | Set Theory | Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=yqHGdWzeGeE)


----



