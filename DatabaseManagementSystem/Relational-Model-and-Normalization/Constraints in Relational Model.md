---
pdf: lec-4
module: 1
lecture: 4A, 4B, 4C
date: 2023-11-04T18:30:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/RelationalModel
---

# Integrity Constraint (IC)
> [!lecture] Lecture-4A
- constraints on data integrity.
- Prevents the entry of incorrect information.
- Many kinds of Integrity Constraints IC can be specified in the relational model.
- IC's are defined on Scheme and a part of DDL.
- IC checks are enforced by DBMS at run-time.

> [!terminology] 
> **Legal or Valid instance** - An instance which satisfies all the IC's that are defined over the schema.

## Standard Integrity Constraints

### Domain Integrity Constraint


### Not Null Integrity Constraint


### Key Integrity Constraint
- Key integrity constraint means uniqueness constraint.

### Entity Integrity Constraint
- Primary key values should NOT contain `NULL` values.

### Primary Key Integrity Constraint
- Primary key attributes must be NOT NULL and unique.


> [!info] 
> If there is any violation in the above Constraints, then DBMS disallows the changes. 

### Referential Integrity Constraint (Foreign Key Constraint)
> [!lecture] Lecture-4B

- **foreign key** is a key (usually primary key) in a foreign table.
- Foreign key necessarily need not be a key.
- Foreign key can contain `NULL` values and they need not be unique.
- Foreign key can be in the same table as the key which it is referring to.
- In a table, there can be 0 or more foreign keys.

- Referenced attribute must be a candidate key or a primary key.
- Referencing attribute is the foreign key.
![[Constraints in Relational Model-20231105095137087.webp]]

- With respect to a foreign key, 
	- The table which contains the foreign key is called **referencing table** (child table)
	- The table to which the foreign key refers a key is called **referenced table** (parent table)

![[Constraints in Relational Model-20231105112424265.webp]]

- Foreign key can be of multiple attributes.
	- When foreign can refers to multiple attributes, then the same tuple of data must be present in the referenced table (parent table)


> [!discussion] 
> ![[Constraints in Relational Model-20231105102538321.webp|Lecture 4B]]


#### Actions Taken by DBMS to enforce Referential Integrity Constraint
> [!lecture] Lecture-4C

![[Constraints in Relational Model-20231105112424265.webp]]

##### When referenced relation is updated
- **Insertion** operation into referenced does not cause any violation to Referential IC. But it may cause primary key IC in the referenced relation.
- **Deletion** and **Updation** causes violation to Referential IC.
- If violation happens then there are three choices
	- No action (Reject violating modification)
	- Cascade (make the changes in child table)
	- Set NULL or Set default (foreign key value is set to null or default)

- The rules are defined on the **referencing table**.

##### When referencing relation is updated
- If violation happens, then the violating modification operation is rejected.
- **Deletion** from the referencing table does NOT cause any violation to Referential IC.


> [!summary] 
> - Insert into referenced table and Delete from referencing table do NOT cause any violation to Referential IC.
> - Insert into referencing table and Delete from referenced table MAY OR MAY NOT cause violation to Referential IC.


### [[Functional Dependency]]

---
