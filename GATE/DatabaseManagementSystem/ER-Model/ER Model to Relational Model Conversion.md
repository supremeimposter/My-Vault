---
pdf: lec-3
module: 8
lecture: "3"
date: 2023-12-17T11:27:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/ERModel
  - DBMS/RelationalModel
---
# Converting ER Diagrams to Relational Model

> [!tip] When converting ER diagram to Relational model
> - It must have a good design, at least 3NF.
> - No Null problems.
> - Must have minimum number of relations.

- Entity is the relation.
- There is no complex attribute in Relational Model, so it is just represented as separate attributes in the relation.
- For Multivalued attribute, for each a separate relation with the primary key attribute is created.
- Derived attributes are not stored in relational model, since it can be calculated from computations of some base attributes.
- A separate relation is created for weak entity set and the identifying relationship.

## Mapping Cardinalities
- When a relationship is being merged with an entity set, then the other connected entity set's primary key has be to be included.

> [!NOTE] 
> Null values are NOT a big problem.

![[ER Model to Relational Model Conversion-20231219211819452.webp]]
