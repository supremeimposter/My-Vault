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
  - DBMS/NF
---
# Normal Forms

![[Relational Model#Prime and Non-prime attributes]]

## Types of Normal Forms
> [!lecture] Lecture-6B
### First Normal Form (1NF)
- A relation is in First Normal form is its domain is atomic 


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

- If there is a partial dependence between two prime attributes, then it does not violate the 2NF.

> [!steps]
> How to find the if a relation is in 2NF? 

> [!discussion] 
> ![[Normal Forms-20231110225510468.webp|Lecture-6B Q.C]]


### Third Normal Form (3NF)
- A relation is in 3NF if no non-prime attribute is transitively dependent on any candidate key.
- A relation is in 3NF if every non-prime attribute is non-transitively dependent on every candidate key.

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

- violation of 2NF is also violation of 3NF.



---