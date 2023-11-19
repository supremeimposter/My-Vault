---
pdf: lec-1,2
module: 2
lecture: 1, 2
date: 2023-11-15T17:25:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Queries
  - DBMS/RelationalAlgebra
  - DBMS/RelationalModel
---

> [!lecture] Lecture-1
# Selection Operator

- It is denoted by ${} \sigma_p(r) {}$
- It is an unary operator.
- Select the desired tuples and discard the remaining tuples. (Horizontal Partition)
$$
S = \sigma_{condition} (r)
$$
$$
\sigma_{p}(r) = \{t \mid t \in r \text{ and } p(t)\}
$$

- Schema does not change in the output, only the desired tuples will be there in the output.
- This operator checks every operator **individually and independently**.
- This operator cannot compare a tuple with other tuples. It can only see one tuple at a time.

## Properties
- It is commutative


# Projection Operator

- It filters attributes from the original relation (Vertical Partition).
- It is denoted by ${} \Pi_{attribute-list}\;(r) {}$
- It removes duplicates tuples in the resultant relation.


> [!search] 
> Extended Projection in Relational Algebra

## Properties
- It is NOT commutative.


# Set Operations on Relational Algebra
> [!lecture] Lecture-2

- A relation contains a set of tuples, [[Set Operations]] can be performed.
- Set operations are binary operations.
## Union Compatible
- It is also called as type-compatible.
- ${} \cup, \cap, \textbackslash {}$ operations requires relations with union compatible schema.

- ${} R$ is union compatible with $S$ iff
	- Number of attributes in $R$ = Number of attributes in $S$
	- ${} i^\text{th} {}$ attribute of $R$ must have the same domain as ${} i^\text{th} {}$ attribute of $S {}$.
- Attribute names can be different in both the relations.


## Set Union
- ${} R \; \cup \; S {}$ has the schema of $R$.
- ${} S \; \cup \; R {}$ has the schema of ${} S {}$.

- Set union is commutative though the schema is different. We are concerned only about the data.

## Set Intersection
- Set intersection is not a basic operation. It is a derived operation.

## Set Difference

## Cartesian Product

- Cross product of two relations does not require union compatibility.
- Schema of ${} R \times S {}$ is ${} (R, S) {}$  
- Cartesian product of relations is commutative. i.e. Ordering of columns is unimportant as far as contents are concerned.

> [!convention] 
> **When two attributes have same name in two different relations ${} R$ and $S {}$**


# Assignment Operation
- It is NOT a basic operation.

# Rename Operation
- It is denoted as ${} \rho_S (R) {}$. 
- A new copy of the relation $R$ is created under the name $S {}$.
- Attributes can also be changed.
- A copy of the relation can also be renamed in the main memory.


# Summary of Basic Operations
- The below conditions are equivalent iff the condition ${} c {}$ acts only on the attributes of $A$
$$
\sigma_c\;(\Pi_A \;R) \equiv \Pi_A\;(\sigma_c\;R)
$$
