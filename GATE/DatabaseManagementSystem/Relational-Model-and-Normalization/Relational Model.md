---
pdf: lec-2, lec-6A
module: 1
lecture: 2A, 2B, 2C, 2D, 6A
date: 2023-10-30T11:31:00
version:
  - DBMS-24
last-revision: 2024-07-05T08:40:00
notes-taken: true
tags:
  - DBMS/RelationalModel
  - DiscreteMath/Sets/Relations
  - DBMS/RelationalModel/Keys
  - DBMS/RelationalModel/IntegrityConstraints
---
# Relational Model

- Relational model is implementation friendly but it is a theoretical model.
- In relational model, a database is a collection of one or more relations where each relation is a table with rows and columns. 

> [!terminology] 
> Table $\equiv$ Relation
> Row $\equiv$ Record $\equiv$ Tuple
> Column $\equiv$ Attribute $\equiv$ Field

- Each relation must have a unique name.
- A relation is a set of records.
- A tuple is a row or record in a relation. A tuple variable can be used to refer any valid tuple.
- Every data in a field must be a single atomic entity i.e. should NOT be divisible.

- There are two theoretical query languages based on the relational model,
	1. [[Relational Algebra]]
	2. Relational Calculus
- [[Structured Query Language]] is a practical query language based on the relational model.

## Schema and Instance

- Schema is a description of data in terms of data model.
- Schema includes,
	- Table name
	- Attributes name
	- Attributes domain

- Each attribute has a domain.
- Schema is represented as 
$$R(A : D_{1}, B: D_{2}, C : D_{3})$$
where $R$ is the name of the relation, $A, B, C$ are attributes and $D_{i}$ are the domain of each attribute.

- The domain of an attribute is its type. For example, integer types, character types, real types, data/time types, etc...
- Multiple relations can have the same schema.

> [!example] 
> account (acct_id, branch_name, balance)
> 
> ![[Relational Model-20240704201031689.webp]]

- The domain of an attribute specifies the set of valid atomic values for the attribute. The values in the domain must be indivisible i.e. a single atomic entity.
- There cannot be 2 elements of the same domain in a single relation cell.

> [!example] 
> The surname "Kumar" cannot be retrieved since the value "Ravi Kumar" is considered *atomic*.
> 
> ![[Relational Model-20240704201627791.webp]]
> 
> The solution to the above problem is to have a separate attribute for the firstname and lastname.
> 
> ![[Relational Model-20240704201802101.webp]]

- Attribute values are atomic, have a known domain and sometimes can be `NULL`.
- `NULL` means not available, not applicable, not known or not recorded or absent based on the scenario.
- For example, 
	- If a student does not have a passport, then the *passport ID* attribute can be `NULL` because it is not available.
	- If an attribute *spouse* exists in a relation, then a young boy or young girl cannot have a spouse and it can be `NULL`.
	- If a student is absent on sports day, then there is no sport played by him, it can be `NULL`.

> [!example] 
> ![[Relational Model-20240704231313053.webp]]

- Instance is the content of the table at a given time i.e. a snapshot of the records.
- Schema rarely changes but Instance changes frequently.

> [!example] 
> ![[Relational Model-20240704201134236.webp]]
> 
> ![[Relational Model-20240704230616877.webp]]

- Degree (arity) of a relation is the number of attributes in its schema. Degree of a relation can never be $0$.
- Cardinality is the number of rows in any given instance of a relation. Cardinality can be $0$ i.e. no records in the table.

## Relation in Relational Model

- [[Relations|Relation]] is the data structure of the relational model visualized as a table.

![[Relational Model-20240704203803346.webp]]

Consider a relation $R\,(A_{1}, A_{2}, \cdots A_{n})$, and each attribute $A_{i}$ has a domain $D_{i}$

|          | $A_{1}$  | $A_{2}$  | $A_{3}$  | $\cdots$ | $A_{n}$  |
| -------- | -------- | -------- | -------- | -------- | -------- |
| $r_{1}$  |          |          |          |          |          |
| $r_{2}$  |          |          |          |          |          |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| $r_{n}$  |          |          |          |          |          |

Let $r_{i}$ be the records of the relation $R$,

Record $r_{1} \in D_{1} \times D_{2} \times \cdots \times D_{n}$
Record $r_{2} \in D_{1} \times D_{2} \times \cdots \times D_{n}$
$\vdots$
Record $r_{n} \in D_{1} \times D_{2} \times \cdots \times D_{n}$

> [!hint] 
> A $k$-tuple is an ordered sequence of $k$ objects(need not be distinct).

Every record belongs to cross-product of attributes, hence a record is an ordered tuple. The order of the attributes matter in a relation.

