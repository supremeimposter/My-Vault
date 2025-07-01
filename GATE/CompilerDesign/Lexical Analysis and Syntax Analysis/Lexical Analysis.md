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

- The piece of the original program from which we made the token is called lexeme.
- Tokens are constructed from lexemes.

![[Lexical Analysis-20240403154231774.webp]]

- The whitespace is also a lexeme, which is discarded since it holds no meaning to the program.
- Some tokens can have attributes which holds extra information about the token. Attributes for tokens are optional.

![[Lexical Analysis-20240403154430342.webp]] 

- Each token represents one logical piece of the source file - a keyword, name of a variable, etc...
- The token sequence is used in the parser to recover the program structure.

![[Lexical Analysis-20240403154828285.webp]]

![[Lexical Analysis-20240403155641752.webp]]

![[Lexical Analysis-20240403155628315.webp]]

## Recognition of Tokens 

- How do we describe which potentially infinite set of lexemes is associated with each token type? Use formal languages.


### Maximum Munch

![[Lexical Analysis-20240403185516386.webp]]
![[Lexical Analysis-20240403185545469.webp]]

- The conflict of the different tokens is resolved using the longest match obtained.
- Always match the longest possible prefix of the remaining text. 

![[Lexical Analysis-20240403190210306.webp]]
![[Lexical Analysis-20240403190235647.webp]]

### First-listed Matching Pattern

- If there are two or more same length matching pattern, then go for the one which has been defined first in the list i.e. go for the one which has greater priority.

- If there is a clash in maximum munch, then go for first-listed matching pattern.

> [!tip] 
> The above methods are like how your intuition works when looking at a regex and a string.

- If any of thing not matches, then add a 'catch-all' rule that matches any character and reports an error.


![[Lexical Analysis-20240403190150380.webp]]

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

![[Lexical Analysis-1751093280010.webp]]

---
