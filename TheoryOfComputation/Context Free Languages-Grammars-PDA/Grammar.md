---
pdf: 
module: 2
lecture: 1A
date: 2024-01-13T22:42:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Grammar
---
# Grammar

- Grammars express language.
- There are 4 types of Grammar
- Always apply only one rule at each step in any order.

- Variables are written using capital letters.
- Terminals is the alphabet.
- Start variable is the one in the start of the grammar.
- The RHS of the production variable must contain only either terminal or variable.
- Reading the terminal string (yield) from a parse tree is by reading the leaves (terminlas) from left to right in depth first traversal.
- Regular expression syntax must not be written in the production rules.
- The production rule $V \rightarrow V$ is trivial and can be safely removed from the grammar, where $V$ is a variable.
- Grammars are NOT one-one with languages.

