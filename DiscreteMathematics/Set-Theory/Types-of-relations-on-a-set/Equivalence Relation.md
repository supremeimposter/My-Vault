---
pdf: lec-27, lec-29, lec-30
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

- A relation $R$ is equivalent iff $R$ is [[Reflexive Relation|Reflexive]], [[Symmetric Relation|Symmetric]] and [[Transitive Relation|Transitive]].
![[Pasted image 20231016091246.png]]

> [!remember] Equivalent Relation iff it satisfies RST

- In Equivalence relation $R$ on $A$, if $a, b \in A$ and $aRb$, then $a$ and $b$ are equivalent, which is denoted by $a \sim b$ . 
- Equivalence relation $R$ creates a unique partition on the set $A$.
	- Each part of this partition is called equivalence class of $R$.

## Examples

> [!example] ![[Pasted image 20231015161528.png]]
> ![[Pasted image 20231015161546.png]]

> [!pdf] More Examples
> Lec-27 Pg. No. 4-15
> Lec-29 Pg. No. 4-51



---
## Analysis of Equivalence Relation

> [!lecture] Lecture - 29, 30
>> [!youtube] [Lecture 30 - Equivalence Relation Complete Analysis Part 2 - Set Theory - Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=vpb5qsolNrM)

- If $R$ is an equivalent relation on the set $S$, then $R$ [[Partition of a Set|partitions]] the set $S$. 
- Each partition is called an equivalence class and every equivalent relation creates unique partition of $S$ i.e. unique equivalence classes.
### Equivalence Class

> [!check] When asked to find equivalence classes, check if the given relation is an equivalent relation (RST)

- In an equivalent relation $R$ on the set $A$ Equivalence class $[x]_R$ for an element $x \in S$,
$$
[x]_R = \{y \in A \mid xRy\} = \{y \in A \mid x \sim y \}
$$
- $[x]_R$ is the set of all elements of $A$ that are related to $x$.
- The equivalence class of a member of $[x]_R$ is same as $[x]_R$ i.e. $[y]_R = [x]_R$.
- [[Partition of a Set|Partition]] in equivalence relation is the set of equivalence classes, and there is a unique partition for an equivalence relation $R$.
- Equivalence classes of a set $A$ are disjoint.

> [!intuition] Equivalence class is NOT relation on $A$
> Equivalence class of an element $x \in A$ is a set containing related elements of $x$, but it does NOT contain the relations on $A$.

- In an equivalence class, every element is related to every other element which is represented as $a \sim b$, where $a, b \in [a]_R$
- For an equivalence class $E = [x]_R$ , if $|E| = k$ , then it contributes to $k^2$ relations (ordered pairs) in $R$.
	- $|\;E \times E\;|$ contribution to $R$ since every element in related to every other element in an equivalence class.
- If $E_i = [x_i]_R$ is an equivalence class and there are $n$ equivalence classes , then $|R| = \Sigma \; \lvert E_i\lvert ^2$ and there is a single `n`-part partition.
$$
R = (E_1 \times E_1)\; \cup \; (E_2 \times E_2) \; \cup \; \ldots \; \cup (E_n \times E_n)
$$
$$
\mid R \mid = \mid (E_1 \times E_1) \mid \; + \; \mid (E_2 \times E_2) \mid \; + \; \ldots \; + \mid (E_n \times E_n) \mid
$$
$$
\mid R \mid = {\mid E_1 \mid}^2 + {\mid E_2 \mid}^2 + \ldots + {\mid E_n \mid}^2 
$$
- $(E_i \times E_i)$ and ($E_j \times E_j$) are disjoint, where $i \not= j$ .

> [!info] Partition of $A$ by an equivalence relation $R$ is the set of all equivalence classes of $A$ .

### Cases

#### Universal Relation on $A$ is Equivalent
- [[Relations#Universal and Empty relation|Universal Relation]] $R_{universal}$ on $A$ i.e. set of all relations possible on the set $A$ or cross product of set $A$.
$$
R_{universal} = A \times A
$$
- $R_{universal}$ is,
	- Reflexive
	- Symmetric
	- Not anti-symmetric
		- Anti-symmetric only if $|A| = 1$
	- Not Asymmetric (Not Ir-reflexive)
	- Transitive

- Cartesian product on $A$ means every element is related to every other element in $A$ .
- $R_{universal}$ is an equivalence relation on $A$.
- $R_{universal}$ creates a single `1`-part partition on $A$. 
- There is only one equivalence class if $R_{universal}$ on $A$.

> [!example] $A = \{a, b, c, d\}$
> **Relation set $R$**
> $R_{universal} = \{ (a,a), (a,b), (a,c), (a,d), (b,a), (b,b), (b,c), (b,d), (c,a), (c,b), (c,c), (c,d), (d,a), (d,b), (d,c), (d,d) \}$
> **Equivalence Classes**
> $[a]_{R_{universal}} =[b]_{R_{universal}} =[c]_{R_{universal}} =[d]_{R_{universal}} = \{a, b, c, d\}$
> **Partition of $A$ by $R$**
> $\Pi = \{ \; \{a, b, c, d\} \; \}$ 

##### Representation of Universal Relation
> [!col]
> ![[Pasted image 20231016112053.png|Graph for Universal relation]]
> 
> ![[Pasted image 20231016111536.png|Matrix for Universal relation]]

---
#### Identity Relation on $A$ is Equivalent

> [!pdf] Lec-29 Pg. No. 34-36
- Identity relation $R_{identity}$ on set $A$ contains only self-loop relations on the set $A$. i.e. only diagonal elements in the matrix representation.
$$R_{identity} = \{(a, a) \mid a \in A \} = \{(a, b) \mid a = b \}$$
- $R_{identity}$ is, 
	- Reflexive
	- Symmetric
	- Anti-symmetric
	- Not Asymmetric (Not Ir-reflexive)
	- Transitive
- If the set $|A| = n$ Identity relation $R_{identity}$ on set $A$ partitions the set $A$ into only one `n`-part partitions.
- $R_{identity}$ creates $n$ equivalent classes. 

> [!example] $A = \{a, b, c, d\}$
> **Relation set $R$**
> $R_{identity} = \{ (a,a), (b,b), (c,c), (d,d) \}$
> **Equivalence Classes**
> $[a]_{R_{identity}} = \{a\}$
> $[b]_{R_{identity}} = \{b\}$
> $[c]_{R_{identity}} = \{c\}$
> $[d]_{R_{identity}} = \{d\}$
> **Partition of $A$ by $R$**
> $\Pi = \{ \; \{a\}, \{b\}, \{c\}, \{d\} \; \}$ 

##### Representation of Identity Relation
- Identity relation is also called as diagonal relation and equality relation.
> [!col]
> ![[Pasted image 20231016112138.png|Graph for Identity relation]]
> 
> ![[Pasted image 20231016112204.png|Matrix for Identity relation]]

---

## Summary of Partitions and Equivalence classes

- For every partition of a set $A$, there is a unique equivalence relation $R$ on $A$ corresponding to that partition.

> [!example] $A = \{1, 2, 3\}$
- Consider the each part of the partition $\Pi_1$ as equivalence classes of some Equivalent relation $R_1$ on $A$. Then what about $R_1$ ?

![[Pasted image 20231016194154.png]]
- $R_1$ is an equivalent relation.


> [!doubt] 
> - For an equivalence relation $R$ on a set $A$, there is only one partition containing equivalence classes as its parts.


---