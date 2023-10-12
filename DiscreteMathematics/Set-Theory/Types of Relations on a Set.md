---
pdf: lec-18-21, lec-22-23, lec-24-26, lec-27, lec-29
module: 5
lecture: 20, 21, 22, 23, 24, 25, 26, 27, 29
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
- It is the combination of [[Types of Relations on a Set#Ir-reflexive Relation|ir-reflexive relation]] and [[Types of Relations on a Set#Anti-Symmetric Relation|anti-symmetric relation]].
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
> Take $a R b$ and $b R c$ and then check if $a R c$


## Non-Transitive Relation


----

# Equivalence Relation

> [!lecture] Lecture - 27

- A relation $R$ is equivalent iff $R$ is reflexive, symmetric and transitive.

> [!remember] Equivalent Relation iff it satisfies RST.
> Equivalence relation is important in every subject.

## Analysis of Equivalence Relation

> [!lecture] Lecture - 29

- Equivalent relation [[Partition of a Set|partitiones]] a set. If $R$ is an equivalent relation on the set $S$, then $R$ partitions the set $S$. Each partition is called an equivalence class.

### Equivalence Class
- In an equivalent relation $R$ Equivalence class $[x]_R$ for an element $x \in S$, 
$$
[x]_R = \{y \; | \; xRy\}
$$
- The equivalence class of a member of $[x]_R$ is same as $[x]_R$ i.e. $[y]_R = [x]_R$
- Equivalence classes are [[Partition of a Set|partitions]] of a set $S$.

> [!intuition] Equivalence class is NOT relation on $A$
> Equivalence class is a set containing relations, but NOT all the relations on $A$ as per $R$'s definition.

- In an equivalence class, every element in related to every other element which is represented as $a \sim b$
- For an equivalence class $[x]_R$ , if $|\;[x]_R\;| = k$ , then it produces $k^2$ relations in $R$.
- If $E_i = [x_i]_R$ is an equivalence class, then $|R| = \Sigma \; \lvert E_i\lvert ^2$
$$
R = (E_1 \times E_1)\; \cup \; (E_2 \times E_2) \; \cup \; \ldots \; \cup (E_k \times E_k)
$$
$$
\lvert R \lvert = \lvert (E_1 \times E_1) \lvert \; \cup \; \lvert (E_2 \times E_2) \lvert \; \cup \; \ldots \; \cup \lvert (E_k \times E_k) \lvert
$$

### [[Relations#Universal and Empty relation|Universal Relation]] on $A$ is Equivalent
- Universal relation $R_{universal}$ on $A$ i.e. set of all relations possible on the set $A$ is, 
	- Reflexive
	- Symmetric
	- Not anti-symmetric
		- Anti-symmetric only if $|A| = 1$
	- Not Asymmetric (Not Ir-reflexive)
	- Transitive
- $R_{universal}$ is an equivalent relation on $A$.
- $R_{universal}$ creates only a single partition on $A$. 
- There is only one equivalence class if $R_{universal}$ on $A$.

### Identity Relation on $A$ is Equivalent
- Identity relation $R_{identity}$ on set $A$ contains only self-loop relations on the set $A$. i.e. only diagonal elements in the matrix representation.
- If the set $|A| = n$ Identity relation $R_{identity}$ on set $A$ partitions the set $A$ into `n` partitions.
- $R_{identity}$ creates $n$ equivalent classes. 

