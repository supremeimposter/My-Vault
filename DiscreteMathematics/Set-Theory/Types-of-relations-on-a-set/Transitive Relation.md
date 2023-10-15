---
pdf: lec-24-26
module: 5
lecture: "26"
date: 2023-10-15T15:37:00
version:
  - DM-24
last-revision: 
notes-taken: true
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---
# Transitive Relation

- In the given relation set, look at the elements front and back to see if they could or fail to form a transitive edge.

> [!intuition] To solve Transitive relation problems easily, use **graph representation** to avoid or not encounter the above analytical problem.

## Transitive Relation
- $R$ is transitive on $A$ iff
$$
\forall_{a, b, c \; \in \; A} \; (\; (aRb \land bRc) \rightarrow aRc \;)
$$
- $a, b, c$ may be same or different elements.

![[Pasted image 20231014233933.png]]

> [!intuition] For checking transitive relation, take two relation ordered pairs rather than a single ordered pair as in the above relations.
> Take $a R b$ and $b R c$ and then check if $a R c$

### Examples
- Equality relation on $Z$ is transitive
![[Pasted image 20231014234130.png]]

- Subset relation on a powerset is transitive
![[Pasted image 20231014234242.png]]

![[Pasted image 20231014234327.png]]


## Non-Transitive Relation
- If there is some element $a, b, c$ where $a$ is related to $b$ and $b$ is related to $c$ but $a$ is NOT related to $c$
$$
\exists_{a, b, c \; \in \; A} \; (a R b \; \land \; b R c \; \land \; a \not R c)
$$
![[Pasted image 20231014235433.png|violation of Transitive condition]]

## Graph Representation of Transitive and Non-transitive Relation

### Transitive
![[Pasted image 20231014234817.png]]

![[Pasted image 20231014235230.png|Transitivity]]

![[Pasted image 20231014235328.png|Since no three elements are chained, this is transitive]]

### Non-Transitive
![[Pasted image 20231014235129.png|Non-transitive relation condition]]

![[Pasted image 20231014235545.png|there is no self loop on a and b]]

----