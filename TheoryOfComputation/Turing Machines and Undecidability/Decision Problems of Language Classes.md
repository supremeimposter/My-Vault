---
pdf: 
module: 5
lecture: 14, 15D
date: 2024-02-12T14:08:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Language
  - TheoryOfComputation/Decidability
  - TheoryOfComputation/TuringMachine
---
# Decision Problems of Language Class
- Finite representation of any language class can be converted into any other finite representation of the same language class.
- For each problem, clearly define the input and the output.
## Decision Problems of Regular Languages

> [!header] Finite Representations of Regular Languages


> [!definition] Membership problem for Regular Languages

**Problem $P$** : Given any finite representation $M$ of Regular languages and a string $w$. Does $w \in \mathcal{L}(M)$?  Problem $P$ is ***decidable***

> [!definition] Emptiness problem for Regular Languages


> [!definition] Obviously YES and Obviously NO algorithms


> [!definition] Equivalence problem for Regular Languages


> [!definition] Finiteness problem for Regular Languages


> [!definition] Containment problem of regular languages

- $\mathcal{L}(D_1) \subseteq \mathcal{L}(D_2)$ iff $\mathcal{L}(D_1) - \mathcal{L}(D_2) = \phi$
- Create product automata for $\mathcal{L}(D_1) - \mathcal{L}(D_2)$ then check for emptiness. 
	- If the product automata is empty, then $\mathcal{L}(D_1) \subseteq \mathcal{L}(D_2)$.
	- If the product automata is non-empty, then $\mathcal{L}(D_1) \not\subseteq \mathcal{L}(D_2)$.


> [!definition] Disjointness problem of regular languages

- Create product automata for $\mathcal{L}(D_1) \cap \mathcal{L}(D_2)$ then check for emptiness. 
	- If the product automata is empty, then the regular languages are disjoint
	- If the product automata is non-empty, then the regular languages are not disjoint

- The opposite of disjointness is non-disjointness problem is also decidable i.e. Given two DFAs $D_1$ and $D_2$, do they accept any of the same strings? is decidable.

> [!definition] Universality problem of regular languages


> [!definition] Regularity problem of regular languages




> [!youtube] 
> [Lecture 14B - Practice Questions on Decision Problems of Regular Languages | Theory of Computation - YouTube](https://www.youtube.com/watch?v=0gE5bNdzxE8)

---
## Decision Problems of Context Free Languages

> [!definition] Membership problem of CFL

- To run a string $w$ on a PDA $P$, $P$ can be converted into an equivalent PDA $P'$ such that $P'$ does not have any $\epsilon$-transitions.

> [!definition] Emptiness problem of CFL

> [!definition] Finiteness problem of CFL

> [!definition] Undecidable problem of CFL

> [!definition] Disjointness problem of CFL

> [!definition] Equivalence problem of CFL

> [!definition] Universality problem of CFL

> [!definition] Containment problem of CFL

> [!definition] Regularity problem of CFL

> [!definition] Ambiguity problem of CFL

> [!definition] Complementation problem of CFL

---
## Decision Problems of Turing Machine

> [!definition] Membership problem of TM


> [!timer] 00:33:46


---
