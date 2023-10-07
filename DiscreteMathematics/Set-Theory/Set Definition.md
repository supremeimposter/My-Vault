---
pdf: lec-1-4, lec-5, lec-6-8
module: 5
lecture: 1, 2, 3, 4, 5, 6
date: 2023-09-30T20:19:00
version:
  - DM-2024
notes-taken: false
---

- Set is a collection of any elements or sets.
- The elements don't have to have any correlation between them.

## Properties of Set
- Set Properties - unordered and distinct elements
	- Duplicates are not counted in a set, only distinct elements are counted.
	- Order of the elements does not matter in a set. They can be written in any order.


> [!question] How many elements does the following set contain?
> S = {a, b, a, a, 1, 1, 2, 3, 3, 2, 3}
>> [!info]- Answer
>> The set contains 5 elements

## Set Membership
- If an object x "belongs to" a set S then, $x \in S$
- If an object y "does not belong to" a set S then, $y \not\in S$

- `X` $\not=$ { `X` } i.e. An element is not same as the element in a set.


> [!intuition] 
> If $x$ belongs to $Q$, then $x \in Q$ .
> If $x$ does not belong to $Q$, then it can be denoted as  $x \not\in Q$ or $x \in \bar{Q}$ .


![[Pasted image 20230930222915.png]]


## Infinite and Finite Sets
- **Finite set** = set whose no of elements is a whole number.
- **Infinite set** = set whose no of elements is not whole number.

> [!brain] $\infty$ is not a number, it is a concept
> $+\infty$ or $-\infty$ $\not\in$ any set.

## Cardinality of a set
- Cardinality of a set $S$ is the number of element it contains. It is denoted by $|S|$
- Let $S$ = {$\phi$, {a, b}, 1, 5, 6}, $|S| = 5$ . i.e. A subset is counted as an element.
- Let $\mathbb{Z}$ be the set of all integers such that $|\mathbb{Z}| = \infty$

## Null set
- Also called as empty set of void set.
- It is denoted by $\phi$ or $\{\}$.
- $|\{\}| = |\phi| = 0$

> [!note] 
> $\phi \not= \{ \phi \}$
> $|\{ \phi \}| = 1$

---

## Set Representation
1. Verbal Representation
2. Venn diagram
3. List representation (Roster representation)
4. Set Builder representation

### Set Builder Notation
![[Pasted image 20230930230929.png]]
![[Pasted image 20230930231018.png]]

![[Pasted image 20230930231135.png]]

---

## Subsets

> [!NOTE] If there are two sets $P$ and $Q$ and $P \subseteq Q$ iff
> $\forall x\; (x \in P \rightarrow x \in Q)$

- A subset is a sub-collection while a set is a super collection of elements.
- Every element in P must be in Q for $P \subseteq Q$ .
- A subset of a set $P$ can be formed by removing one or many or none of the elements from the set $P$.
- Null set or empty set - a set that contains no element - $\phi$
- Every set is its subset.
	- A set $Q$ then, $Q \subseteq Q$
- $\phi$ is a subset of every set.
	- For a set $Q$, $\phi \subseteq Q$ .
	- $\phi \subseteq \phi$ 

- Venn diagram showing that $A \subseteq B$
![[Pasted image 20231004134616.png]]
- Subset relationship is transitive.

### Proper Subset
- A set $P$ is a proper subset of $Q$, iff $P \subseteq Q$ but $P \not= Q$.
- Proper subset can also be denoted by $\subset$

![[Pasted image 20231004135955.png]]

### Subsets vs Elements
> [!brain] Do not confuse between $\in$ and $\subseteq$

- Consider the set S,
$$
S = \{ a, b, \{1, 2\}, z, 1 \}
$$
- The elements of set are 
	- $a$
	- $b$
	- $\{ 1, 2 \}$
	- $z$
	- $1$
- $|S|$ = 5

> [!question] different variations
> $a \in S$
> $\{a\} \not\in S$ but $\{a\} \subseteq S$
> $\{1, 2\} \in S$ but $\{2\} \not\in S$
> $\{z\} \subseteq S$ but $\{z\} \not\in S$
> $\{ \{1, 2\} \} \subseteq S$ but $\{ \{1, 2\} \} \not\in S$
> $\{a, b, \{1, 2\} \} \subseteq S$ but $\{a, b, \{1\} \} \not\subseteq S$

![[Pasted image 20231004140030.png]]

### Important results
- If $S \subseteq A$ and $S \subseteq B$, then $S \subseteq A \; \cap \; B$ .
- There can be two sets $A$ and $B$ such that $A \subseteq B$ and $A \in B$ 
	- $A = \{1\}$ and $B = \{1, \; \{1\} \}$

---

## PowerSet

- The Powerset $\mathcal{P}(S)$ is the set of all subsets of the set $S$ .
$$
\mathcal{P}(S) = \{ T \; | \; T \subseteq S \}
$$
- $x \in \mathcal{P}(A)$ iff $x \subseteq A$

![[Pasted image 20231004135955.png]]

##### Powerset of $\phi$
- $\mathcal{P}(\phi) = \phi$
- $|\mathcal{P}(\phi)| = 1$ but $|\phi| = 0$

##### Powerset of $\{\phi\}$
- $\mathcal{P}(\{\phi\}) = \{  \{\}, \{ \phi \}  \}$

![[Pasted image 20231004182103.png]]
![[Pasted image 20231004182231.png]]


> [!important] Powerset of any set $S$ will have $\phi$ but it is NOT necessary for the set $S$ to contain $\phi$


### Number of subsets for a set
- For creating a subset for a set $S$, there are two choices for each element.
	1. The element appears
	2. The element does not appear

- For a set $S$ containing `n` elements, number of subsets of $S = 2^n$
- For any set $S$, $|\mathcal{P}(S)| = 2^{|S|}$
- $|\mathcal{P}\;|\mathcal{P}(S)|\;| = 2^{|\mathcal{P}(S)|}$

- Number of proper subsets for a set $S$ = $2^{|S|} - 1$
---
## Universal Set $(U)$
- The Universal set $U$ is the set containing everything currently under consideration.
- Content of $U$ depends on the context, sometimes explicitly stated, sometimes implicit.

> [!suggestion] Universal Set not mentioned
> If the Universal set is not mentioned or given in the question, consider the union of the given sets as the universal set

---
## Disjoint Sets
- Two sets $P$ and $Q$ are said to be disjoint, if they do not have any common elements.
- $A = \phi$ and $B = \phi$ are also disjoint, since there is no element to be common.
- $P = \{a\}$ and $Q = \phi$ are also disjoint, since there are no elements in $Q$ that are in $P$ .