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
  - DM
  - DM/Sets
  - DM/Sets/Relations
---

- These special types of relations are only for relations $R$ on a set $A$ i.e. $R : A \rightarrow A$
---
# Reflexive Relation
> [!lecture] Lecture-21
## Reflexive Relation
- A relation $R$ on a set $A$ is said to be reflexive iff all the elements of $A$ is related to itself.
$$
\forall_{x \in A}\; (x \; R\; x)
$$

## Not Reflexive Relation
- Not reflexive relation is the negation of reflexive relation.
- There is one element in $A$ which is NOT related to itself.
$$
\exists_{x \in A} (x \; \not R \; x)
$$

## Ir-reflexive Relation
- It is **NOT** the negation of Reflexive relation
- All the elements in the set $A$ must NOT be related to each other.
$$
\forall_{x \in A} (x \; \not R \; x)
$$

> [!tip] 
> - If a relation is ir-reflexive, then it is NOT reflexive, but the converse is NOT true.
> - If a relation is reflexive or ir-reflexive, then the relation is NOT reflexive.


## Empty base set 

> [!discussion] Empty base set
> ![[Pasted image 20231011121224.png]]

## Examples

> [!info] Equality Relation
> In a set $A$, $x \; R \; y$ iff $x = y$

> [!info] Subset Relation
> In a set $\mathcal{P}(A)$, $X\;R\;Y$ iff $X \subseteq Y$

- Equality Relation on $A$ is reflexive.
![[Pasted image 20231014180432.png]]

- Subset Relation on a powerset is reflexive.

> [!intuition] Every set is a subset of itself

![[Pasted image 20231014180446.png]]

![[Pasted image 20231014180635.png]]

![[Pasted image 20231014183430.png]]

## Representation of Reflexive Relation
### Matrix Representation

> [!example] $A = \{a, b, c, d\}$
> **Reflexive** - main diagonal is all 1's
> ![[Pasted image 20231014182447.png|Matrix for Reflexive]]
> **Not Reflexive** - Main diagonal is all 0's
> ![[Pasted image 20231014182516.png|Matrix for NOT Reflexive]]
> **Ir-reflexive** - main diagonal has at least one 0
> ![[Pasted image 20231014182557.png|Matrix for Ir-reflexive]]

### Graph Representation

> [!example] $A = \{a, b, c\}$
> **Reflexive** - Every element has self loop
> ![[Pasted image 20231014181739.png|Graph for reflexive]]
> **Not Reflexive** - No element has self loop
> ![[Pasted image 20231014181802.png|Graph for NOT reflexive]]
> **Ir-reflexive** - At least one element does not have self loop
> ![[Pasted image 20231014181852.png|Graph for Ir-reflexive]]


---

# Symmetric Relation

> [!lecture] Lecture 22
## Symmetric Relation

- A relation $R$ is symmetric iff
$$
\forall_{a, b\; \in \; A}\; (a\; R \; b \rightarrow b \; R \; a)
$$

- Assume base set $A$ and a relation $R : A \rightarrow A$, 
> [!info] Possibilities of $x$ and $y$ if $R$ is symmetric
> ![[Pasted image 20231014223118.png|possibilities allowed and not allowed]]

- For two different elements, relationship must be bi-directional. They must be related to each other.
- Uni-directional edges is NOT allowed.
- It does NOT care about self-loops.

### Not Symmetric Relation
- A relation $R$ is NOT symmetric iff
$$
\exists_{a, b\; \in \; A}\; (a\; R \; b \land b \; \not R \; a)
$$

### Examples
- Equality relation on $\mathbb{Z}$ is symmetric.
![[Pasted image 20231014213017.png]]

- Subset relation on a powerset is NOT symmetric.
![[Pasted image 20231014213117.png]]

![[Pasted image 20231014213136.png]]

### Representation of Symmetric Relation

#### Matrix Representation

> [!example] $A = \{1, 2, 3\}$
> ![[Pasted image 20231014213640.png]]
> - If the relation is symmetric, then the matrix $M$ is called a Symmetric Matrix where $M = M^T$
> - Reflexivity is NOT  concern if the matrix is symmetric.

#### Graph Representation
- Unidirectional edges is NOT allowed if the relation is symmetric.


> [!example] 
> **Symmetric**
> ![[Pasted image 20231014213923.png|Graph for symmetric]]
> **Not-Symmetric**
> ![[Pasted image 20231014222310.png|Graph for NOT symmetric]]


## Anti-Symmetric Relation
- Two different elements $a, b$ should NOT be related to **each other**.
- Assume base set $A$ and a relation $R : A \rightarrow A$, $x, y \in A$, where $x \not = y$
> [!info] Possibilities of $x$ and $y$ if $R$ is anti-symmetric
> ![[Pasted image 20231014223319.png|possibilities allowed and not allowed]]


**Definition 1**
- $R$ is anti-symmetric on $A$ i.e. $R : A \rightarrow A$ iff
$$
\forall_{a, b \;\in\; A} \; ((a \not= b \land a R b) \rightarrow (b \not R a) )
$$
- If $a$ and $b$ are different elements then they must not be related.

**Definition 2**
- $R$ is anti-symmetric on $A$ i.e. $R : A \rightarrow A$ iff
$$
\forall_{a, b \;\in\; A} \; ((a R b \land b R a) \rightarrow (a = b))
$$
- If $a$ and $b$ are different elements then they must not be related.


- It also does NOT care about self-loops.
- Bi-directional relationship is NOT allowed.

> [!attention] If a relation is not symmetric, then it does NOT mean that the relation is anti-symmetric.

### Representation of Anti-Symmetric Relation

#### Matrix Representation
- It does NOT care about diagonal entries

#### Graph Representation
- It does NOT care about self-loops.
- There should be only one directional relationship.
- If there is no relationship between two different elements, then its fine.
> [!example] $A = \{a, b, c, d\}$
> ![[Pasted image 20231014230405.png]]




## Asymmetric Relation
- It is also called as counter-symmetric relation.
- It is the combination of [[Types of Relations on a Set#Ir-reflexive Relation|ir-reflexive relation]] and [[Types of Relations on a Set#Anti-Symmetric Relation|anti-symmetric relation]].
- Self-loop is NOT allowed because of ir-reflexive property.
- Bi-directional relationship is NOT allowed because of anti-symmetric property.
> [!think] If a relation is NOT anti-symmetric, then it is also not asymmetric.


- $R$ is asymmetric on $A$ i.e. $R : A \rightarrow A$ iff
$$
\forall_{a, b \; \in \; A} \; (a R b \rightarrow b \not R a)
$$
- The above definition also takes care of the edge case $a = b$ for anti-symmetric property.
![[Pasted image 20231014225224.png|if a = b, then it is false as well]]


- Assume base set $A$ and a relation $R : A \rightarrow A$, $x, y \in A$, where $x \not = y$
> [!info] Possibilities of $x$ and $y$ if $R$ is asymmetric
> ![[Pasted image 20231014224958.png|Possibilities allowed and not allowed]]

### Representation of Asymmetric Relation
#### Graph Representation

![[Pasted image 20231014225829.png]]

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

