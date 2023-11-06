---
pdf: lec-5A, lec-5B
module: 1
lecture: 5A, 5B, 5C
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

- Functional dependencies are [[Implication|implications]]. The converse is NOT true all the time.
- Functional dependencies can also be defined between set of attributes.
$$
\{A, B\} \rightarrow \{C\}
$$
- The above FD means whenever $AB$ combination is same in two tuples, then $C$ must be same in those two tuples.
> [!convention] 
> Notations can be abused while writing two or more sets i.e. $AB \rightarrow C$

## Violation of Functional Dependency
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


> [!think] 
> Trivial FD's always hold true and they are NOT interesting to study, whereas Non-trivial FD's are interesting to study and useful.

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
- If $X \supseteq Y$, then $X \rightarrow Y$
- These FD's are called trivial FD's.
### Augmentation Law
- If $X \rightarrow Y$, then $XZ \rightarrow YZ$
````col
```col-md
flexGrow=1
===
#### Direct Proof
```
```col-md
flexGrow=1
===
#### Proof by Contradiction
```
````

### Transitivity Law
- If $X \rightarrow Y$ and $Y \rightarrow Z$, then $X \rightarrow Z$

![[Functional Dependency-20231106083809779.webp|Direct Proof]]


> [!terminology] 
> - The above three inference rules for FD's are called **Armstrong's Axioms**
> - They can be used to prove further FD laws.

### Decomposition Law (Split on RHS)
- If $X \rightarrow YZ$, then $X \rightarrow Y$ and $X \rightarrow Z$. 

![[Functional Dependency-20231106085159200.webp|Direct Proof]]


> [!suggestion] 
> When given new laws to prove in the exam, it is better to use direct proof rather than Armstrong axioms as it will complicate the proof.

### Union Law (Combine on RHS)
- If $X \rightarrow Y$ and $X \rightarrow Z$, then $X \rightarrow YZ$.

![[Functional Dependency-20231106092216856.webp|Direct Proof]]

### Composition Law (Combine on LHS)
- If $X \rightarrow Z$ and $Y \rightarrow Z$, then $XY \rightarrow Z$.


> [!summary] 
> - Splitting and combining can be done on RHS
> - Splitting CANNOT be done on LHS, but combining can be done on LHS

### Pseudo-Transitivity Law
- If $X \rightarrow Y$ and $WY \rightarrow Z$, then $WX \rightarrow Z$.

### More functional dependency laws


> [!NOTE] 
> - In Non-trivial FD's, we can split on RHS and remove the trivial part from RHS and get completely non-trivial FD.

---

## Closure of Attribute Set
- For a given relation $R$, there is a set $S$ of functional dependencies defined on $R$.
- Relation $R$ is the set of all the attributes in the relation schema.
- If $X$ is a set of attributes, then closure of $X$ is the set of all the attributes that $X$ can determine.
$$
X^{+} = \{ Y \mid X \rightarrow Y \} 
$$
- Closure is also denoted by $X^\star$

> [!conflict] 
> Do NOT get confused between a FD notation and closure notation.
---

---
## Defining Keys in terms of Functional Dependencies
> [!lecture] Lecture-5C

> [!suggestion] 
> Keep in mind that these are keys from the first chapter.
### [[Relational Model#Candidate Key|Candidate Key]]
- $X$ is a candidate key if,
	- $X^{+} = R$ and
	- No proper subsets of $X$ can determine all the attributes i.e. $X$ is minimal.
- A candidate key is also a super key.
- If $X$ is a candidate key, then $XY$ cannot be a candidate key, where $Y \not = \phi$.

### [[Relational Model#Super Key|Super Key]]
- In a relation schema $R$ , $X$ is a super-key iff $X^{+} = R$.


> [!NOTE]
> Primary key cannot be determined. It must be given, as it is chosen as one of the candidate keys.

----
