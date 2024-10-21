---
pdf: lec-1-2, lec-3
module: 8
lecture: 1, 2, 3
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
- Cardinality of entity set is the number of entities in the set.
- **Relationship Set** = Set of similar relationships; relationship between same entity types.
- Degree of the relationship set is the number of the entities the relationship is between.
- **Relationship Attributes** = Properties of the relationship (association).

- Two entity types must have different names.
- The concept of [[Relational Model#Keys|keys]] in ER model is same as Relational model. But there is no foreign key concept in ER model.
- Entity sets participate in relationship sets.
- To describe a relationship between two entity sets, we need primary keys of both entity sets.

## Similarities between ER Model and Relational Model

| ER Model                      | [[Relational Model]]          |
| :---------------------------- | :---------------------------- |
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

- Partial participation is represented by single line
- Total participation is represented by double line

### Primary Keys of Relationship Sets


## Self-Referential Relationships
- It is also called as *recursive* or *cyclic* relationship.
- Recursive relationships can have any of the cardinality mappings.

1. One-One relationship
2. One-Many relationship
3. Many-One relationship
4. Many-Many relationship

## Weak Entity Set
- An entity set without any key. A set in which entities are not uniquely identifiable.
- It is represented by a double rectangle.
- The relationship with a weak entity set is also represented by a double diamond.
- Existence of a weak entity set depends on existence of a strong entity set.
- A weak entity set can be a owner of another weak entity set.
- A partial key is represented by a dotted underline. It is also called as **Discriminator**.
- The primary key of the association is (<u>primary key of owner entity set, partial key of weak entity set</u>)

> [!misconception] 
> Weak entities are NOT repeating entities, but different entities which we cannot identify them uniquely.

- Every multi-valued attributed can be converted into a weak entity set.
