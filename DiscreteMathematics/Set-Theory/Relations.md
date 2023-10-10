---
pdf: lec-15-17, lec-18-21
module: 5
lecture: 15, 16, 17, 18, 19
date: 2023-10-10T08:49:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM/Sets
---
# Relations
- Relations is a **set** containing ordered pairs of elements from sets $A$ and $B$.
- Relationship between two sets is always ONLY one way.
![[Pasted image 20231010195509.png]]
$$
R = \{\;(a, b)\; | \; a \text{ condition } b \}
$$
- The condition is how the relationship is defined between the elements of the two sets. $R$ is the binary relation between two sets $A$ and $B$.
$$
R : A \rightarrow B
$$
- $x \; R \; y$ iff $x$ takes $y$ i.e. $x$ is related to $y$.
- If $x$ is related to $y$, it does NOT mean that $y$ is related to $x$.
- $(a, b) \in R \equiv a \; R \; y$  . $R$ is a relation on $A$ and $B$.
- $(a, b) \not\in R \equiv a \; \not{R} \; y$  . $R$ is NOT a relation on $A$ and $B$.
> [!caution] Attention
> Avoid the sentence **x and y are related** or **x and y are related to each other** because they do NOT make any sense.

$$R \subseteq A \times B$$
> [!intuition] 
> Every subset of $A \times B$ is  a relation from $A$ to $B$.
> Every relation from $A$ to $B$ is a subset of $A \times B$.
> A is related to B under relation R.


![[Pasted image 20231010195814.png]]

![[Pasted image 20231010201733.png]]
### Examples

![[Pasted image 20231010201831.png]]

![[Pasted image 20231010201851.png]]

![[Pasted image 20231010202759.png]]

![[Pasted image 20231010203131.png]]

## Number of relations
$$
|A \times B| = |A| \cdot |B|
$$
- Number of subsets of $A \times B$ is same as number of relations from $A$ to $B$.
$$
\text{No of subsets of } A \times B = 2^{|A \times B|}
$$
![[Pasted image 20231010202312.png]]

## Relations on a Set

$$
R : A \rightarrow A
$$
- Relation $R$ is on set $A$ is a relation from $A$ to $A$.
- A relation on a set $A$ is a subset of $A \times A$.
$$R \subseteq A \times A$$
> [!remember] The term "**Base set**" is used only when relation is on a single set. 
> $A$ is the base set of the above relation $R$.
- $A \times A$ is the universal relation on the set $A$. It is the set of all the relations on $A$.
- There can also be an empty relation on $A$ where there is no relationship between any of the elements of the set $A$.

> [!example] ![[Pasted image 20231010204357.png]]
> ![[Pasted image 20231010204420.png]]
- For a set $A$, where $|A| = n$, no of relations from $A$ to $A =$ no of subsets of $|A \times A| = 2^{n}$

## Representation of Relations

### Set representation
- Write down the complete set $R$ with all the elements that satisfies the relationship condition.

> [!example] ![[Pasted image 20231010203432.png]]
> The set representation of relation from A to B is,
> ![[Pasted image 20231010203450.png]]

### Arrow Diagram representation
- Draw two boxes as sets and fill them with corresponding elements and map the relation using arrows in the diagram.

> [!example] ![[Pasted image 20231010203249.png]]
> ![[Pasted image 20231010203932.png]]

### Matrix Representation
- Draw a matrix with the elements of the set $A$ as the rows and columns.
- Tick marks when the relationship condition satisfies.
- Read the table as **row element is related to column element** and NOT the converse.


> [!example] ![[Pasted image 20231010204001.png]]
> ![[Pasted image 20231010204015.png]]

### Graph Representation
- Consider all the elements of the set $A$ as nodes and draw the arrows as per relationship condition.

> [!example] ![[Pasted image 20231010210437.png]]
> ![[Pasted image 20231010210418.png]]

### Representing relations on a set
- Both Graph and Matrix representation are specially available for relationship on a single set $A$.
$$
R : A \rightarrow A
$$
![[Pasted image 20231010210754.png]]

![[Pasted image 20231010210749.png]]
