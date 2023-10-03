---
pdf: lec-7B-8D, lec-8E-10B
module: 1
lecture: 8,9,10
date: 2023-09-30T09:10:00
version: TOC-24
---
## DFA

- DFA is an FA in which for every state on every input, there is **exactly** one transition i.e. actual definition of transition function.
$$
\delta : Q \times \Sigma \rightarrow Q
$$

- Every transaction is defined and no transaction is ambiguous.
- A Finite Automata with undefined transaction can NEVER be a DFA.

## Designing a DFA

- A dead state is used to redirect unaccepted string formats.
- Self loops can ignore any number of symbols.

### Guidelines to design DFA

- Understand the given language.
- At each state, write down what you have seen and think about what you have to see and perform the transitions accordingly.

> [!important] Do not forget to complete the diagram for the dead states

- There are certain [[Cases of languages in DFA|cases of languages]] in DFA. This section discusses the various types of languages that are generally used in designing a DFA.

## Extended Transition Function in DFA ($\delta^*$)
- The arguments of the $\delta^*$ is (state, string) and it maps to a state
- The strings reduces symbol by symbol as the extended transition progresses.
- In case of a null string, the state does not read any input. Its an empty cell. It returns the same state.
$$
\delta^*\;(q, \epsilon) = q
$$
- If `a` is a symbol and `w` is a string,
$$
\delta^* \;(q,\;a \cdot w) = \delta^* \;(\delta\;(q, a), w)
$$

## Regular Languages

- Power set of a set S is the set of all the subsets of S.
- Power set of $\Sigma^*$ is the set of all the subsets of $\Sigma^*$ i.e. Power set of $\Sigma^*$ is the set of all the languages.

- A language is regular if and only if there exists some [[Deterministic Finite Automata|DFA]] M such that $L = L(M)$
- A language which is recognised by DFA is called a regular language. A language which is not recognised by DFA is called a Non-regular language.
$$
\text{Regular Language } L \leftrightarrow L \text{ recognized by DFA}
$$

### DFA for complement of a regular language

> [!youtube] [video](https://www.youtube.com/watch?v=HE2iPU8qZaQ)


