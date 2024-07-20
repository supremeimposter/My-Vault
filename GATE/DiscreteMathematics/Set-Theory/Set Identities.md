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

## Equality of Sets

If there are two sets $A, B$, then

$A = B$ iff $A \subseteq B$ and $B \subseteq A$ or we can put is like this
$A = B$ iff $\forall x\: \bigg(\,(x \in A) \to (x \in B) \land (x \in B) \to (x \in A)\,\bigg)$

To show that two sets are equal, it is necessary and sufficient to show that $A \subseteq B$ and $B \subseteq A$.

## Identity Elements for Set Operations

| Operation            | Identity Element    |     |
| :------------------- | :------------------ | --- |
| Union                | $\phi$              |     |
| Intersection         | Universal Set M     |     |
| Set Difference       | No identity element |     |
| Symmetric Difference | $\phi$              |     |
| Cross Product        | No identity element |     |

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
- De-Morgan's law of complement is for $\cup$,  $\cap$ and complements of sets only.

- Domination Law
	- $A \cup M = M$, $M$ is the dominator for the operation $\cup$.
	- $A \cap \phi = \phi$, $\phi$ is the dominator for the operation $\cap$.

## Comparison between Propositional Logic and Set Theory
