---
pdf: lec-18-21, lec-22-23
module: 5
lecture: 22, 23, 24, 25
date: 2023-10-15T15:33:00
version:
  - DM-24
last-revision: 
notes-taken: true
tags:
  - DiscreteMath
  - DiscreteMath/Sets
  - DiscreteMath/Sets/Relations
---
# Symmetric Relation

## Symmetric Relation

- A relation $R$ is symmetric iff
$$
\forall_{a, b\; \in \; A}\; (a\; R \; b \rightarrow b \; R \; a)
$$
- Two different elements must be related to each other.

- Assume base set $A$ and a relation $R : A \rightarrow A$, 
> [!info] Possibilities of $x$ and $y$ if $R$ is symmetric
> ![[Pasted image 20231014223118.png|possibilities allowed and not allowed]]

### Not Symmetric Relation
- A relation $R$ is NOT symmetric iff
$$
\exists_{a, b\; \in \; A}\; (a\; R \; b \land b \; \not R \; a)
$$

## Examples
- Equality relation on $\mathbb{Z}$ is symmetric.
![[Pasted image 20231014213017.png]]

- Subset relation on a powerset is NOT symmetric.
![[Pasted image 20231014213117.png]]

![[Pasted image 20231014213136.png]]

## Representation of Symmetric Relation

### Matrix Representation

- If the relation is symmetric, then the matrix $M$ is called a Symmetric Matrix where $M = M^T$
- Reflexivity is NOT  concern if the matrix is symmetric.

> [!example] $A = \{1, 2, 3\}$
> ![[Pasted image 20231014213640.png]]

### Graph Representation

- Unidirectional edges is NOT allowed if the relation is symmetric.
- It does NOT care about self-loops.

> [!example] 
> **Symmetric**
> ![[Pasted image 20231014213923.png|Graph for symmetric]]
> **Not-Symmetric**
> ![[Pasted image 20231014222310.png|Graph for NOT symmetric]]

---

## Anti-Symmetric Relation
- Two different elements $a, b$ should NOT be related to **each other**.
- Assume base set $A$ and a relation $R : A \rightarrow A$, $x, y \in A$, where $x \not = y$
> [!info] Possibilities of $x$ and $y$ if $R$ is anti-symmetric
> ![[Pasted image 20231014223319.png|possibilities allowed and not allowed|400]]

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

### Examples
- Subset relation on $\mathcal{P}(A)$ of any set $A$ is anti-symmetric.
![[Pasted image 20231017155334.png]]

- $\le, \ge, \lt, \gt$ and $\subseteq, \subset, \supseteq, \supset$ for any base set $A$
- 

## Representation of Anti-Symmetric Relation

### Matrix Representation
- It does NOT care about diagonal entries
![[Pasted image 20231014231515.png|template matrix]]

- There are two cases in the above matrix
````col
```col-md
flexGrow=1
===
![[Pasted image 20231014231715.png|case 1]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231014231735.png|case 2]]
```
````

### Graph Representation
- It does NOT care about self-loops.
- There should be only one directional relationship. i.e. There should be at most one edge between distinct vertices.
- If there is no relationship between two different vertices, then its fine.
> [!example] $A = \{a, b, c, d\}$
> ![[Pasted image 20231014230405.png|250]]

---

## Asymmetric Relation
- It is also called as **counter-symmetric** relation.
- A relation $R$ is asymmetric iff $R$ is both [[Reflexive Relation#Ir-reflexive Relation|ir-reflexive]] and [[Symmetric Relation#Anti-Symmetric Relation|anti-symmetric]].
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
> ![[Pasted image 20231014224958.png|Possibilities allowed and not allowed|400]]

## Representation of Asymmetric Relation
### Matrix Representation
- The diagonal entries must be 0's and the rest elements as in anti-symmetric relation.

### Graph Representation

````col
```col-md
flexGrow=1
===
![[Pasted image 20231014225829.png|300]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231014232239.png|250]]
```
````

## Examples

> [!youtube] [Q3 solution - Reflexive, Symmetric and Anti-Symmetric relation](https://www.youtube.com/watch?v=71ks9HH0osQ)
> Problems on Reflexive and Symmetric relations on a set.
>> [!pdf] Lec 24-26 Pg No. 51 - 81

- There is **no** relation which is both reflexive and asymmetric.
---