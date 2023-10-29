---
pdf: lec-33, lec-34-36, lec-56-60
module: 5
lecture: 33, 34, 59, 60
date: 2023-10-18T20:51:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
  - DM/Sets/Ordering
---

# Set Ordering

- Set is an unordered collection of elements.
- Relations can be used to order some or all of the elements of sets.

> [!example] 
> $R = x$ is a prerequisite of $y$
> The above relation on a set of courses gives an order of which course $x$ has to be completed before taking a course $y$
> Courses = $\{$DM, TOC, DBMS, EM$\}$

## Requirements of Ordering on a Set
- [[Reflexive Relation|Reflexive]] - An element must be related to itself
> [!link] Why does a partially ordered set need to be reflexive?
> [relations - Why does a partially ordered set need to be reflexive? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2895169/why-does-a-partially-ordered-set-need-to-be-reflexive)
> ![[Pasted image 20231018222252.png|lec-33 comments section]]

- [[Symmetric Relation#Anti-Symmetric Relation|Anti-Symmetric]] - We don't need a mutual relationship between two elements to impose ordering on a set. Mutual relationship will NOT define any ordering between two elements so [[Symmetric Relation|symmetric]] relationship is NOT desirable.
- [[Transitive Relation|Transitive]] - There should be transitive relationship between elements since an ordering has been imposed.

> [!summary] 
> - A binary relation on a set $S$ is called an ordered relation if it is Reflexive, Anti-Symmetric and Transitive.
> - The Ordered set is denoted as $(S, \preceq)$
> - Relationship between two elements in $S$ is denoted as $x \preceq y$ instead of $xRy$

## Types of Relations of Set Ordering

- Partial Order Relation and Total Order Relation are also one of the [[Types of Relations on a Set|types of relations on a set]].
- A relation $R$ on a set $A$ can be either partial order or total order, depending on the elements of the base set $A$.

> [!example] $(A, \mid)$
> 1. If $A = \{1, 2, 4, 8\}$, then $(A, \mid)$ is a total order relation
> 2. If $A = \mathbb{N}$, then $(A, \mid)$ is a partial order relation

---
### Partial Order Relation (POR)

> [!lecture] Lecture-33
> > [!youtube] [Lecture 33 - Partial Order Relations - Motivation & Definition | Set Theory | Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=CTnuuIQ3l7k)


- A relation $R$ is a Partial Order Relation iff $R$ is Reflexive, Anti-symmetric and Transitive.
- A set $S$ together with a partial ordering $R$ is called a **partially ordered set** or **POSET**.
- If $R$ on set $A$ is a POR then $(A, R)$ is called a POSET.
- Generally $\preceq$ is used to represent a POR instead of $R$ i.e $(A, \preceq)$ 

- For a non-empty base set $A$, Universal relation is POR iff $\mid A \mid \le 1$.
- Identity relation on a set $A$ is a POSET.

#### Comparable and Incomparable elements
- The elements $a$ and $b$ of a POSET are called **comparable** iff either $a \preceq b$ or $b \preceq a$ . 
- If neither $a \preceq b$ nor $b \preceq a$, then $a$ and $b$ are called **incomparable**.

> [!example] $(\{1, 2, 3, 4\}, \mid)$
> - $1, 3$ are comparable
> - $2, 3$ are incomparable

> [!example] $({3, 4, 5}, \mid)$
> - No two elements of the set are comparable.
> - This set is a POSET since there is NO violation of Anti-Symmetric and Transitive relation.

#### Examples

- $\le$  and $\ge$ on $\mathbb{Z}, \mathbb{N}, \mathbb{R}$ 
- $(\mathcal{P}(A), \supseteq)$ and $(\mathcal{P}(A), \subseteq)$ over a set $A$
- $(\mathbb{N}, \mid)$ and $(\mathbb{Z}^+, \mid)$

#### [[Hasse Diagram of POR|Hasse Diagram of Partial Order Relation]]

#### Deletion of Elements from POSET

> [!seealso] Deletion of elements from relation $POR$ set
> When elements of the $POR$ set is deleted, it is NOT guaranteed to be a POSET anymore.
> It is different from deletion of elements from the base set.

- When elements are deleted from a base POSET, the set is still a POSET.
- For a POSET $(A, R)$, any subset $B$ i.e. $B \subseteq A$ such that $(B, R)$ is also a POSET.

---

### Total Order Relation

> [!lecture] Lecture-34

- A relation $R$ is total order relation if we have ordering relation between every pair of elements in the set $A$ i.e. every two elements are comparable. 
- $R$ is total order or linear order. A totally ordered set is called a chain.
$$
\forall_{x, y \; \in A} \; (xRy \; \lor \; yRx)
$$

- If a relation is total order, then it is also partial order.
- If a relation is NOT partial order, then it is definitely NOT total order.
- Every TOSET is a [[Lattice|lattice]]. 
#### Examples
- $(\mathbb{Z}, \le)$ is a chain


#### [[Hasse Diagram of TOR|Hasse Diagram of Total Order Relation]]

#### Analysis on Total Order Relation
> [!lecture] Lecture-59-60

##### Finite VS Infinite TOSET as [[Lattice]]

````col
```col-md
flexGrow=1
===
###### Finite TOSET
Bounded
Complemented if $\le 2$ elements
Distributive
Boolean if $\le 2$ elements
```
```col-md
flexGrow=1
===
###### Infinite TOSET
May or may not be Bounded
Not complemented
Distributive
Not Boolean Algebra
```
````

---


