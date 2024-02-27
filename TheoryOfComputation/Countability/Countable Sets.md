---
pdf: 
module: 6
lecture: "2"
date: 2024-02-24T15:39:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Countability
---
# Countable Sets

^56c10b

> [!definition] Countable Set
> A set $S$ is countable **iff** $S$ is either finite or $\mid S \mid\; = \;\mid \mathbb{N} \mid$
^countablesetsdef

- For a infinite set $S$ to be countable, then there should exist a bijective function between $S$ and $\mathbb{N}$ i.e. $\mid S \mid \;=\; \mid \mathbb{N} \mid$
- $S$ is countable if there exists an injective function from $S$ to $\mathbb{N}$ i.e. $\mid S \mid \; \le \; \mid \mathbb{N} \mid$ 

> [!remember] Piecewise functions can also be defined when defining injection of a bijection.

- $\mid \mathbb{W} \mid \; = \; \mid \mathbb{N} \mid \;=\; \mid \mathbb{Z} \mid \; = \; \mid \mathbb{E} \mid$
- Countable infinite set is the lowest level of infinity.
- All countable infinite sets have the same size.

```mermaid
flowchart TD
A[Countable sets] --> B[Finite sets]
A --> C[Countable Infinite sets]
```

- If a set is countable infinite, then $\mid S \mid$ is denoted by aleph null ($\aleph_0$) i.e. $\mid S \mid = \aleph_0$


---