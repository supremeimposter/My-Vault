---
pdf: lec-7B-8D, lec-8E-10B
module: 1
lecture: "8"
date: 2023-10-01T10:22:00
version:
  - TOC-24
last-revision: 2023-12-24T16:22:00
tags:
  - TheoryOfComputation/FiniteAutomata
---
# Cases of Languages in DFA
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
- Keep track of the remainders as the states.

> [!NOTE] Empty string treatment
> - In DFA, an empty string is accepted if and only if the initial state is one of the final states.

#### 5. Modular counting of symbols (Length divisibility language)

> [!file] Look at all the examples in the PDF

- No of symbols (all or a particular symbol) divisible by k in a string.
- This method is similar to the modular counting in queue data structure indexing.
- Assume states are numbered from 0.
$$
N \; mod(k) = r, \; 0 \le r < k
$$
- No of states = $k$
- Final state = $r \;mod(k)$

**Special case** : $r \ge k {}$ *i.e. such languages cannot exist*
- No of states is 1.
- L = ${} \phi {}$

> [!note] This is the minimal DFA for length divisibility language.

#### 6. Decimal divisibility language

> [!file] Look at all the examples in the PDF
- The decimal value of the string is divisible by $k {}$.
- The alphabets consists of symbols only from the number system.

|         	| base 	| alphabet  	|
|---------	|------	|-----------	|
| unary   	| 1    	| {1}       	|
| binary  	| 2    	| {0, 1}    	|
| ternary 	| 3    	| {0, 1, 2} 	|

- The `n-ary` string's decimal value's divisibility is considered.
- ${} \epsilon {}$ 's decimal value is NOT defined. So it will be explicitly mentioned that whether it is accepted or not.
- The number of states and the final state is same as the above method.

> [!tip] Simple Trick
- Assume that the states represent the remainder values ${} 0 \le r < k$ (starting from 0)
- At each state for every additional symbol, calculate what is the remainder and see to which state it must go for that alphabet symbol.

> [!brain] In decimal divisibility, the DFA may not be minimal
> Minimized DFA states $\le k {}$

#### 7. k<sup>th</sup> symbol from left is 'x'
- This method has a dead state.
- No of minimal DFA states = (k + 2)

#### 8. k<sup>th</sup> symbol from right is 'x'

> [!NOTE] This is a very important type of language in DFA
> Look at all the examples and the complete analysis in the PDF.

- This method does NOT have a dead state.
##### Another approach
- Create cases for the last `k` symbols from the right end (all the symbols from the alphabet) and make them as states.
- Out of the created cases, half of them will be the final states.
- But this method also can be further minimized.

> [!example] Third last element is `b`
> ![[Cases of languages in DFA-20231225002703439.webp]]
>> The initial state is decided as `aaa` because it doesn't matter until a `b` comes into scenario

- There are two general cases for this method, unary alphabet and non-unary alphabet.

#### 9. Finite Languages
- First accept the longest strings, then accept the remaining strings.
- ${} \phi, \{ \epsilon \}$

#### 10. Unary Alphabet
- We are NOT familiar with unary alphabet DFA construction.
- First understand the language and construct DFA.

