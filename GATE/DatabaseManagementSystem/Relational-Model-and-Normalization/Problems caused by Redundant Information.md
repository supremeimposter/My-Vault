---
pdf: lec-7A-7C
module: 1
lecture: 
date: 2024-07-12T19:07:00
version:
  - DBMS-24
last-revision: 2024-07-13T10:24:00
notes-taken: true
tags:
  - DBMS/RelationalModel/FunctionalDependency
  - DBMS/RelationalModel/Decomposition
---
# Problems caused by redundant information

> [!lecture] Lecture-7A, 7B, 7D
>> [!youtube] [DBMS : Decomposition of a Relation | Non-Binary Decomposition | The Chase Test for Lossless Join Decomposition | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHjweUdD-fgcdD-oMiylqE9t)

[[Functional Dependency|Functional dependencies]] are decided by the database owner and they **hold throughout the database**, across different relations.

There are situations where the attributes on the FDs are there in different relations in the database in modelling real-life organizations.

> [!example] 
> ![[Problems caused by Redundant Information-20240712192341151.webp]]
> 
> There is an FD $a\to b$ in the database.
> 
> The attribute $a$ is in relation $R$ and the attribute $b$ is in relation $S$.

FDs may create many data redundancies. 

> [!example] 
> ![[Problems caused by Redundant Information-20240712192428499.webp]]
> When a table has an entry for district and state, say for example, the table called students_bio. There are too many redundant information when there are many students from the same district.

Redundant storage of information in more than one place within the databse is a bad design. It is the root cause of many problems.

For example, consider the *Employees_Department* table which has many data redundancies.

![[Problems caused by Redundant Information-20240712192637446.webp]]

Consider the FD : $\text{dept\_name} \to \text{building}, \text{budget}$

The above table causes the below issues,

- **Redundant storage** - some information is stored repeatedly.

There can be many employees in a department and for each employee, the information regarding that department is repeated in the table i.e. redundant storage.

- **Updation Anomalies** - If one copy of such repeated copy is updated, an inconsistency is created unless all such copies are similary updated.

If a building is shifted to another department, then all the entries in the table regarding the department has to be updated.

![[Problems caused by Redundant Information-20240713085915504.webp]]

If there is another table that is linked to the department in the database, then to maintain database consistency, they also have to be updated.

![[Problems caused by Redundant Information-20240713085934958.webp]]

- **Insertion Anomalies** - It may not be possible to store some information unless some other information is stored as well.

There can be a situation where a new department has created and it has posted job advertisements, so no employee in that department for a while.
In the above table, a new department cannot be created without an employee, because ID being a primary key cannot be `NULL`.

- **Deletion Anomalies** - It may not be possible to delete some information without losing some other information as well.

In the above table, in the Music department, there is only one employee Muzart. If we have to remove that employee from the company, then the information regarding the Music department also gets removed from the table.

The solution to all of the above anomalies is [[Decomposition|decompose]] the relation into smaller relations.

![[Problems caused by Redundant Information-20240713094955362.webp]]

> [!example] 
> ![[Problems caused by Redundant Information-20240713102212506.webp]]
> ![[Problems caused by Redundant Information-20240713102257565.webp]]
> ![[Problems caused by Redundant Information-20240713102335689.webp]]
> ![[Problems caused by Redundant Information-20240713102353590.webp]]

---