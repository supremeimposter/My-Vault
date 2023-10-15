---
pdf: lec-27, lec-29
module: 5
lecture: 27, 29
date: 2023-10-15T15:42:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---
# Equivalence Relation

> [!lecture] Lecture - 27

- A relation $R$ is equivalent iff $R$ is Reflexive, Symmetric and Transitive.

> [!remember] Equivalent Relation iff it satisfies RST.
> Equivalence relation is important in every subject.

> [!pdf] Lec-27 Pg. No. 4-15
> Problems


> [!example] ![[Pasted image 20231015161528.png]]
> ![[Pasted image 20231015161546.png]]


## Analysis of Equivalence Relation

> [!lecture] Lecture - 29

- Equivalent relation [[Partition of a Set|partitions]] a set. If $R$ is an equivalent relation on the set $S$, then $R$ partitions the set $S$. 
- Each partition is called an equivalence class and every equivalent relation creates unique partitions i.e. unique equivalence classes.

### Equivalence Class
- In an equivalent relation $R$ Equivalence class $[x]_R$ for an element $x \in S$, 
$$
[x]_R = \{y \; | \; xRy\}
$$
- The equivalence class of a member of $[x]_R$ is same as $[x]_R$ i.e. $[y]_R = [x]_R$
- Equivalence classes are [[Partition of a Set|partitions]] of a set $S$ i.e. Each equivalence class is unique.

> [!intuition] Equivalence class is NOT relation on $A$
> Equivalence class is a set containing related elements, but it does NOT contain the relations on $A$ as per $R$'s definition.

- In an equivalence class, every element in related to every other element which is represented as $a \sim b$, where $a, b \in [a]_R$
- For an equivalence class $[x]_R$ , if $|\;[x]_R\;| = k$ , then it contributes to $k^2$ relations in $R$.
- If $E_i = [x_i]_R$ is an equivalence class and there are $n$ equivalence classes , then $|R| = \Sigma \; \lvert E_i\lvert ^2$
$$
R = (E_1 \times E_1)\; \cup \; (E_2 \times E_2) \; \cup \; \ldots \; \cup (E_n \times E_n)
$$
$$
\lvert R \lvert = \lvert (E_1 \times E_1) \lvert \; + \; \lvert (E_2 \times E_2) \lvert \; + \; \ldots \; + \lvert (E_n \times E_n) \lvert
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
- $R_{identity}$ is, 
	- Reflexive
	- Symmetric
	- Anti-symmetric
	- Not Asymmetric (Not Ir-reflexive)
	- Transitive
- If the set $|A| = n$ Identity relation $R_{identity}$ on set $A$ partitions the set $A$ into `n` partitions.
- $R_{identity}$ creates $n$ equivalent classes. 



---

