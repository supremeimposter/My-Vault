---
pdf: 
module: 4
lecture: "1"
date: 2023-11-23T10:28:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Queries
  - DBMS/SQL
---

# SQL Queries
> [!lecture] Lecture-1

## Basic form

- `SELECT`and `FROM` clauses are mandatory in all SQL queries, whereas `WHERE` is optional.

- When primary key attributes (columns) are selected from the cross product of two tables, then it is guaranteed to NOT contain duplicate rows.
- Once an alias for a table is declared in the query, then the original table name cannot be used in the query.
- `DISTINCT` works on the whole instance in the final output.
- Order of conceptual evaluation of an SQL query
	1. Cross product (`FROM`)
	2. Discard the rows that fail predicate (`WHERE`)
	3. Discard unwanted columns (`SELECT`)

> [!conflict] 
> The conceptual evaluation is NOT followed by any DBMS software. And also SQL is declarative and NOT procedural.

## Range Variables
- When the same table is used more than once, then it is mandatory to use aliases which is called a range variable.