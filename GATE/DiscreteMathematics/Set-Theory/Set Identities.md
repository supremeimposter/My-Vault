---
pdf: lec-10-12
module: 5
lecture: "11"
date: 2023-10-06T16:55:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DiscreteMath/Sets
  - MathematicalStructure
---
# Set Identities

> [!youtube] [Set Identities](https://www.youtube.com/watch?v=fN-5u7znwr0) - Lec-11

![[Set Identities-20240722104829443.webp]]
![[Set Identities-20240722113915595.webp]]

> [!NOTE] Precedence of Set operations
> () > NOT > AND > OR.

- Domination Law
	- $A \cup M = M$, $M$ is the dominator for the operation $\cup$.
	- $A \cap \phi = \phi$, $\phi$ is the dominator for the operation $\cap$.

| Operation            | Identity Element    |
| :------------------- | :------------------ |
| Union                | $\phi$              |
| Intersection         | Universal Set M     |
| Set Difference       | No identity element |
| Symmetric Difference | $\phi$              |
| Cross Product        | No identity element |

- Only $\cup$ and $\cap$ are idempotent.

> [!NOTE] Complementation law and Complement laws are different.

- Commutative
	1. Union
	2. Intersection
	3. Symmetric Difference

- Associative
	1. Union
	2. Intersection
	3. Symmetric Difference

- Absorption law can be interpreted quickly using venn diagram. It is only for $\cup$ and $\cap$ .
- De-Morgan's law of complement is for $\cup$,  $\cap$ and complements of sets only. It is used to find the complement of a given set expression.

> [!example] 
> ![[Set Identities-20240722124845931.webp]]

| [[Propositional Logic\|Propositional logic]] | Set Theory     |
| -------------------------------------------- | -------------- |
| T                                            | $\mathbb{U}$   |
| F                                            | $\phi$         |
| $\tilde{A}$                                  | $\overline{A}$ |
| $A \lor B$                                   | $A \cup B$     |
| $A \land B$                                  | $A \cap B$     |
| $A \oplus B$                                 | $A \Delta B$   |

---