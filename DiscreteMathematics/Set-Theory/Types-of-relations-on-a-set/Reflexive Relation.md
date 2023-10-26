---
pdf: lec-18-21
module: 5
lecture: "21"
date: 2023-10-15T15:33:00
version:
  - DM-24
last-revision: 
notes-taken: true
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---
# Reflexive Relation
 
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

---
## Representation of Reflexive Relation
### Matrix Representation

> [!example] $A = \{a, b, c, d\}$
````col
```col-md
flexGrow=1
===
**Reflexive** - main diagonal is all 1's
![[Pasted image 20231014182447.png|Matrix for Reflexive]]
```
```col-md
flexGrow=1
===
**Not Reflexive** - Main diagonal is all 0's
![[Pasted image 20231014182516.png|Matrix for NOT Reflexive]]
```
```col-md
flexGrow=1
===
**Ir-reflexive** - main diagonal has at least one 0
![[Pasted image 20231014182557.png|Matrix for Ir-reflexive]]
```
````

### Graph Representation

> [!example] $A = \{a, b, c\}$
````col
```col-md
flexGrow=1
===
**Reflexive** - Every element has self loop
![[Pasted image 20231014181739.png|Graph for reflexive]]
```
```col-md
flexGrow=1
===
**Not Reflexive** - No element has self loop
![[Pasted image 20231014181802.png|Graph for NOT reflexive]]
```
```col-md
flexGrow=1
===
**Ir-reflexive** - At least one element does not have self loop
![[Pasted image 20231014181852.png|Graph for Ir-reflexive]]
```
````

---