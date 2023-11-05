---
pdf: lec-5A, lec-5B
module: 1
lecture: 5A, 5B
date: 2023-11-05T13:40:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/RelationalModel
  - DBMS/RelationalModel/Constraints
---
# Functional Dependency (FD)
> [!lecture] Lecture-5A
- Functional dependencies are defined for schema as this is one of the [[Constraints in Relational Model#Integrity Constraint (IC)|Integrity constraints]].
- An attribute can be functionally dependent on another attribute.

> [!convention] 
> $$
> X \rightarrow Y
> $$
> - $X$ functionally determines $Y$
> - $X$ implies $Y$
> - $Y$ is functionally determined by $X$

- Functional dependencies can also be defined between set of attributes.
$$
\{A, B\} \rightarrow \{C\}
$$
- The above FD means whenever $AB$ combination is same in two tuples, then $C$ must be same in those two tuples.
> [!convention] 
> Notations can be abused while writing two or more sets i.e. $AB \rightarrow C$

![[Functional Dependency-20231105180019782.webp]]

## Functional Dependency on Schema vs Instance

> [!example] 
> Quiz 30 vs All Quizzes in a school

- If some instance does not satisfy functional dependency $X \rightarrow Y$, then schema can never satisfy functional dependency $X \rightarrow Y$.
- If the schema does not satisfy functional dependency $X \rightarrow Y$, then it is possible that some instance can satisfy functional dependency $X \rightarrow Y$.
- By looking at an instance, we can be sure about which FD's DO NOT hold, but we cannot be sure about which FD's hold.


## Types of Functional Dependency

### Trivial FD
- FD's which always hold true in every instance of every relation.
- $X \rightarrow Y$ is a trivial FD iff $X \supseteq Y$
	- $A \rightarrow A$
	- $AB \rightarrow A$
	- $ABC \rightarrow BC$

> [!terminology] 
> **Trivial fact** - fact which is always either true or false

### Non Trivial FD
- A FD which is not trivial
- $X \rightarrow Y$ is non-trivial iff $X \not\supseteq Y$
	- $A \rightarrow AB$
	- $AB \rightarrow AC$
	- $A \rightarrow BC$

### Completely Non Trivial FD
- $X \rightarrow Y$ is completely non-trivial iff $X \cap Y = \phi$
	- $AB \rightarrow CD$
	- $PQR \rightarrow MNO$
- Every completely non-trivial FD is also a non-trivial FD.

> [!caution] 
> There is no concept as "Semi Trivial FD" in standard resources.

---

> [!lecture] Lecture-5B

## Functional Dependency Laws

### Reflexivity Law
### Augmentation Law
- If $X \rightarrow Y$, then $XZ \rightarrow YZ$
### Transitivity Law
- If $X \rightarrow Y$ and $Y \rightarrow Z$, then $X \rightarrow Z$


