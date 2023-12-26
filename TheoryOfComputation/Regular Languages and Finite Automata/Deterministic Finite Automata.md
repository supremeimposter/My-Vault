---
pdf: lec-7B-8D, lec-8E-10B
module: 1
lecture: 8,9,10
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

## Product Construction
- This is running two DFAs in parallel.
- When two DFAs run in parallel, they start in the initial states $p_0,\; q_0$ 
- The two DFAs are constructed on the same alphabet $\Sigma$ 
- In Product construction of two DFAs, every state is an ordered pair of states.
- More than 2 DFAs can be run in parallel.

> [!question] 
> Why running states in parallel (one state at a time) is better than blind cross product?


![[Deterministic Finite Automata-20231226104516745.webp]]

