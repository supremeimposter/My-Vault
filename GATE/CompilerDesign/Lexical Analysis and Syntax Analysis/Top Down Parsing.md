---
pdf: 
module: 1
lecture: 
date: 2024-03-09T20:46:00
version:
  - CD-24
last-revision: 
notes-taken: false
tags:
  - CompilerDesign/SyntaxAnalysis
---
# Top Down Parsing

- Top-down parsing can be viewed as the problem of constructing a parse tree for the input string, starting from the root and creating the nodes of the parse tree in preorder
- Top-down parsing can be viewed as finding a leftmost derivation for an input string.



## With BackTracking

### Recursive Descent

- A recursive descent parser with backtrack is sensitive to the order of productions.
- The recursive descent parser is NOT predictive parser.



> [!youtube] 
> [20 Questions on Recursive Descent Parser with Backtrack I Compiler Design I Sachin Sir I GO Classes - YouTube](https://www.youtube.com/watch?v=lRh6PlBkBvY)

## Without BackTracking

### Predictive Parsing

- The class of grammars for which we can construct predictive parsers looking k symbols ahead in the input is sometimes called the LL(k) class.



> [!NOTE] 
> Predictive Parsing is more like how our brain thinks when looking at a grammar and a string.


- To build the predictive parsing table, we need two concepts,
	- The FIRST Set
	- The FOLLOW Set

![[Top Down Parsing-20240310161433036.webp|A Typical procedure for a non-terminal in top down parsing]]

#### Computing First
- FIRST(A) is the set of terminals that can be at the start of a string produced by A, where A is any non-terminal.
- If a non-terminal produces $\epsilon$, then it is called nullable non-terminal i.e. $A \xrightarrow{\ast} \epsilon$
- FIRST(B) contains $\epsilon$ only if B produces $\epsilon$ in one or more steps.

![[Top Down Parsing-20240310162515326.webp]]

1. Check for nullable symbols
2. Check which non-terminals produce $\epsilon$.

#### Computing Follow
- FOLLOW is the set of terminals that might come after a given non-terminal.

![[Top Down Parsing-20240310162913574.webp]]

- $\epsilon$ does not come in FOLLOW.


> [!discussion] 
> Lec-06B Pg. No. 14
> ![[Top Down Parsing-20240310172527433.webp]]
> ![[Top Down Parsing-20240310172649854.webp]]


> [!discussion] 
> Pg. No. 21
> ![[Top Down Parsing-20240310175332977.webp]]
> ![[Top Down Parsing-20240310175450307.webp]]


### Predictive Parsers
- Predictive parsers are top down parsers that look at the next few tokens and predicts which productions to use.
- Predictive Parsers accepts LL(k) grammars.

