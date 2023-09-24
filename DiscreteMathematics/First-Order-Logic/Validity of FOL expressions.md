---
pdf: lec-32, lec-33, lec-34
date: 2023-09-24-11:22
version: DM-2024
---
- Unless explicitly specified otherwise, the domains are non-empty and the same domain for all the variables.

- There are two methods to find the validity of FOL expressions
	1. Logical thinking 
	2. Take a non-empty abstract domain unless explicitly specified otherwise and try to make the expression true.

> [!info] An interesting argument
> In a domain which is empty, there is no need for any logic.

- $\forall x\; (P(x) \lor \neg P(x))$ is always valid.
- $\forall x\; P(x) \lor \forall x\; \neg P(x)$ is satisfiable but not valid.
- $\exists x\;(P(x) \land \neg P(x))$ is NOT satisfiable.