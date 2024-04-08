---
pdf: lec-8
module: 7
lecture: "8"
date: 2023-12-14T08:17:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Transaction
---
# View Serializability

- A view is simply the read operation. 
- A view has a source and it will happen to be a source to another view in a future transaction or in the same transaction. 
- Two views are said to be view equivalent if they always have the same view and provide the same view to the future transactions.

- A schedule $S$ is view serializable if it is view equivalent to a serial schedule.
- If a schedule $S$ is view equivalent to a series schedule, then the schedule $S$ is view serializable.

- If there are blind write for a data item, then at last it doesn't matter what are all the write in between. The last write will overwrite all of them for that particular data item.

![[View Serializability-20231214111830641.webp]]


> [!attention] 
> Take care when any transaction writes the same element more than once.

> [!header] Conflict VS View serializability

- View serializability use the blind write carefully, whereas Conflict serializability doesn't take the benefit of blind writes.
- The only difference between [[Conflict Serializability]] and [[View Serializability]] is when blind writes are present.
- If there is no blind writes, then it is enough to check for conflict serializability using precedence graph.
- The time complexity of view serializability is **exponential** i.e. NP complete problem.

> [!header] Serializability VS View serializability

- If only read, write operations are given, then view serializability $=$ serializability.
- If read, write operations along with additional computations are given, then view serializability ${} \subset {}$ serializability.
