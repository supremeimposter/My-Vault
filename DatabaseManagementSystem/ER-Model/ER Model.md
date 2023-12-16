---
pdf: lec-1-2
module: 8
lecture: "1"
date: 2023-12-09T17:18:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/ERModel
---
# ER Model

- **Entity** = a distinguishable object
- **Relationship** = Association between entities
- **Attributes** = Description of Entities; Properties of Entity
- **Entity set** or **Entity Type** = Set of similar entities; entities with same attributes
- **Relationship Set** = Set of similar relationships; relationship between same entity types.
- Degree of the relationship set is the number of the entities the relationship is between.
- **Relationship Attributes** = Properties of the relationship (association)

- Two entity types must have different names.
- The concept of [[Relational Model#Keys|keys]] in ER model is same as Relational model.
- Entity sets participate in relationship sets.

## Similarities between ER Model and Relational Model

| ER Model                      | [[Relational Model]]              |
|:------------------------------|:------------------------------|
| Entity                        | Tuple/Row/Record              |
| Entity Type/Entity Set        | Relation/Table                |
| Primary, Candidate, Super key | Primary, Candidate, Super key |
| Attribute domain              | Attribute domain              |
| Cardinality of entity type    | Cardinality of instance       |  

## Schema of ER Model

![[ER Model-20231209183712894.webp]]

## Types of Attributes in ER Model

```nomnoml
[Attributes in ER Model] - [Simple
Composite]
[Attributes in ER Model] - [Single-valued
Multi-valued]
[Attributes in ER Model] - [Base/Source
Derived]
```
> [!NOTE] 
> Which attribute is of which type is decided by the database owner.

## Mapping Cardinalities
- One entity is related to how many entities

1. One-One relationship
2. One-Many relationship
3. Many-One relationship
4. Many-Many relationship

> [!discussion]
> ![[ER Model-20231216205753795.webp]]

### Participation of Entities in Relationship
