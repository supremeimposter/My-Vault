---
pdf: 
module: 4
lecture: "1"
date: 2023-11-04T14:59:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/SQL
  - DBMS/Queries
---

> [!lecture] Lecture-1
# SQL
- SQL is the standard relational database language.
- SQL has two sub-languages,
	1. Data Definition sub-Language (DDL) - deals with schema
	2. Data Manipulation sub-Language (DML) - deals with data (tuples) and querying
- There is NO concept of efficiency of inefficiency in SQL queries.

> [!check] SQL-92 Standard is important for GATE Exam rather than practical DBMS standard.

## SQL vs Relational Model
- SQL is different from [[Relational Model]]

````col
```col-md
flexGrow=1
===
### SQL
- A table is a [[Set Definition#Multi Sets|multi-set]] of tuples.
- Duplicate rows are allowed.
- `NULL` is allowed.
- Not necessary to have a primary key because of multi-set nature.
- May or may not contain any super key or candidate key.
```
```col-md
flexGrow=1
===
### Relational Model
- A relation is a set of tuples.
- No two tuples are same. There are no duplicate tuples.
- `NULL` is not allowed except for outer join.
- It is necessary to have exactly one primary key.
- It contains super keys and candidate keys.
```
````
## Analysis of Bag
> [!lecture] Lecture-4


## SQL Sub-languages

### DDL
- It contains commands related to the schema.

### DML
- Data retrieval queries are a part of DML
- Data retrieval queries does not change the original database

---
