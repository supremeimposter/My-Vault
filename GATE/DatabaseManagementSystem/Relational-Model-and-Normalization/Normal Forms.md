---
pdf: lec-6B
module: 1
lecture: 6B
date: 2023-11-10T18:38:00
version:
  - DBMS-24
last-revision: 2024-07-10T19:07:00
notes-taken: false
tags:
  - DBMS/RelationalModel
  - DBMS/RelationalModel/NormalForms
---
# Normal Forms

> [!lecture] Lecture-7C

- As relations move to higher levels of Normal forms, **redundancies due to FD's** decrease.

## Levels of Normal Forms
> [!lecture] Lecture-6B

![[Normal Forms-20231111145958891.webp]]
### First Normal Form (1NF)

A relation schema $R$ is in First Normal form if the domain of all attributes of $R$ is atomic.

Any relation in relational model is by default in 1NF, since by definition, attribute values of a domain must be atomic.

----
### Second Normal Form (2NF)

- A relation is in 2NF if it is in the First Normal form and if **every non-prime attribute is fully dependent on every candidate key**.
- A relation is in 2NF if it is in the First Normal form and if **no non-prime attribute is partially dependent on any candidate key**.

- If there is no non-prime attribute in a relation, then the relation is definitely in 2NF.
- If there is no composite candidate key in a relation i.e. every candidate key is of single attribute, then the relation is definitely in 2NF.

#### Violation of 2NF

1. Try to find a non-key attribute that is functionally determined by a subset of some key.
$$
\text{proper subset of some key} \rightarrow \text{some non-prime attribute}
$$

2. A relation is not in 2NF if there is a partial FD such that,
$$
\text{some candidate key } \xrightarrow{\text{partially}}\; \text{ some non-prime attribute} 
$$

- The above two conditions are the cause and effect of each other.
- If there is a partial dependency between two prime attributes, then it does not violate the 2NF.

> [!steps]   How to find the if a relation is in 2NF? 
> 1. Find all the candidate keys of $R$ and list out the prime and non-prime attributes.
> 2. From the given FD set, check if there is any candidate key that partially determines any non-prime attribute.

> [!example] 
> ![[Normal Forms-20240709154005923.webp]]
> 
> ![[Normal Forms-20240709155459975.webp]]
> 
> ![[Normal Forms-20240709160346177.webp]]

---
### Third Normal Form (3NF)

- A relation is in 3NF if **no non-prime attribute is transitively dependent on any candidate key**.
- A relation is in 3NF if **every non-prime attribute is non-transitively dependent on every candidate key**.

- A relation is in 3NF if there is no non-prime attributes.
- If a relation is in 3NF, then it is definitely in 2NF, but if a relation is not in 3NF, then we cannot say about 2NF.

#### Violation of 3NF
$$
\text{some candidate key } \xrightarrow{\text{transitively}}\; \text{ some non-prime attribute} 
$$

Some super key of $R$ will definitely determine a non-super key (non-candidate key) of $R$ and also a non-super key cannot determine a super key and if a non-super key determines some non-prime attribute, then it means that a super key (possibly candidate key) transitively determines some non-prime attribute.
$$
\text{not a super-key } \rightarrow \text{ some non-prime attribute}
$$
To put it simply if a non-prime attribute (not a super key) determines some non-prime attribute, then it is violation of 3NF.
$$
\text{non-prime attribute } \rightarrow \text{ some non-prime attribute}
$$
The above condition can also be put as,
$$
\text{proper subset of candidate key} \to \text{some non-prime attribute}
$$
which is a violation of 2NF.

> [!example] 
> ![[Normal Forms-20240709203305121.webp]]
> 
> ![[Normal Forms-20240709203121903.webp]]
> 
> ![[Normal Forms-20240709203851161.webp]]
> 
> ![[Normal Forms-20240709214004964.webp]]

If a relation $R$ violates 2NF, then it also violates 3NF.

If a candidate key transitively determines a prime attribute, then it does NOT violate 3NF.

If a non-super key determines a prime attribute, then it is also not a violation of 3NF, but it creates data redundancy.

> [!summary] 

$$
\text{violation of 2NF } \rightarrow \text{ violation of 3NF}
$$
$$
R\text{ is in 3NF} \rightarrow R \text{ is in 2NF}
$$

Both in 2NF and 3NF, there are no problem with prime attributes.

---
### BCNF (Boyce-Codd Normal Form)

A relation $R$ is in BCNF iff for all non-trivial FD's $X \rightarrow y$ of $R$, the LHS is a super key.
$$
R\text{ is in BCNF} \rightarrow R \text{ is in 3NF}
$$

In 3NF, a non-super key can determine a prime attribute which creates data redundancies, but in BCNF,  there is no non-super key in LHS in a non-trivial FD which makes BCNF a more stronger form than 3NF.

If LHS is the super key, then redundancies do not occur.

#### Violation of BCNF

> [!youtube] [GATE CSE 2007, 1990 Normal Forms Question | 3NF, BCNF | Transitive Dependency | DBMS | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=xqIm-Y3oVDk)

Consider an attribute $A$, it can be either prime or non-prime attribute and $A \not\in \alpha$ and $A \not\in \beta$. $\beta \to A$ is non-trivial since $A \not\in \beta$.

![[Normal Forms-20240710154030945.webp]]

A key cannot transitively determine a prime or non-prime attribute in a BCNF relation, since every non-trivial FD has a super key for LHS, which violates the definition of transitive functional dependency.

The below situations cannot occur in a BCNF relation,
$$
\text{some candidate key } \xrightarrow{\text{transitively}}\; \text{ some prime attribute} 
$$
$$
\text{some candidate key } \xrightarrow{\text{transitively}}\; \text{ some non-prime attribute} 
$$

A key cannot partially determine a prime or non-prime attribute in a BCNF relation, since every non-trivial FD must be a super key in BCNF. When a proper subset of a key determines a prime or non-prime attribute, then LHS is not a super key.

The below situations cannot occur in a BCNF relation,
$$
\text{some candidate key } \xrightarrow{\text{partially}}\; \text{ some prime attribute} 
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