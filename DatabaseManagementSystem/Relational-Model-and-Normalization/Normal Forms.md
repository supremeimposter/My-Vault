---
pdf: lec-6B
module: 1
lecture: 6B
date: 2023-11-10T18:38:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/RelationalModel
---
# Normal Forms

![[Relational Model#Prime and Non-prime attributes]]

![[Functional Dependency#Non Trivial FD]]

![[Functional Dependency#Partial and Full Functional Dependency]]
![[Functional Dependency#Transitive Functional Dependency]]


> [!lecture] Lecture-7C

- As relations move to higher levels of Normal forms, **redundancies due to FD's** decrease.

## Levels of Normal Forms
> [!lecture] Lecture-6B

![[Normal Forms-20231111145958891.webp]]
### First Normal Form (1NF)
- A relation is in First Normal form is its domain is atomic 

----
### Second Normal Form (2NF)
- A relation is in 2NF if it is in the First Normal form and if **every non-prime attribute is fully dependent on every candidate key**.
- A relation is in 2NF if it is in the First Normal form and if **no non-prime attribute is partially dependent on any candidate key**.
- If there is NO non-prime attribute, then the relation is definitely in 2NF.
- If there is NO composite candidate key i.e. every candidate key is of single attribute, then the relation is definitely in 2NF.

#### Violation of 2NF
1. Try to find a non-key attribute that is functionally determined by a subset of some key.
$$
\text{proper subset of some key} \rightarrow \text{some non-prime attribute}
$$

2. A relation is NOT in 2NF if there is a partial FD such that,
$$
\text{some candidate key } \xrightarrow{\text{partially}}\; \text{ some non-prime attribute} 
$$
- The above two conditions are the cause and effect of each other.
- If there is a partial dependence between two prime attributes, then it does NOT violate the 2NF.

> [!steps]
> How to find the if a relation is in 2NF? 

> [!discussion] 
> ![[Normal Forms-20231110225510468.webp|Lecture-6B Q.C]]

---
### Third Normal Form (3NF)
- A relation is in 3NF if **no non-prime attribute is transitively dependent on any candidate key**.
- A relation is in 3NF if **every non-prime attribute is non-transitively dependent on every candidate key**.
- A relation is in 3NF if there is NO non-prime attributes.
- If a relation is in 3NF, then it is definitely in 2NF, but if a relation is NOT in 3NF, then we cannot say about 2NF.

#### Violation of 3NF

$$
\text{some candidate key } \xrightarrow{\text{transitively}}\; \text{ some non-prime attribute} 
$$

$$
\text{not a super-key } \rightarrow \text{ some non-prime attribute}
$$

- Both of the violation conditions are the cause and effect of each other.

- The condition below leads to the above two conditions.
$$
\text{non-prime attribute } \rightarrow \text{ some non-prime attribute}
$$

> [!important] violation of 2NF is also violation of 3NF.

- If there is a transitive dependency between two prime attributes, then it does NOT violate 3NF.

> [!summary] 

$$
\text{violation of 2NF } \rightarrow \text{ violation of 3NF}
$$
$$
R\text{ is in 3NF} \rightarrow R \text{ is in 2NF}
$$

---
### BCNF (Boyce-Codd Normal Form)
- A relation $R$ is in BCNF iff for all non-trivial FD's $X \rightarrow y$, the LHS is a super key.
$$
R\text{ is in BCNF} \rightarrow R \text{ is in 3NF}
$$
- In every non-trivial FD of $R$, a super key must determine everything.
- If LHS is the super key, then redundancies do not occur.

- A prime attribute cannot be transitively dependent on a key in a BCNF relation[.](https://www.youtube.com/watch?v=xqIm-Y3oVDk) 

#### Violation of BCNF

> [!youtube] [GATE CSE 2007, 1990 Normal Forms Question | 3NF, BCNF | Transitive Dependency | DBMS | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=xqIm-Y3oVDk)

$$
\text{some candidate key } \xrightarrow{\text{transitively}}\; \text{ some prime attribute} 
$$
$$
\text{some candidate key } \xrightarrow{\text{partially}}\; \text{ some prime attribute} 
$$
$$
\text{some candidate key } \xrightarrow{\text{transitively}}\; \text{ some non-prime attribute} 
$$
$$
\text{some candidate key } \xrightarrow{\text{partially}}\; \text{ some non-prime attribute} 
$$

---

# References
> [!youtube] Normal Forms Playlist
> [DBMS (Database Management System) Complete Playlist - GO Classes | GATE CSE - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHhUXFx03wy3uFeCXRw6qlm8)

- [Databases: GATE IT 2005 | Question: 22](https://gateoverflow.in/3767/gate-it-2005-question-22)
- [Databases: GATE CSE 1987 | Question: 2n](https://gateoverflow.in/80609/gate-cse-1987-question-2n)
- [Databases: GATE CSE 1990 | Question: 3-ii](https://gateoverflow.in/84054/gate-cse-1990-question-3-ii)
- [Databases: GATE CSE 2007 | Question: 62, UGCNET-June2014-II: 47](https://gateoverflow.in/1260/gate-cse-2007-question-62-ugcnet-june2014-ii-47)
- [Databases: GATE CSE 2012 | Question: 2](https://gateoverflow.in/34/gate-cse-2012-question-2)

---