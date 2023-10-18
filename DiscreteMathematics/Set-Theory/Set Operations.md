---
pdf: lec-6-8, lec-10-12, lec-13-14
module: 5
lecture: 7, 8, 9, 14
date: 2023-10-05T17:00:00
version:
  - DM-24
last-revision: ""
notes-taken: false
tags:
  - DM/Sets
---
# Set Operations

> [!intuition] The resultant of any set operation on a set is again a set

### Set Union ($\cup$)
- "$A \cup B$ is the **smallest** set of $S$ which has $A$ and $B$ as subsets" is another way to define Unions

### Set Intersection ($\cap$)


### Set Difference ($\textbackslash$ or $-$)


### Set Symmetric Difference ($\Delta$ or $\oplus$)
$$
A \; \Delta \; B = (A \; \textbackslash \; B) \cup (B \; \textbackslash \; A)
$$
$$
A \; \Delta \; B = (A \; \cup \; B) \; \textbackslash \; (A \; \cap \; B)
$$
![[Pasted image 20231009133641.png]]

### Set Cross Product ($\times$) or Cartesian Product

> [!lecture] Lecture-14

$$
A \times B = \{ (x, y) \; | \; x \in A \text{ and } y \in B\}
$$
- Every element in $A$ pairs with every other element in $B$ .
![[Pasted image 20231009170407.png]]
- For two different sets $A$ and $B$,
$$
A \times B \not= B \times A
$$

- Every element of resultant set is a [[Mathematical Structures#Ordered N-tuple $(a, b, ldots, n)$|tuple]] . 
- Cartesian product can be performed on any finite number of sets.
- Cartesian product is neither commutative not associative.
- Cartesian product of two sets is the set of all [[Relations|relations]] between them.
- Cardinality of cartesian product depends only on the number of elements in both the sets.

> [!example] Example
> ![[Pasted image 20231009193356.png]]


> [!think] What will be $A \times \phi$?
> For any set $A$, $A \times \phi = \phi$ 

#### Cardinality of Cartesian Product
- If $A$ and $B$ are finite sets and $|A| = m$ and $|B| = n$, then
$$
|A \times B| = |A| \cdot |B| = m \cdot n
$$

#### When Cartesian product is commutative?

1. if $A = B$ or 
2. if either $A = \phi$ or $B = \phi$, then
$$
A \times B = B \times A
$$

#### Why Cartesian product is NOT associative?
$$A \times B \times C \not= (A \times B) \times C$$
- $A \times B \times C$ is a set of triples (3 tuples)
- $(A \times B) \times C$ is a set of ordered pairs (2 tuples)
![[Pasted image 20231009193657.png]]
- Set Cross product on the same set i.e. $A \times A$ is the largest [[Equivalence Relation|equivalence relation]] $R$ which is also an [[Relations#Universal and Empty relation|universal relation]] on $A$.

----
## Understanding Set Operations
- Use logic and venn diagrams to interpret the given data about sets.
- Draw venn diagrams and mark areas with numbers (rather than shading) for easier understanding.
> [!warning] Shading the sets is error prone. Avoid it. It also wastes space on scribble pad.

![[Pasted image 20231009132758.png]]

- Truth table can be used to interpret cases of where an element is false.
- For complements, De-Morgan's laws can be used.

> [!youtube]  [Understanding Set Operations](https://www.youtube.com/watch?v=oAbWQomIEbU)
> All variations of set operations - lec9

- When an element $x$ does not belong to both of the sets $A$ and $B$.
$$
(\overline{A\cup B}) = \overline{A} \; \cap \; \overline{B} = \{x \;|\; x \not\in A \text{ and } x \not\in B \}
$$

## Standard Results on Set Operations
$$
|A \cup B| = |A| + |B| - |A \cap B| 
$$

----
# Equality of Sets

- $A = B$, iff $A \subseteq B$ and $B \subseteq A$

----

