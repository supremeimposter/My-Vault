---
pdf: lec-7A-7C
module: 1
lecture: 
date: 2024-07-12T19:07:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/RelationalModel/FunctionalDependency
---
# Problems caused by redundant information

> [!lecture] Lecture-7A, 7B, 7D
>> [!youtube] [DBMS : Decomposition of a Relation | Non-Binary Decomposition | The Chase Test for Lossless Join Decomposition | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHjweUdD-fgcdD-oMiylqE9t)

Functional dependencies are decided by the database owner and they **hold throughout the database**, across different relations.

There are situations where the attributes on the FDs are there in different relations in the database in modelling real-life organizations.

> [!example] 
> ![[Problems caused by Redundant Information-20240712192341151.webp]]
> 
> There is an FD $a\to b$ in the database.
> 
> The attribute $a$ is in relation $R$ and the attribute $b$ is in relation $S$.

FDs may create many data redundancies. 

![[Problems caused by Redundant Information-20240712192428499.webp]]

Redundant storage of information in a table is a bad design. It is the root cause of many problems.

For example, consider the Employees table which has many data redundancies.

![[Problems caused by Redundant Information-20240712192637446.webp]]

Consider the FD : $\text{dept\_name} \to \text{building}, \text{budget}$

The above table causes the below issues,

- Redundant storage - some information is stored repeatedly.
- Updation Anomalies - If one copy of such repeated copy is updated, an inconsistency is created unless all such copies are similary updated.
- Insertion Anomalies - It may not be possible to store some information unless some other information is stored as well.
- Deletion Anomalies - It may not be possible to delete some information without losing some other information as well.


The solution of all of the above anomalies is decomposition.

---