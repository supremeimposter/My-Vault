---
pdf: lec-1,2
module: 2
lecture: "1"
date: 2023-11-15T17:25:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Queries
  - DBMS/RelationalAlgebra
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


> [!search] Extended Projection

## Properties
- It is NOT commutative.
