---
pdf: lec-15-17, lec-18-21
module: 5
lecture: 15, 16, 17, 18, 19
date: 2023-10-10T08:49:00
version:
  - DM-24
last-revision: 
notes-taken: true
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---
# Relations
- Relation is also called as Binary relation as a relation is mostly from one set to another set.
![[Pasted image 20231011100505.png]]

- Relations is a **set** containing ordered pairs of elements from sets $A$ and $B$.

> [!important] Relation is NOT a cross product, but contains ordered pairs based on a condition. 
> Only [[Equivalence Relation#Universal Relation on $A$ is Equivalent|universal relation]] is a cross product.

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

![[Pasted image 20231011094040.png]]

## No of relations possible
$$
|A \times B| = |A| \cdot |B|
$$
- Number of subsets of $A \times B$ = number of relations from $A$ to $B$.
$$
\text{No of subsets of } A \times B = 2^{|A \times B|}
$$
![[Pasted image 20231010202312.png]]

> [!summary] 
> 1. Relations in mathematics are one way statements.
>> *$x$ is related to $y$* does not mean that *$y$ is related to $x$*.
> 2. Binary Relation is a relation between two sets (same or different).
>> $R : A \rightarrow B \equiv R \subseteq A \times B$ 
>> $R : A \rightarrow A \equiv R \subseteq A \times A$

## Relations on a Set

- Relation $R$ is on set $A$ is a relation from $A$ to $A$.
- A relation on a set $A$ is a subset of $A \times A$.
$$R \text{ is on set } A \equiv R : A \rightarrow A \equiv R \subseteq A \times A$$

> [!remember] The term "**Base set**" is used only when relation is on a single set. 
> $A$ is the base set of the above relation $R$.
> Base set is NEVER EMPTY unless explicitly specified.

### Universal and Empty relation
- $A \times A$ is the universal relation on the set $A$. It is the set of all the relations on $A$.
- There can also be an empty relation on $A$ where there is no relationship between any of the elements of the set $A$.

> [!example] $A = \{1, 2\}$
````col
```col-md
flexGrow=1
===
![[Pasted image 20231011100817.png|Full relation on $A$]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231011100933.png|Empty relation on $A$]]
```
````

### No of relations on a set $A$

> [!example] ![[Pasted image 20231010204357.png]]
> ![[Pasted image 20231010204420.png]]
- For a set $A$, where $|A| = n$, no of relations from $A$ to $A =$ no of subsets of $|A \times A| = 2^{n^{2}}$
- There are several special [[Types of Relations on a Set]] $A$.

### Identifying base set

- Identifying the base set is the important step in identifying relations on a set.

````col
```col-md
flexGrow=1
===
**1. $R$ on set $A$**
> $R : A \rightarrow A$ 
> $R \subseteq A \times A$
> $aRb$
> $(a, b) \in R$
```
```col-md
flexGrow=1
===
**2. $R$ on set $\mathbb{N} \times \mathbb{Z}$**
> $R : \mathbb{N} \times \mathbb{Z} \rightarrow \mathbb{N} \times \mathbb{Z}$
> $R \subseteq (\mathbb{N} \times \mathbb{Z}) \times (\mathbb{N} \times \mathbb{Z})$
> $(a, b)R(c, d)$
> $(\; (a, b), (c, d) \;) \in R$
```
````

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
- Read the table as **row element is related to column element** and do NOT read the converse.

> [!example] ![[Pasted image 20231010204001.png]]
> ![[Pasted image 20231010204015.png]]

### Graph Representation
- Consider all the elements of the set $A$ as nodes and draw the arrows as per relationship condition.

> [!example] ![[Pasted image 20231010210437.png]]
> ![[Pasted image 20231010210418.png]]

### Representing relations on a set
- Both Graph and Matrix representation are specially available for relationship on a single set $A$. i.e $R$ on $A$.
$$
R : A \rightarrow A
$$

#### Method 1 : Matrix representation
- Example 1
![[Pasted image 20231011093459.png]]

#### Method 2 : Graph representation

Example 1
![[Pasted image 20231010210749.png]]

Example 2 
![[Pasted image 20231011093706.png]]

````col
```col-md
flexGrow=1
===
Example 3
![[Pasted image 20231011094234.png]]
```
```col-md
flexGrow=1
===
Example 4
![[Pasted image 20231011094344.png]]
```
````


> [!pdf] lec-18-21 
> More examples on relations Pg. No. 44 - 85


> [!youtube] 
> [Relations - Complete Revision & Summary](https://www.youtube.com/watch?v=J2l-MN6IP9Q)
> [Relations - GATE PYQs Part 1- Set Theory | Discrete Mathematics Revision | GoClasses | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=b8OifcB2Wh4)
