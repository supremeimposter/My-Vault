---
pdf: lec-1-2
module: 2
lecture: "1"
date: 2023-11-15T13:48:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/RelationalAlgebra
  - DBMS/Queries
---
# Relational Algebra
> [!lecture] Lecture-1

- Queries can be written using schema but evaluation is done by instance.
- Attributes can be accessed using the position number.
- Both inputs and output are instances.

## Analogy to Mathematical Algebra
- Values are needed to evaluate variables.
- Some operators can be derived from other operators.
- Schema (Relation) are analogous to variables and instances are analogous to values.
![[Relational Algebra-20231115162732676.webp]]

## Operators in Relational Algebra
- There are unary and binary operators in Relational Algebra.
- Unary takes one table as input and binary takes two tables as input.



- There are 6 [[Basic Operations in Relational Algebra]]
	1. Selection
	2. Projection
	3. Set Union
	4. Set Difference
	5. Cartesian Product
	6. Rename
- [[Derived Operations in Relational Algebra]]
	1. Inner Join
	2. Division
	3. Intersection
	4. Outer Join
