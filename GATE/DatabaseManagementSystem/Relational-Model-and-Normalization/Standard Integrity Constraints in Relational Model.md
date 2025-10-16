---
pdf: lec-4
module: 1
lecture: 4A, 4B, 4C
date: 2023-11-04T18:30:00
version:
  - DBMS-24
last-revision: 2024-07-11T18:40:00
notes-taken: true
tags:
  - DBMS/RelationalModel/Keys
  - DBMS/RelationalModel/IntegrityConstraints
---
# Standard Integrity Constraints

Constraints can be any arbitrary predicate, but testing them may be costly. These standard integrity constraints can be tested with minimal overhead. Database systems check these constraints every time the database is updated.

## Domain Integrity Constraint

Every value in the column must be from from the domain of that attribute and the value must be atomic. 

> [!example] 
> ![[Constraints in Relational Model-20240705104726279.webp]]
> ![[Constraints in Relational Model-20240705104123677.webp]]

## Not Null Integrity Constraint

If an attribute is specified to not have `NULL` entries, then it cannot have any `NULL` values.

## Key Integrity Constraint

Key integrity constraint means uniqueness constraint.
In Key Integrity constraint, [[Relational Model#Candidate Key|candidate key]] is referred to as key.
Every key attributes must be unique in every record i.e. the set of attributes must identify a tuple uniquely.
Key Integrity constraints allow `NULL` values but checks the uniqueness of not-null values.

> [!convention] 
> The term **key** :BoBxsKey: refers to super key or candidate key or primary key depending on the author. But typically the term **key** :BoBxsKey: is used to refer to **candidate key**.

## Entity Integrity Constraint

Primary key values should NOT contain `NULL` values. 

If there are `NULL` values in primary key for two records, we may not be able to reference one of the two records uniquely from other relations.

> [!example] 
> ![[Standard Integrity Constraints in Relational Model-20240705110614889.webp]]

## Primary Key Integrity Constraint

The values in the primary key attributes must be unique and must not contain NULL.

> [!info] 
> If there is any violation in the above Standard Integrity Constraints, then DBMS disallows the changes. 

---
## Referential Integrity Constraint

- Sometimes the information stored in a relation is *linked* to information stored in another relation. If data in one of the relations is modified, then the linked data in the other relations also has to be modified, to keep the data consistent.
- Referential integrity constraint is also called as Foreign Key Constraint.

- A foreign key $FK$ of a table $R$ is a set of attributes of $R$ that references a candidate key of a foreign table. So $FK$ of $R$ is a key in foreign table, hence it is called foreign key.

> [!tip] 
> - The table which contains the foreign key is called **referencing table** (child table)
> - The table which contains the candidate key that the foreign key references, is called **referenced table** (parent table)
>
> - Foreign key in the child table refers a candidate key in the parent table.

![[Standard Integrity Constraints in Relational Model-20240705134725667.webp]]

> [!example] 
> ![[Standard Integrity Constraints in Relational Model-20240705140633720.webp]]
> 
> Employee.Dno references Department.Dnumber
> Department.Dnumber is a primary key in Department table
> Employee.Dno is a foreign key
> 
>> Dno is not a key in Employee table
>> Dno refers a key in Department table (foreign table) 
>> Dno is a key in foreign table, hence it is called foreign key.

- It is not necessary that the foreign key and the key it is referring to has to have the same name. But the domain must be same.

> [!example] 
> ![[Standard Integrity Constraints in Relational Model-20240705154513685.webp]]
> 
> Enrolled.sid is referring to Students.sid which is the primary key of Students table.
> Enrolled.sid is not a key in Enrolled table as the same student can be enrolled in different courses.

- Foreign key necessarily need not be a key.
- Foreign key can contain `NULL` values and they need not be unique.
- Every non-null values present in the foreign key must be present in the key it is referring to.
- Foreign key can be in the same table as the key which it is referring to.
- For a table, there can be 0 or more foreign keys.

> [!example] 
> ![[Standard Integrity Constraints in Relational Model-20240705152726498.webp]]
> 
> ![[Standard Integrity Constraints in Relational Model-20240705171234389.webp]]

- Referencing table and referenced table are defined in foreign key's point of view.
- Referenced attribute must be a candidate key or a primary key.
- Referencing attribute is the foreign key.

- Foreign key can be of multiple attributes.
- When foreign key refers to multiple attributes, then the set of attributes of the same type must be present in the referenced table (parent table).
- The order of specification of the attributes in multi-attribute foreign key is important.

> [!example] 
> ![[Standard Integrity Constraints in Relational Model-20240705171506705.webp]]

When the foreign key is of multi-attribute, then the same tuple of data in the referencing table must be present in the referenced table.

> [!example] 
> ![[Standard Integrity Constraints in Relational Model-20240705153754819.webp|Violation of Referential Integrity Constraint]]
> 
> The tuple data present in the foreign key must be available in the key set it is referencing to. 
> 
> ![[Standard Integrity Constraints in Relational Model-20240705154149401.webp|Violation of Referential Integrity Constraint]]

> [!NOTE] 
> Key constraints and Entity integrity constraints are specified on individual relations, whereas Referential integerity constraint is specified between two different relations.

![[Standard Integrity Constraints in Relational Model-20240711100110325.webp]]

### Enforcing Referential Integrity Constraint

![[Constraints in Relational Model-20231105112424265.webp]]

#### When referenced relation is updated

- **Insertion** operation into referenced table never causes any violation to Referential IC. But it may cause primary key IC in the referenced relation if the value inserted already exists in the referenced relation.
- **Deletion** and **Updation** can cause violation to Referential IC.
- If there is no violation, then the changes are allowed.

- If violation happens then there are three choices,

1. No action (Reject violating modification)

![[Standard Integrity Constraints in Relational Model-20240705175349357.webp]]

2. Cascade Delete or Cascade Update (changes to the referenced table are mimicked at the foreign key)

![[Standard Integrity Constraints in Relational Model-20240705175559246.webp]]
![[Standard Integrity Constraints in Relational Model-20240705175619981.webp]]

3. Set NULL or Set DEFAULT (foreign key value is set to null or default)

![[Standard Integrity Constraints in Relational Model-20240705175645504.webp]]
![[Standard Integrity Constraints in Relational Model-20240705175701464.webp]]

- The actions for violating changes are always defined on the **referencing table** since the referencing table has the foreign key which is referring to a candidate key in referenced table.

#### When referencing relation is updated

- If violation happens, then the violating modification is always rejected.
- **Deletion** from the referencing table does NOT cause any violation to Referential IC.

> [!summary] 
> - Insert into referenced table and Delete from referencing table do NOT cause any violation to Referential IC.
> - Insert into referencing table and Delete from referenced table MAY OR MAY NOT cause violation to Referential IC.
> - DBMS performs compensating changes to the violating modifications only when the *referenced relation is updated*.

---
