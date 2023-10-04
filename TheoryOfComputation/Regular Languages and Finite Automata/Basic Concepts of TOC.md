---
module: 1
pdf: lec-2-4-basics
date: 2023-09-27-09:07
version: TOC-24
---

## Symbol 

- Symbol (or) letter (or) character = an atomic entity of unit length.
- a, b, c, ..., 1, 2, 3, ..., @, #, $, ...
- Length of each symbol is strictly one.

---
## Alphabet $\Sigma$

- **Non-empty** finite set of symbols.
- $\Sigma$ = {a, b, c, ..., z}, $|\Sigma| = 26$
- It can also be represented by $\Gamma$
#### Examples
- C language has ASCII characters are alphabet
- Tamil has its letters as alphabet

- There are `n-ary` alphabets based on their cardinality.

1. Unary alphabets : $\Sigma_1$ = {0}, $\Sigma_2$ = {a}, $\Sigma_3$ = {7}, $\Sigma_4$ = {#}, ...
2. Binary Alphabets: $\Sigma_1$ = {a, b}, $\Sigma_2$ = {0, 8}, $\Sigma_3$ = {x, 9}, ...
3. Ternary Alphabets: $\Sigma_1$ = {a, b, 3}, $\Sigma_2$ = {0, 8, e}, $\Sigma_3$ = {x, 9, /}, ...

---
## String (word or sentence) over an alphabet

- A string over an alphabet $\Sigma$ is a **finite sequence of symbols** over $\Sigma$.
- A string is always of **finite** length. $|\;w\;|$ gives the length of the string $w$.
	- $aaaa\ldots$ is NOT a string though it is well defined  
	- $aaaa$ is a string.
- There can be infinite number of strings of finite length over an alphabet $\Sigma$. 
- In a string, the order and the repetition of the symbols matter.
	- $a^2 = aa \not= a$, $a$ is one string and $aa$ is another string.
- The set of all strings over an alphabet $\Sigma$ is $\Sigma^{*}$ 
- A string $w \not\in \Sigma$ .

> [!attention] String over alphabet $\Sigma$ is NOT a set.
> A string is created based on the symbols in the alphabet $\Sigma$.
> A string is not a set but a sequence of symbols.

![[Pasted image 20230927122619.png]]

- Strings over an alphabet is analogous to the set of natural numbers.
- Every number is finite, but the set contains infinite numbers. 
	- If there is a number `k`, then there is a number `k+1`.

> [!help] A string is the result of operation on a string

![[Pasted image 20231003213204.png]]

> [!think] 
> Members of $\Sigma$ are alphabets.
> Members of $\Sigma^*$ are strings.

### Null string $\epsilon$ or $\lambda$

- String of length 0 or an empty string.
- It does not contain any alphabet symbol i.e. $\epsilon$ is not a symbol. 
- Null string $\not\in \Sigma$.
- A string $w, w = \epsilon w = w \epsilon$
- Null string is palindrome.
- $\epsilon$ is a string over every alphabet $\Sigma$ .

> [!NOTE] $\epsilon \not= \{\} \not= \{\epsilon\}$
> - $\{\}$ is a null set which can be represented by $\phi$.
> - $\{\epsilon\}$ is a NOT a null set but it contains an empty string

### Length of a string

- Length of a string = number of occurrences of symbols. Repeated characters are also counted.
- If $u$ is a string, then $|u^n| = |u \cdot u \cdot u \cdot \ldots \cdot u| = n|u|$

Examples:
![[Pasted image 20230927123706.png]]

> [!important] Do not confuse between length of a string vs cardinality of a set.
> |ab| = 2 => length of a string "ab".
> | {ab} | = 1 => cardinality of a set containing the string "ab".

### Reversal of a String

- If $w$ is a string, then $w^R$ is the reverse of string $w$.
	- $w=a_1\;a_2\;a_3\; \ldots \; a_n$
	- $w^R=a_n\;a_{n-1}\; \ldots \; a_2\; a_1$

- A string $w$ is palindrome iff $w=w^R$
	- A null string is palindrome
	- A string of length 1 is palindrome

#### Important results
- |$w$| = |$w^R$|
- If two strings $w_1,\; w_2$ are different, then $w^R_1, \; w^R_2$ are also different.
- If $w \in \Sigma$, then $w^R = w$ i.e. $w$ is a symbol.
- If $a$ and $x$ are two strings over $\Sigma$, then
$$
(a \cdot x)^R = x^R \cdot a^R
$$

### Concatenation of Strings

- "$\cdot$" is the symbol for concatenation. It can also be avoid while writing concatenation of strings. (abuse of notation)
![[Pasted image 20230927131132.png]]

- $\epsilon$ is the identity element for string concatenation.
	- For a string $w$, $w\cdot\epsilon = w = \epsilon\cdot w$
	- $\epsilon \cdot \epsilon = \epsilon$
- For two strings $v, w$ 
	- |$v\;w$| = |$v$| + |$w$| = |$w\;v$|
- String concatenation is NOT commutative, because in strings the order and repetition of symbols matter.
	- $v\;w \not= w\;v$

### Power (or) Exponentiation of a String

- It is the repeated concatenation of a string $w$
- Power of a string $w$ is defined in terms of concatenation.
- For a string $w$,
	- $w^0 = \epsilon$
	- $w^1 = w$
	- $w^2 = w\; \cdot \; w$
	- $w^3 = w\; \cdot \; w \cdot \; w$
	- $w^n = w \cdot \; w \cdot \; w \ldots \cdot \; w$ , $w$ repeated for `n` times

> [!example] ${(ab)}^0 = \epsilon$, where $ab$ is a string.
- $w^3 = w^{3 + 0} = w^3 \cdot w^0 = w^3 \; \epsilon = w^3$
- $\epsilon^n = \epsilon$

- In `TOC,` $1^4 = 1111$, because `1` is a symbol. But in number theory $1^4 = 1$, because `1` is a number.

> [!help] Look at pdf from now

### Prefix, Suffix and Substring of a string

- Prefix can be obtained from the left end whereas suffix can be obtained from the right end and a substring can obtained from anywhere to anywhere but consecutively.
- For a string $w$,
	- $u$ is the prefix of $w$ iff $w = u\;v$ for some $v$
	- $u$ is the suffix of $w$ iff $w = v\;u$ for some $v$
	- $u$ is the substring of $w$ iff $w = v\;u\;y$ for some $v, y$
- $\epsilon$ can be a prefix, or a suffix or a substring.
- A proper prefix is a prefix other than the string itself. It is the same for suffix and substring.

![[Pasted image 20230928090451.png]]
![[Pasted image 20230928090459.png]]
![[Pasted image 20230928090516.png]]

- Reverse of a string $w$ CANNOT be a prefix or suffix or substring of the string $w$.

> [!attention] Pay attention
> ![[Pasted image 20230928091345.png]]
- Every prefix or suffix of $w$ is a substring $w$.

#### Number of prefixes, suffixes and sub strings of a string
- For a string $w$ of length `n`, 
	- number of prefixes = $n + 1$
	- number of suffixes = $n + 1$
	- number of sub strings 
		- minimum (All the symbols are same) = $n + 1$ 
		- maximum (All the symbols are different) = $\frac{n(n + 1)}{2} + 1$ 

- For any string, no of `k` length prefixes or suffixes are exactly 1, but for a substring it can be many.

![[Pasted image 20231004093608.png]]

- There are two cases in finding the number of sub strings for a string $w$

1. All symbols are same in the string.
![[Pasted image 20230928095257.png]]

1. All symbols are different in the string
![[Pasted image 20231004094155.png]]

![[Pasted image 20230928095221.png]]

Example
![[Pasted image 20231004093717.png]]

### Subsequence of a string
- A string formed from the original string by deleting any (or none) symbols but preserving the relative position of the remaining symbols.
- Any number of sub-sequences can be formed out of a string $w$.
![[Pasted image 20231004094713.png]]
---

## Language

- Language is any set of strings.
- A language L is defined over an alphabet $\Sigma$.
- A Language L over an alphabet $\Sigma$ iff L is a subset of $\Sigma^*$ over an alphabet $\Sigma$. $\Sigma^*$ is also a language.
- L = $\{\}$ , L is called an empty language, which is denoted by $\phi$.
	- $\phi \not= \{\epsilon\}$
- There are infinite languages which contain infinite strings and there are also finite languages which contains finite strings.
- It is not necessary for a language to contain $\epsilon$.
- An alphabet $\Sigma$ is a Language, because symbols can be considered as length `1` strings.

> [!think] When doing analysis on Languages, always have a case of $L = \{\epsilon\}$ and $L = \phi$


### Set Operations on Languages
- $L_1 \; - \; L_2$ contains every word in $L_1$ which is NOT in $L_2$.
- $L_1 \; \oplus \; L_2$ contains words that are only in either of the sets.

> [!help] Language is the result of operation on a language.

### Reversal of a Language

- The reversal of a language $L^R$ contains every string reversed in the language $L$, not the ordering of the strings in the language.
$$
L^R = \{\; w^R \; | \; w \in L \;\}
$$
- $|L| = |L^R|$
- If every string in L is a palindrome, then $L = L^R$, but the converse is not true.
- $(L_{1} \cup L_{2})^R = L_1^R \cup L_2^R$ for all languages $L_1$ and $L_2$.
- $(L_1 \cdot L_2)^R = L_2^R \cdot L_1^R$

> [!NOTE] A set has no ordering of elements.

### Concatenation of Languages

- {$\epsilon$}, a set containing only null string is the identity element for language concatenation.
- While concatenation of languages, the strings of each languages are concatenated based on the order of the languages.
![[Pasted image 20230927185053.png]]

> [!attention] You CANNOT concatenate a string with a language.

- Form of strings in a concatenated language.
![[Pasted image 20230928105953.png]]
![[Pasted image 20230928111302.png]]

- Analyse all the cases when writing general formula for a language concatenation.

![[Pasted image 20230927172938.png]]

- For any language $L$,
	- $L \cdot \phi = \phi \cdot L = \phi$
	- $L \cdot \{\epsilon\} = \{\epsilon\} \cdot L = L$

### Power of a Language
- For any language L, $L^0 = \{\epsilon\}$
- $\phi^n = \phi$

### Kleene Star ($\; L^{*} \;$)
- Star closure of a language L.

$$
L^* = L^0 \cup L^1 \cup L^2 \cup \ldots
$$
- $L^*$ is not guaranteed to have all the strings
	- $L = \phi$, then $L^* = \{\epsilon\}$
- $\Sigma^{*}$ is the set of all strings, because an alphabet contains symbols, whose concatenation gives strings of all length over $\Sigma$, whereas $L^*$ contains strings over $\Sigma$, whose concatenation is not guaranteed to give all the strings.
- Set notation for $\Sigma^*$ for a non-unary alphabet cannot be written because it is an infinite set
![[Pasted image 20231004095309.png]]
- $\Sigma^k$ is the set of all `k` length strings over the alphabet $\Sigma$.
- $(\Sigma^*)^* = \Sigma^*$ 
![[Pasted image 20231004094943.png]]
![[Pasted image 20231004094955.png]]

- Any number of Kleene star operations done on $L^{*}$ is always $L^{*}$. i.e $(L^{*})^n = L^{*}\;, n \ge 1$

- $(L^*)^R = (L^R)^*$

### Kleene Plus ($\; L^{+} \;$)
- Positive closure of a language L.
$$
L^+ = L^1 \cup L^2 \cup \ldots
$$

> [!important] Both $L^*$ and $L^+$ operates on the same language L, which is a set of strings over an alphabet $\Sigma$.

- $\Sigma^+$ is the set of all non-empty strings over $\Sigma$.


---

> [!NOTE] Empty string and null string set
> - An empty string over any $\Sigma$ is $\epsilon$
> - Set of empty string over any language $L$ is $\{\epsilon\}$
> - $\phi^* = \{\epsilon\}$
> - $\phi^+ = \phi$


![[Pasted image 20230928085345.png]]


### Complement of a language

> [!attention] Carefully look at the examples in the pdf

- Languages are defined over an alphabet $\Sigma$ and every language is a subset of $\Sigma^*$
- For a language over $\Sigma$,
$$
\bar{L} = \Sigma^* - L
$$
$$
\bar{L} = \{ w |w\not\in L \}
$$
$$
L \; \cup\; \bar{L} = \Sigma^*
$$
- At lease one of $L$ , $\bar{L}$ is an infinite $set$, since $\Sigma^*$ is an infinite set.

![[Pasted image 20230928153633.png]]

- Given a language, think about what strings are not in the language with respect to the alphabet.
- For any language $L$ for which $\bar{(L^{*})} \not= (\bar{L})^*$

#### String VS symbol in a Language definition
- For an alphabet $\Sigma=\{a,b\}$,
	- $w \in \Sigma$ means, $w$ is a symbol and NOT a string. $w$ here is a single character from $\Sigma$.
	- $w \in \Sigma^*$ means, $w$ is a string over $\Sigma$.

---

> [!youtube] Homework 1 Solutions
> [Part 1](https://www.youtube.com/watch?v=Yp8AcoLAO_o&list=PLIPZ2_p3RNHhXeEdbXsi34ePvUjL8I-Q9&index=2)
> [Part 2](https://www.youtube.com/watch?v=PjoTWbeUygM&list=PLIPZ2_p3RNHhXeEdbXsi34ePvUjL8I-Q9&index=2)
> [Part 3, Q6-Q10](https://www.youtube.com/watch?v=tdrGbsjQmDQ&list=PLIPZ2_p3RNHhXeEdbXsi34ePvUjL8I-Q9&index=3)
> [Part 4, Q-11](https://www.youtube.com/watch?v=0eq9n5Yzyfo&list=PLIPZ2_p3RNHhXeEdbXsi34ePvUjL8I-Q9&index=4)


