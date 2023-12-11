---
pdf: lec-1-3
module: 7
lecture: 1, 2, 3
date: 2023-12-10T15:54:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Transaction
---
# Transaction
> [!lecture] Lecture-1

- A transaction is a sequence of read-write operations on database items.
- From user point-of-view, a transaction is a single logical task.
- Every transaction has its own main memory buffer.
- Transaction is the unit of execution of database operations.
- `commit` or `abort` is the end of a transaction. (by default `commit`)
- After `commit`, all the changes may or may not be stored to the disk.

## Serial Execution
Database is consistent after a serial execution
In serial execution, a transaction begins after the completion of a complete transaction.
Serial execution always preserves database consistency.


## Concurrent Execution

Concurrent means interleaved execution


> [!definition] Concurrency Control
> Database must go from one consistent state to another consistent state after concurrent execution of transactions.

---
# Desirable Properties for Transaction Processing

Every property is responsible for database consistency.

> [!NOTE] 
> - Consistency property is the responsibility of Programmer
> - Atomicitiy, Durability and Isolation properties are the responsibilities of Transaction and Recovery Manager


## Atomicity Property
- It is also called as **all-or-none** property.

## Durability Property
- After the commit, despite any failure all the changes by a transaction must reflect in the database.
- This property is also called as **Permanency**.

## Consistency Property
- No coding error in within the transaction.
- It is also called as the correctness principle.
- A particular transaction must take a database from consistent to consistent state.
- An individual transaction must be correct. It is the responsibility of the programmer and NOT the DBMS software.

