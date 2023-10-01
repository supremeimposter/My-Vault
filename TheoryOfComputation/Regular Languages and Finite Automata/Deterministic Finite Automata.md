---
pdf: lec-7B-8D
module: 1
lecture: "8"
date: 2023-09-30T09:10:00
version: TOC-24
---
- DFA is an FA in which for every state on every input, there is **exactly** on transition i.e. actual definition of transition function.
$$
\delta : Q \times \Sigma \rightarrow Q
$$

- Every transaction is defined and no transaction is ambiguous.
- A Finite Automata with undefined transaction can NEVER be a DFA.

## Designing a DFA
- A dead state is used to redirect unaccepted string formats.

### Guidelines to design DFA
- Understand the given language.
- At each state, identify what you have seen and think about what you have to see.

> [!important] Do not forget to complete the diagram for all the states.

### Cases of languages

> [!file] Look at all examples in the PDF
#### 1. starts with a prefix
- These type of languages can have a dead state, as the input tape may start with an unaccepted prefix.

#### 2. contains a substring
- These types of languages can NEVER have a dead state.
- There is a hope for the substring to appear from the input tape.

#### 3. ends with a suffix
- These types of languages can NEVER have a dead state.
- There is a hope for the suffix to appear from the input tape.

#### 4. length of string
- These type of languages can have a dead state.

> [!NOTE] Empty string treatment
> - In DFA, an empty string is accepted if and only if the initial state is one of the final states.

#### 5. Modular counting of symbols (Length divisibility language)

> [!file] Look at all the examples in the PDF

- No of symbols (all or a particular symbol) divisible by k in a string.
- This method is similar to the modular counting in queue indexing.
- Assume states are numbered from 0.

$$
N \; mod(k) = r, \; 0 \le r < k
$$
- No of states = k
- Final state = $r \;mod(k)$

**Special case** : $r \ge k$ 
- No of states is 1.
- L = $\phi$

> [!brain] This is the minimal DFA for length divisibility language.

#### 6. Decimal divisibility language

> [!file] Look at all the examples in the PDF

- The alphabets consists of symbols only from the number system.

|         	| base 	| alphabet  	|
|---------	|------	|-----------	|
| unary   	| 1    	| {1}       	|
| binary  	| 2    	| {0, 1}    	|
| ternary 	| 3    	| {0, 1, 2} 	|

- The `n-ary` string's decimal value's divisibility is considered.
- $\epsilon$ 's decimal value is NOT defined. So it will be explicitly mentioned that whether it is accepted or not.
- The number of states and the final state is same as the above method.

##### Simple Trick
- Assume that the states represent the remainder values $0 \le r < k$ (starting from 0)
- At each state for every additional symbol, calculate what is the remainder and see to which state it must go for that alphabet symbol.

> [!brain] In decimal divisibility, the DFA may not be minimal
> Minimized DFA states $\le k$

#### k<sup>th</sup> symbol from left is 'x'
