---
pdf: lec-7B-8D, lec-8E-10B, lec-10C-11, lec12A-12F
module: 1
lecture: 8,9,10,11,12
date: 2023-09-30T09:10:00
version:
  - TOC-24
last-revision: 2023-12-24T16:21:00
tags:
  - TheoryOfComputation/FiniteAutomata
---
# DFA

- DFA is an FA in which for every state on every input, there is **exactly** one transition i.e. actual definition of transition function.
$$
\delta : Q \times \Sigma \rightarrow Q
$$
- Every transaction is defined and no transaction is ambiguous.
- A Finite Automata with undefined transaction can NEVER be a DFA.

> [!doubt] 
> - There can be 0 to many final states.

## Designing a DFA

- A dead state is used to redirect unaccepted string formats.
- Self loops can ignore any arbitrary number of symbols.

> [!header] Guidelines to design DFA
- Understand the given language.
- At each state, write down what you have seen and think about what you have to see and perform the transitions accordingly.

> [!attention] Do not forget to complete the diagram for the dead states

- There are certain [[Cases of languages in DFA|cases of languages]] in DFA. This section discusses the various types of languages that are generally used in designing a DFA.

## Extended Transition Function in DFA

- It is represented as $\delta^*$ 
- The arguments of the $\delta^*$ is (state, string) and it maps to a state
$$
\delta^\ast : Q \times \Sigma^\ast \rightarrow Q
$$
- The strings reduces symbol by symbol as the extended transition progresses.
- In case of a null string, the state does not read any input. Its an empty cell. It returns the same state.
$$
\delta^*\;(q, \epsilon) = q
$$
- If `a` is a symbol and `w` is a string,
$$
\delta^* \;(q,\;a \cdot w) = \delta^* \;(\delta\;(q, a), w)
$$
- If `w` is a string of a language $L$ of a DFA, then $\delta^\ast \;(q_0,\; w) \in F$ 

> [!NOTE] 
> In DFA, from any state on any string, there will be exaclty one unique path

## Configuration in DFA
- A configuration is a snapshot or current situation.
$$
(\text{current state}, \text{unread part of a string})
$$
- In DFA, for every configuration, there is a unique next configuration.

## Regular Languages

- [[Set Definition#PowerSet|Power set]] of a set S is the set of all the subsets of S.
- Power set of $\Sigma^*$ is the set of all the subsets of $\Sigma^*$ i.e. Power set of $\Sigma^* {}$ is the set of all the languages.
$$
\mathcal{P}(\Sigma^\ast) = \text{Set of all languages over } \Sigma
$$
- A language $L$ is regular if and only if there exists some DFA ${} M$ such that ${} L = L(M)$
$$
\text{Regular Language } L \leftrightarrow L \text{ recognized by DFA}
$$
- A language which is recognised by DFA is called a regular language. A language which is not recognised by DFA is called a Non-regular language.

### DFA for complement of a regular language
> [!youtube] [DFA for Complement of a Regular Language | Complementing a DFA | TOC | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=HE2iPU8qZaQ)

- Any DFA $D$ on any string $w$ goes through a sequence of states. If $\mid w \mid = n$, then the number of states in the sequence is $(n + 1)$
- The sequence of states is unique on a DFA.

DFA for the complement of a regular language has the following rules,
1. final states become non-final and non-final states become final.
2. The transitions do not change
The resultant language $\overline {L}$ is the complement of the language $L$.

> [!think] 
> Complement is for languages rather than mathematical models.

![[Deterministic Finite Automata-20231225163057017.webp]]

> [!discussion] 
> ![[Deterministic Finite Automata-20231225163642391.webp]]
> ![[Deterministic Finite Automata-20231225163654669.webp]]

> [!youtube] [Lecture 11 - The Product Construction of DFAs | Running DFAs in Parallel | Theory of Computation - YouTube](https://www.youtube.com/watch?v=jadiLyb2hT4)

## Unreachable States
- The states which cannot be reached from the initial state.
- They NEVER affect the language accepted by a machine. So they can be removed without changing the language that is accepted.

## Running DFAs in Parallel
- This is also called Product Construction.
- When two DFAs run in parallel, they start in the initial states $p_0,\; q_0$ 
- The two DFAs are constructed on the same alphabet $\Sigma$ 
- In Product construction of two DFAs, every state is an ordered pair of states.
- More than 2 DFAs can be run in parallel.

> [!question] 
> Why running states in parallel (one state at a time) is better than blind cross product?



> [!example] 
> ![[Deterministic Finite Automata-20231226104516745.webp]]

## DFA Minimization

- For a regular language, there can be infinite number of DFAs.
- A DFA accepts unique regular language.

> [!think] 
> Out of the infinite number of DFAs for a regular language, which of them has minimum number of states.

- For a regular language, we have a unique minimal DFA i.e DFA with minimal number of states.
- To minimize DFAs, merge the equivalent states.
- Dead state is also counted as a state.

> [!header] Steps to minimize DFA
1. Remove unreachable states
2. Finding equivalent states and merging them

### State Equivalence in DFA

> [!terminology]
> Equivalent $\equiv$ Indistuinguishable $\equiv$ Mergeable $\equiv$ Identical States

- Two states are equivalent iff for all string $w$, they both go to either final or non-final states.
- When two states are final and non-final, then they are definitely not equivalent. It is better to check either two final or two non-final states for their equivalence.

> [!discussion] 
> ![[Deterministic Finite Automata-20231226173519923.webp]]

- For equivalence of states, it is enough to check strings of length atmost $n - 2$, where $n$ is the number of states.
- Number of [[Equivalence Relation#Equivalence Class|equivalence classes]] is the number of states in the minimal DFA.

### Partition Algorithm for DFA Minimization

> [!think] 
> This algorithm goes symbol by symbol. For each partition, it adds only a symbol and checks for the equivalence classes
- This algorithm starts with empty strings partitioning non-final and final states.
- $\Pi_k$ means with respect to the strings of length at most $k$ which states are distinguishable and undistinguishable.
- Every partition consists of equivalent states.

1. Remove unreachable states.

- If $F = \phi$ i.e. there are no final states, then there is no such partition possible.

## Can DFA recognize every language?
> [!youtube] [Can DFAs Recognize Every Language?? | Our First Non-Regular Language | Theory of Computation - YouTube](https://www.youtube.com/watch?v=oHhCBfYhXPg)

- There are some languages which cannot be recognized by any DFA. They are called non-regular languages.
