---
module: 1
pdf: lec-2-4-basics
date: 2023-09-27-09:07
version: TOC-24
---

## Basic Terminologies

### Symbol 

- Symbol (or) letter (or) character = an atomic entity of unit length.
- a, b, c, ..., 1, 2, 3, ..., @, #, $, ...
- Length of each alphabet is strictly one.

### Alphabet $\Sigma$

- Non-empty finite set of symbols.
- Members of alphabets are Symbols.
- $\Sigma$ = {a, b, c, ..., z}
- C language has ASCII characters are alphabet
- Tamil has its letters as alphabet
- There are n-ary alphabets based on their cardinality.

1. Unary alphabets : $\Sigma_1$ = {0}, $\Sigma_2$ = {a}, $\Sigma_3$ = {7}, $\Sigma_4$ = {#}, ...
2. Binary Alphabets: $\Sigma_1$ = {a, b}, $\Sigma_2$ = {0, 8}, $\Sigma_3$ = {x, 9}, ...
3. Ternary Alphabets: $\Sigma_1$ = {a, b, 3}, $\Sigma_2$ = {0, 8, e}, $\Sigma_3$ = {x, 9, /}, ...

### String (word)

- A string over an alphabet $\Sigma$ is a finite sequence of symbols over $\Sigma$.
- A string is always of **finite** length. $|\;w\;|$ gives the length of the string $w$.
	- $aaaa\ldots$ is not a string whereas $aaaa$ is a string.
- There can be infinite number of strings of finite length over an alphabet $\Sigma$.


![[Pasted image 20230927122619.png]]

- Strings over an alphabet is analogous to the set of natural numbers.
- Every number is finite, but the set contains infinite numbers. 
	- If there is a number `k`, then there is a number `k+1`.

![[Pasted image 20230927122354.png]]

### Null string $\epsilon$ or $\lambda$

- String of length 0 or an empty string
- It does not contain any alphabet symbol i.e. $\epsilon$ is not a symbol. 
- $\epsilon$ is used to denote string of length 0.
- Null string does NOT belong to alphabets.


> [!NOTE] $\epsilon$ is not same as null set or a set containing a null string.
> $\epsilon \not= \{\} \not= \{\epsilon\}$ 
> - $\{\}$ is a null set which can be represented by $\phi$.
> - $\{\epsilon\}$ is a NOT a null set but it contains an empty string

### Length of a string

- Length of a string = number of occurrences of symbols. Repeated characters are also counted.

Examples:
![[Pasted image 20230927123706.png]]

> [!important] Do not confuse between length of a string vs cardinality of a set.
> |ab| = 2 => length of a string "ab".
> | {ab} | = 1 => cardinality of a set containing the string "ab".

### Reversal of a String

- If $w$ is a string, then $w^R$ is the reverse of string $w$.
	- $w=a_1\;a_2\;a_3\; \ldots \; a_n$
	- $w^R=a_n\;a_{n-1}\; \ldots \; a_2\; a_1$
- |$w$| = |$w^R$|
- If a string $w$ is palindrome, then $w=w^R$
	- A null string is palindrome
	- A string of length 1 is palindrome

![[Pasted image 20230927124354.png]]

### Concatenation of Strings

- "$\cdot$" is the symbol for concatenation. It can also be avoid while writing concatenation of strings.
![[Pasted image 20230927131132.png]]

- $\epsilon$ is the identity element for string concatenation.
	- For a string $w$, $w\cdot\epsilon = w = \epsilon\cdot w$
	- $\epsilon \cdot \epsilon = \epsilon$
- For two strings $v, w$ 
	- |$v\;w$| = |$v$| + |$w$| = |$w\;v$|
- String concatenation is NOT commutative.

### Power or Exponentiation of a String

- It is the repeated concatenation of a string $w$
- For a string $w$,
	- $w^0 = \epsilon$
	- $w^1 = w$
	- $w^2 = w\; \cdot \; w$
	- $w^3 = w\; \cdot \; w \cdot \; w$
	- $w^n = w \cdot \; w \cdot \; w \ldots \cdot \; w$ , $w$ repeated for `n` times

> [!NOTE] ${(ab)}^0 = \epsilon$, where $ab$ is a string.
- $w^3 = w^{3 + 0} = w^3 \cdot w^0 = w^3 \; \epsilon = w^3$


### Prefix, Suffix and Substring


> [!info] All prefixes and suffixes of $w$ are substrings, but NOT all substrings of $w$ are prefixes or suffixes.


### Subsequence


