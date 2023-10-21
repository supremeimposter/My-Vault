---
pdf: lec-33, lec-34-36
module: 5
lecture: 33, 34
date: 2023-10-18T20:51:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---

# Set Ordering

- Partial Order Relation and Total Order Relation are also one of the [[Types of Relations on a Set|types of relations on a set]].
- A relation $R$ on a set $A$ can be either partial order or total order, depending on the elements of the base set $A$.

> [!example] $(A, \mid)$
> 1. If $A = \{1, 2, 4, 8\}$, then $(A, \mid)$ is a total order relation
> 2. If $A = \mathbb{N}$, then $(A, \mid)$ is a partial order relation


## Partial Order Relation (POR)

> [!lecture] Lecture-33
> > [!youtube] [Lecture 33 - Partial Order Relations - Motivation & Definition | Set Theory | Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=CTnuuIQ3l7k)


- A relation $R$ is a Partial Order Relation iff $R$ is Reflexive, Anti-symmetric and Transitive.


> [!link] Why does a partially ordered set need to be reflexive?
> [relations - Why does a partially ordered set need to be reflexive? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2895169/why-does-a-partially-ordered-set-need-to-be-reflexive)
> ![[Pasted image 20231018222252.png|lec-33 comments section]]

---

## Total Order Relation

> [!lecture] Lecture-34

- A relation $R$ is total order relation if we have relation between every pair of elements in the set $A$ i.e. every two elements are comparable.
$$
\forall_{x, y \; \in A} \; (xRy \; \lor \; yRx)
$$
- If a relation is total order, then it is also partial order.
- If a relation is NOT partial order, then it is definitely NOT total order.

---
## Representation

- [[Hasse Diagram of POR]]
- [[Hasse Diagram of TOR]]

---
