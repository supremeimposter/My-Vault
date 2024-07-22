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
  - DiscreteMath/Sets
  - "#MathematicalStructure"
---
# Set Operations

> [!intuition] The resultant of any set operation on a set is again a set

### Set Union ($\cup$)

"$A \cup B$ is the **smallest** set of $S$ which has $A$ and $B$ as subsets" is another way to define Unions

### Set Intersection ($\cap {}$)

$$
A \; \cap \; B = A - (A - B) = B - (B - A) 
$$

### Set Difference ($\textbackslash$ or $-$)

$$
\begin{split}
A - B &= A \cap \overline{B} \\
A - B &= \overline{B} - \overline{A}
\end{split}
$$

![[Set Operations-20240719105614506.webp]]

### Set Symmetric Difference ($\Delta$ or $\oplus$)

$$
\begin{split}
A \; \Delta \; B &= (A \; - \; B) \cup (B \; - \; A) \\
A \; \Delta \; B &= (A \; \cup \; B) \; - \; (A \; \cap \; B)
\end{split}
$$
![[Set Operations-20240722132200894.webp]]

### Set Complementation

$$
A^{c} = U - A
$$

### Set Cross Product ($\times$) or Cartesian Product
> [!lecture] Lecture-14

$$
A \times B = \{ (x, y) \; | \; x \in A \text{ and } y \in B\}
$$
- Every element in $A$ pairs with every other element in $B$ .

![[Set Operations-20240722132226041.webp]]

- For two different sets $A$ and $B$,
$$
A \times B \not= B \times A
$$

- Every element of cross product of $n$ sets is a [[Mathematical Structures#Ordered N-tuple $(a, b, ldots, n)$|ordered n-tuple]]. 
- Cartesian product can be performed on any finite number of sets.
- Cartesian product of any finite number of sets is **neither commutative not associative**.
- Cartesian product of two sets is the set of all [[Relations|relations]] between them.

> [!example] Example
> ![[Pasted image 20231009193356.png]]

- For any set $A$, $A \times \phi = \phi$ , since no tuple can be constructed. Similarly $A \times B \times \phi \times C = \phi$.

- If $A,B,C$ are finite sets and $|A| = m$, $|B| = n$, $|C| = o$ then
$$
\begin{split}
|\,A \times B\,| &= |\,A\,| \cdot |\,B\,| = m \cdot n \\
|\, A \times A \times B\, | &= |\, A\, | \cdot |\, A \,| \cdot |\, A \,| = m \cdot m \cdot  n \\
|\, A \times B \times C\,| &= |\, A \,| \cdot |\, B \,| \cdot |\,C\,| = m \cdot n \cdot o
\end{split}
$$

> [!header] When Cartesian product is commutative?

1. if $A = B$ or 
2. if either $A = \phi$ or $B = \phi$, then
$$
A \times B = B \times A
$$

> [!header] Why Cartesian product is not associative?

- $A \times B \times C$ is a set of triples (3 tuples)
- $(A \times B) \times C$ is a set of ordered pairs (2 tuples)

![[Set Operations-20240722181111476.webp]]

$$
\begin{split}
A \times (B \times C) &\not= (A \times B) \times C \\
A \times B \times C &\not= (A \times B) \times C \\
\end{split}
$$

- Set Cross product on the same set i.e. $A \times A$ is the largest [[Equivalence Relation|equivalence relation]] $R$ which is also an [[Relations#Universal and Empty relation|universal relation]] on $A$.

----
# Understanding Set Operations

- Use logic and venn diagrams to interpret the given data about sets.
- Draw venn diagrams and mark areas with numbers (rather than shading) for easier understanding.

![[Set Operations-20240722150917720.webp]]

> [!tip] 
> Shading the sets is error prone. Avoid it. It also wastes space on scribble pad.

- Truth table can be used to interpret cases of where an element is false.
- For complements, De-Morgan's laws can be used.

> [!youtube]  [Understanding Set Operations](https://www.youtube.com/watch?v=oAbWQomIEbU)
> All variations of set operations - lec9

- When an element $x$ does not belong to both of the sets $A$ and $B$.
$$
(\overline{A\cup B}) = \overline{A} \; \cap \; \overline{B} = \{x \;|\; x \not\in A \text{ and } x \not\in B \}
$$

> [!example] 
> ![[Set Operations-20240722190008906.webp]]
> 
> ![[Set Operations-20240722190446600.webp]]

![[Set Operations-20240722194138083.webp]]

# Standard Results on Set Operations

$$
|A \cup B| = |A| + |B| - |A \cap B| 
$$

---