Let $I$ be an instance of the relation $n$-ary $R$
$$I \subseteq D_{1} \times D_{2} \times \cdots \times D_{n}$$
An Instance of the table (relation) is a subset of cross-product of attributes. Hence the order of tuples does not matter in a relation (except for ordered relation).

Assume $\mid D_{1} \mid = k_{1},\, \mid D_{2} \mid = k_{2}, \,\cdots\,, \mid D_{n} \mid = k_{n}$

The maximum number of records possible i.e. the instance with maximum cardinality is,
$$
\begin{split}
\mid D_{1} \times D_{2} \times \cdots \times D_{n} \mid 
&= \mid D_{1} \mid \times \mid D_{2} \mid \times \cdots \times \mid D_{n} \mid \\
&= k_{1} \times k_{2} \times \cdots \times k_{n} 
\end{split}
$$
The instance with maximum cardinality $I_{\text{max}}$ is same as the cross product of all the attributes,
$$
I_{\text{max}} = \mid D_{1} \times D_{2} \times \cdots \times D_{n} \mid 
$$

The number of different instances possible is,
$$
2^{k_{1} \times k_{2} \times \cdots \times k_{n}}
$$
because to create an instance $I_{p}$, you need records and each record $r_{i}$ has *two choices*, $r_{i}$ can either be in the instance $I_{p}$ or it cannot be in the instance $I_{p}$.

Within a record, every value in a component is related to every other value in the component, hence the name **Relation** for Relational model.

> [!conclusion] 

- Relation is a set of ordered tuples, hence there are no duplicate records and there are no order in the tuples.
- A relation is a subset of cartesian products of attributes.
- The cardinality of an instance can vary frequently as tuples are inserted and deleted frequently.
- In relational model, data is modelled at logical level, not physical level.

![[Relational Model-20240704222537655.webp]]

---
## Keys in Relational Model

Since relation is a set of tuples, no two tuples can have the same value for all the attributes. But some tuples might have the same value for some attributes.

In relational model, keys are used to distinguish individual tuples.
Keys are a property of the relation schema and not individual tuples.

### Super Key

- A set of attributes which can *identify any record uniquely*.
- A set (can also be a singleton set) of attributes which have different values in different records.
- In relational model, there is definitely at least one super key.
- Set of all attributes is always a super key since no two records are same in relational model.
- If two tuples have the same values for the superkey attributes, then they are the same tuple.
- Super key must identify all the non-null values uniquely i.e. `NULL` values are allowed.

- The superset of super keys is again a superkey. Not all superkeys are equally useful.

### Candidate Key

- Candidate key is a *minimal super key*. The redundant attributes in a super key can be removed to form a minimal super key i.e. candidate key.
- There can be many candidate keys for a relation.
- If any one attribute is removed from the candidate key, it is no longer a super key.
- `NULL` values are allowed. It must identify all non-null values uniquely.

- If a candidate key has a single attribute, then it is a simple candidate key.
- If a candidate key has multiple attributes($\ge 2$), then it is a composite candidate key.

### Primary Key

- It is one of the candidate key.
- `NULL` values are NOT allowed in primary key.
- Primary Keys can be of multi-attribute (more than one column) but NO `NULL` value.
- There must definitely be one Primary key in Relational Model.
- Primary key is indicated in the relation schema by an underline.

> [!example] 
> ![[Relational Model-20240705083407426.webp]]

- No other keys are specified in the schema.

> [!summary] Summary of Keys
> - A primary key is a candidate key.
> - In relational model, no tuple can be completely `NULL` since, there must be exactly one primary key in the relational model.
> - Superset of candidate keys are super keys.
> - Keys constrain the set of tuples that can appear in a relation.

## Prime and Non-prime attributes
> [!lecture] Lecture-6A

- Prime attribute is an attribute of a relation $R$ if it is a member of some candidate key of $R$.
- Non-prime attribute is an attribute of a relation $R$ if it is not a member of any candidate key of $R$.

> [!think]

- A non-prime attribute can never determine a prime attribute.
- A non-prime attribute can determine another non-prime attribute.
- A prime attribute can determine another prime attribute.

## Integrity Constraint (IC)

- Integrity Constraints are constraints on data integrity.
- Integrity Contstraint (IC) is a condition specified on the database **schema** that prevents the entry of incorrect information.
- If a database instance satisfies all the constraints specified on the database schema then it is called a **legal instance** or valid instance.
- Many kinds of Integrity Constraints IC can be specified in the relational model.
- IC checks are enforced by DBMS software at run-time. ﻿When a database application is run, the DBMS checks for violations and disallows changes to the data that violate the specified ICs.
- In some cases, instead of disallowing instances, DBMS performs some compensating changes to make the instance valid.
- IC's are defined on Schema and a part of DDL.

---
