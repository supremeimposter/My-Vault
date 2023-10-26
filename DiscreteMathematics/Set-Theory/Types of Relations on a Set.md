---
pdf: lec-15-17, lec-18-21, lec-22-23, lec-24-26, lec-27, lec-29
module: 5
lecture: 20, 21, 22, 23, 24, 25, 26, 27, 29
date: 2023-10-11T10:26:00
version:
  - DM-24
last-revision: 
notes-taken: true
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---
# Types of Relations on a Set
- These special types of relations are only for relations $R$ on a set $A$ i.e. $R : A \rightarrow A$

1. [[Reflexive Relation]]
2. [[Symmetric Relation]]
3. [[Transitive Relation]]
4. [[Equivalence Relation]]

----
## Summary of Reflexive, Symmetric and Transitive Relation

- Understanding Reflexive, Symmetric, Transitive relations and [[Partition of a Set|partition of a set]] is essential for understanding Equivalence Relation.

![[Pasted image 20231015000038.png]]

## Important results

### Empty relation on non-empty base set

> [!point] $R = \phi$ on any non-empty set $S$ i.e. $R = \{\}$
> 1. Not an equivalence relation - $\forall_x \in S \; (x \not R x)$ 
> 2. Ir-reflexive relation - Since there are no self loops
> 3. Symmetric (no violation), Anti-symmetric (No-violation), Asymmetric
> 4. Transitive (no violation)
> 5. Not Equivalent and not partial order.
> 
>> [!example] $A = \{a, b, c, d\}$
>> ![[Pasted image 20231019214901.png|180]]

### Empty Relation on empty base set

![[Quantifiers#What an empty domain does?]]

> [!point] $R = \phi$ on an empty set $S$ 
> 1. Reflexive and Ir-reflexive (No elements to violate)
> 2. Symmetric, Anti-symmetric and Asymmetric
> 3. Transitive
> 4. Equivalent and Partial Order
>> [!important] There are no elements to violate any of the conditions.

- All the definitions of the above relations involve universal quantifiers.

## Examples
![[Pasted image 20231015000302.png]]

---

> [!example] $R$ on $\mathbb{Z}$ i.e. $R : \mathbb{Z} \rightarrow \mathbb{Z}$
> $\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$

|   Relations on $\mathbb{Z}$   |   $\lt$   |   $\le$   |   $=$   | $\mid$ |  $\nmid$ |   $\not=$   |
|:------------------------------|:----------|:----------|:--------|:-------|:---------|:------------|
|   Reflexive                   |   No      | Yes       | Yes     | Yes    | No       | No          |
|   Ir-Reflexive                |   Yes     | No        | No      | No     | Yes      | Yes         |
|   Symmetric                   |   No      | No        | Yes     | No     | No       | Yes         |
|   Anti-Symmetric              |   Yes     | Yes       | Yes     | No     | No       | No          |
|   Asymmetric                  |   Yes     | No        | No      | No     | No       | No          |
|   Transitive                  |   Yes     | Yes       | Yes     | Yes    | No       | No          |
|   Equivalence                 |   No      | No        | Yes     | No     | No       | No          |  

> [!NOTE] $\mid$
> Not anti-symmetric on $\mathbb{Z}$
>> [!example] $-2 \mid 2$ and $2 \mid -2$

---



----
