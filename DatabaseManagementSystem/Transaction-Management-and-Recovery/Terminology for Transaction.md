---
pdf: 
module: 7
lecture: 1, 2
date: 2023-12-11T17:02:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Transaction
---
# Terminology for Transaction

## Element of Database
**Element** - Element of a database has a value which can be accessed or modified by transactions.


## State of Database
A database has a state which is a value for each of its element.

```nomnoml
[State of Database] - [Consistent
State]
[State of Database] - [Inconsistent
State]
```

A consistent database is one in which all the constraints are satisfied, whereas in inconsistent state some violation of the constraints has occured.
The consistency requirement is on the database and NOT on transaction.
 
> Consistency requirement is given by the designer or the developer.

```nomnoml
[Database Consistency Requirement] - [Integrity Constraints
(Explicit)]
[Database Consistency Requirement] - [Application dependent Constraints
(Implicit)]
```

## Database Operation

> [!NOTE] Primitive Operations
> Read operation - only Load operation
> Write operation - only Store operation
 
`write(X, t)` brings the block containing `X` but it doesn't read the `X`, since reading the block containing `X` does not mean reading `X`.

> [!convention] 
