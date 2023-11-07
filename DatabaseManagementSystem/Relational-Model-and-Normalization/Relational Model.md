---
pdf: lec-2
module: 1
lecture: 2A, 2B, 2C, 2D
date: 2023-10-30T11:31:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/RelationalModel
---
# Relational Model
> [!lecture] Lecture-2A

- Relational model is implementation friendly but it is a theoretical model.
- Every data in the table must be a single atomic entity i.e. should NOT be divisible.
- Two records can NEVER be same in a relational model.

## Schema vs Instance
- Schema contains,
	- Table name
	- Attributes name
	- Attributes domain
- Schema is represented as $R(A, B, C)$, where $R$ is the relation and $A, B, C$ are attributes.
- Instance is the contents of the table at a given time, a snapshot of the records
- Schema rarely changes but Instance changes frequently

### Degree and Cardinality
- Degree (arity) of a relation is the number of attributes in its schema.
- Cardinality is the number of rows in any given instance of a relation.

> [!summary] 
> - Degree is the number of columns 
> - Cardinality is the number of rows


## Why table is called a relation?
> [!lecture] Lecture-2B

- Instance in a table is a subset of cross-product of attributes (columns)
- Every record belongs to cross-product of attributes (columns)

> [!important] 
> Relation = collection of records

- Order of rows does NOT matter as a relation does not have an order (except ordered relation). and CANNOT have duplicates.
- Order of attributes matter, since every record is an ordered tuple.
- A relation is a set of records. No duplicates are allowed.

## Null values
> [!lecture] Lecture-2C

- `NULL` means not available, not known or not recorded.

## Keys
> [!lecture] Lecture-2D

### Super Key
- A set of attributes which can identify any record uniquely.
- A set of attributes which have different values in different records.
- Set of all attributes is also a super key.
- Super key must identify all the non-null values uniquely i.e. `NULL` values are allowed.

### Candidate Key
- It is a minimal super key. If any one attribute is removed from the candidate key, it is no longer a super key.
- `NULL` values are allowed. It must identify all non-null values uniquely.


### Primary Key
- It is one of the candidate key.
- `NULL` values are NOT allowed in primary key.
- Primary Keys can be of multi-attribute (more than one column) but NO `NULL` value.
- There must be definitely one Primary key in Relational Model.

> [!summary] Summary of Keys
> - A primary key is a candidate key.
> - In relational model, no tuple can be completely `NULL` since, there must be exactly one primary key in the relational model.
> - Superset of candidate keys are super keys.


> [!convention] 
>> The term **key** `fas:Key` refers to super key or candidate key or primary key depending on the author. But typically the term **key** is used to refer to **candidate key**.

---
## [[Constraints in Relational Model]]



----