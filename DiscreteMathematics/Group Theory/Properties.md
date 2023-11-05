---
pdf: lec-1-6, lec-7-12, lec-13-18, lec-19-20, lec-22
module: 7
lecture: 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 19, 20
date: 2023-11-01T15:20:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/GroupTheory
  - DM/GroupTheory/Properties
---
# Closure Property
> [!lecture] Lecture-4

- Operation on any two elements in the base set (same or different), the result must be an element from the base set.
- $(S, \#)$ satisfy closure property iff $\forall a, b \in S \; a \# b \in S$ 

## Operation table
- Operation table is used to check the closure property.
- Read as "row operation column"

## Binary Operation
- $\#$ is binary operation on base set iff base set is closed under the operation $\#$.
- The binary operation $\#$ must be applicable and suitable for the elements in the base set.

> [!example] 
> If the binary operation is set-difference, then the base set should be set of sets rather than a set containing elements.
> $(\;\{\;\{a\}, \{a, b\}\;\}, \setminus)$
- $(S, \#)$ and $\#$ is a binary operation iff $\# : S \times S \rightarrow S$ where the co-domain is the base set so it is closed under the operation $\#$ .
- Binary operation is same as closure property.
- $\star$ is used to represent Binary Operation. 

### Number of Binary Operations
- Binary operation is a binary function. It is same as number of functions form $S \times S \rightarrow S$.
	- Number of functions = Number of operations = ${\mid S \mid}^{\mid S \times S \mid}$

---
# Associative Property
> [!lecture] Lecture-5
- Addition and multiplication are always associative.
- Associative Property has to be checked for every triple of elements.

## Associativity and Parenthesis
> [!lecture] Lecture-19
- Associative property allows use to remove parenthesis from expressions.
- Associative property removes ambiguity from expressions without parenthesis. i.e. $a \;\#\; b \;\#\; c \;\#\; d$ is unambiguous if $\#$ associative.

## Operation Table
> [!lecture] Lecture-22
- If $\mid S \mid = n$, then there are $n^3$ triples.

> [!NOTE] 
> Questions such as find whether a structure is associative or not from Cayley table are not asked.


----

# Identity Property
> [!lecture] Lecture-6
- Identity element does not affect the operation.
- The identity element is fixed for all the elements in the base set.
- $\forall a \in A$, in $(A, \#)$
	- $a\; \#\; e = a$
	- $e \;\#\; a = a$

## Properties of Identity element
> [!lecture] Lecture-8

- In every closed structure, there is at most one identity element.
- If there exists an identity element, it is unique.
- $e\; \# \; e = e$ i.e. identity of identity element is itself.

## Operation Table



# Inverse Property
> [!lecture] Lecture-9

- $a^{-1} \; \in S$ is the inverse of the element $a \in S$ such that,
$$
a \; \# \; a^{-1} = e = a^{-1} \; \# \; a
$$
- An algebraic structure has inverse property iff every element in the base set has an inverse element.
- If any element in an algebraic structure does NOT have an identity element, then identity property is NOT defined.
- The inverse of the identity element is the identity element itself.
- For elements other than identity element, it is possible to have more than one inverse.
- If a structure does NOT have inverse property, then it does NOT mean that all the elements do not have an inverse.

> [!discussion] Lecture-9
> ![[Pasted image 20231102152316.png]]


# Commutative Property
> [!lecture] Lecture-10
- Commutative property must be satisfied by all the elements in the base set.
$$
\forall\; a, b \in S\; (a \star b = b \star a)
$$
- A structure is NOT commutative if 
$$
\exists\; a, b \in S \; (a \star b \not = b \star a)
$$
- $a, b$ can be same or different

## Number of Commutative Binary Operations
> [!lecture] Lecture-12



# Cancellation Property
## Left Cancellation Property


## Right Cancellation Property


# Idempotent Property
- All elements in the base set should satisfy idempotent property in order for the structure to have idempotent property.
- Every structure do NOT have idempotent property.
$$
\forall a \in S, \; a \;\#\; a = a
$$
- An element which satisfies the above property is called idempotent element.
- Binary operation on the same element.

# Cayley Table
> [!lecture] Lecture-20
- Cayley Table is also called as Operation table or Multiplication table.
- A binary operation on a finite set can be represented in the form of arrays called Cayley Table.
- Read the Cayley table as "row operation column".
- All the properties can be verified using this table.

