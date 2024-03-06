---
pdf: 
module: 1
lecture: 
date: 2024-03-05T19:16:00
version:
  - CD-24
last-revision: 
notes-taken: false
tags:
  - CompilerDesign/LexicalAnalysis
---
# Lexical Analysis
- The goal of the lexical analysis is to partition input string into meaningful elements called tokens.
- Lexical analyzer uses regular expressions.
## Lexemes and Tokens
- Tokens are constructed from lexemes.

## Recognition of Tokens 

### Maximum Munch
- The conflict of the different tokens is resolved using the longest match obtained.

### First-listed Matching Pattern
- If there are two or more same length matching pattern, then go for the one which has been defined first in the list.

- If there is a clash in maximum munch, then go for first-listed matching pattern.


> [!tip] 
> The above methods are like how your intuition works when looking at a regex and a string.



> [!example] 
>> [!question] 
>> ![[Lexical Analysis-20240306125751726.webp]]
>
> ![[Lexical Analysis-20240306125729455.webp]]

---

> [!question] 
> ![[Lexical Analysis-20240306132833261.webp]]


- A lexer produces error when it is unable to find any token for the given lexeme.

![[Lexical Analysis-20240306133420682.webp]]

- There is no DFA to parse `3abc`

![[Lexical Analysis-20240306133708060.webp]]


![[Lexical Analysis-20240306135018971.webp]]

---
