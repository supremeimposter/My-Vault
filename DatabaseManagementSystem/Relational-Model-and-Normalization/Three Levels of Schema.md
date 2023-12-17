---
pdf: lec-10
module: 1
lecture: "10"
date: 2023-11-15T08:24:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/RelationalModel
---
# Three Levels of Schema
> [!lecture] Lecture-10
>> [!youtube] [Data Independence in DBMS | Three Levels of Schema | Physical, Logical Data Independence | Deepak - YouTube](https://www.youtube.com/watch?v=nSAl7ngCyjw)

- Feature provided by DBMS software.
- DBMS enforce **access control** that what data is visible to different classes of users.
- To provide [[Three Levels of Schema#Data Independence|data independence]].

![[Three Levels of Schema-20231115085742091.webp]]

1. Physical schema - how the data is stored
2. Conceptual or Logical schema - what data is there in the database
3. External schema - how different users see different data

![[Relational Model#Schema vs Instance]]

## Conceptual or Logical Schema
- Most of the times application programmer cares only about what data is stored in the database rather than how it is stored.
- When an SQL query is written to retrieve data, then it is based on conceptual schema.
- Conceptual schema has nothing to do about instances or records. It is just what type of data is stored in each relation.
- It is time-invariant, rarely changes.

## Physical or Internal Schema
- What data structure is used to store the data in the database.
- It is created based on conceptual schema.

## External or Viewed Schema
- data privacy
- It is not stored on DB but a virtual table, it is derived from conceptual schema by application programs based on user requirements.
- When there is a change in conceptual schema, then there is a possibility that there is a need to change external schema.

> [!NOTE] 
> - View is different from instance
> - View is an application program
> - Instance is a snapshot of conceptual schema


---
# Data Independence


## Physical Data Independence
- Independence of Conceptual schema from physical changes.
- Measure of how much physical schema can change without affecting the conceptual schema.
- For DBMS software, it is less work to achieve physical data independence.


## Logical Data Independence
- External schema independence from conceptual schema changes.
- Our expectation from DBMS software is changes in Conceptual schema should NOT (or rarely) lead to changes in the External schema application program. 
- Changes in Logical Schema causes changes in application programs most of the times.
- Measure of how much conceptual schema can change without affecting the application programs for external schema.


> [!summary] 
- Both independence are difficult to achieve.
- LDI has more dependency since External schema is derived from Conceptual schema by application programs. So LDI is harder to achieve than PDI.