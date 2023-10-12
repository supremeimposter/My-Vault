---
pdf: lec-18-21, lec-22-23, lec-24-26, lec-27
module: 5
lecture: 20, 21, 22, 23, 24, 25, 26, 27
date: 2023-10-11T10:26:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM/Relations
  - DM
---

- These special types of relations are only for relations $R$ on a set $A$ i.e. $R : A \rightarrow A$
---
# Reflexive Relation

> [!lecture] Lecture-21
## Reflexive Relation
- A relation $R$ on a set $A$ is said to be reflexive iff all the elements of $A$ is related to itself.
$$
\forall x \in A\; (x \; R\; x)
$$

## Not Reflexive Relation
- Not reflexive is the negation of reflexive relation.
## Ir-reflexive Relation



> [!discussion] Empty base set
> ![[Pasted image 20231011121224.png]]

## Examples


---

# Symmetric Relation

> [!lecture] Lecture 22
## Symmetric Relation
- For two different elements, relationship must be bi-directional. They must be related to each other.
- Uni-directional edges is NOT allowed.
- It does NOT care about self-loops.

## Anti-Symmetric Relation
- Two different elements should NOT be related to **each other**.
- Bi-directional relationship is NOT allowed.
- It also does NOT care about self-loops.

> [!attention] If a relation is not symmetric, then it does NOT mean that the relation is anti-symmetric.

## Asymmetric Relation
- It is the combination of [[Special Types of Relations on a Set#Ir-reflexive Relation|ir-reflexive relation]] and [[Special Types of Relations on a Set#Anti-Symmetric Relation|anti-symmetric relation]].
- Self-loop is NOT allowed.
- Bi-directional relationship is NOT allowed

> [!intuition] If a relation is NOT anti-symmetric, then it is also not asymmetric.

## Comparison


## Examples

> [!youtube] [Q3 solution - Reflexive, Symmetric and Anti-Symmetric relation](https://www.youtube.com/watch?v=71ks9HH0osQ)
> Problems on Reflexive and Symmetric relations on a set.

- There is no relation which is both reflexive and asymmetric.
---

# Transitive Relation

> [!lecture] Lecture - 26

- In the given relation set, look at the elements front and back to see if they could or fail to form a transitive edge.

> [!intuition] To solve Transitive relation problems easily, use **graph representation** to avoid or not encounter the above analytical problem.

## Transitive Relation

> [!intuition] For checking transitive relation, take two relation ordered pairs rather than a single ordered pair as in the above relations.
> $a R b$ and $b R c$, then $a R c$


## Non-Transitive Relation


----

# Equivalence Relation

> [!lecture] Lecture - 27

- A relation $R$ is equivalent iff $R$ is reflexive, symmetric and transitive.

> [!remember] Equivalent Relation iff it satisfies RST.
> Equivalence relation is important in every subject.



