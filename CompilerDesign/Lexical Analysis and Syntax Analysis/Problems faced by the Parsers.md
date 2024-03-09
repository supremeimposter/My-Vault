---
pdf: 
module: 1
lecture: 
date: 2024-03-09T18:13:00
version:
  - CD-24
last-revision: 
notes-taken: false
tags:
  - CompilerDesign/SyntaxAnalysis
---
# Problems faced by the Parsers

## Ambiguity




### Elimination of Ambiguity manually

> [!NOTE]
> There is no algorithm for elimination of ambiguity, but these examples are some manual analysis.


> [!question] 
> ![[Syntax Analysis-20240306161258996.webp]]
>> [!answer]- 
>> Answer : D 



## Left Recursion

> [!NOTE] 
> Left recursion is a problem, but right recursion is not a problem. Left recursion must be converted to some other recursion.


> [!example] 
>> [!question] 
>> ![[Problems faced by the Parsers-20240309201212024.webp]]
>
> ![[Problems faced by the Parsers-20240309201507949.webp]]


## Left Factoring

> [!NOTE] 
> If a grammar is not following left factoring, then it is a problem. Left factoring of Grammar is a solution to that problem.



