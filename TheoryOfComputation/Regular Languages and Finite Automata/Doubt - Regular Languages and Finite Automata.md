
 - [ ]  Is the language accepted by the automata same as the strings accepted by the automata (end at one of the final states)? Or are they different? <br>
![[Pasted image 20230929222305.png]]



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

- Any DFA $D$ on any string $w$ goes through a sequence of states. If $\mid w \mid = n$ then the number of states in the sequence is $(n + 1)$
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