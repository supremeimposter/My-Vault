---
pdf: lec-16
module: 1
lecture: "16"
date: 2023-12-31T17:04:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/FiniteAutomata
---
# Regular Expressions

- Every regular expression has a value associated with it and it is a language.


| Regular Expression | Language |
| ---- | ---- |
| $r = \phi$ | $\mathscr{L}(r) = \phi$ |
| $r = \epsilon$ | $\mathscr{L}(r) = \{\epsilon\}$ |
| $r = a$ | $\mathscr{L}(r) = \{a\}$ |

> [!conflict] String vs Regular Expression
> 

- $a + a$ means $\{a, a\}$
- $a \cdot a$ means $\{aa\}$


> [!remember] Order or Priority
> $$
() \gt \ast \gt \cdot \gt \cup
$$


- Concatenation is distributive over union but union is NOT distributive over concatenation
$$
L_1 \cdot (L_2 \cup L_3) = L_1 \cdot L_2 \;\cup\; L_1 \cdot L_3
$$
$$
L_1 \cup (L_2 \cdot L_3) \not= L_1 \cup L_2 \;\cdot\; L_1 \cup L_3
$$

> [!question] 
> ![[Regular Expressions-20231231204835231.webp]]

