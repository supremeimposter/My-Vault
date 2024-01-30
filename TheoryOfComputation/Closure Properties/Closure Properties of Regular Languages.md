---
pdf: 
module: 4
lecture: "1"
date: 2024-01-30T06:58:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/ClosureProperty
  - TheoryOfComputation/Language
---
# Closure Properties of Regular Languages
> [!NOTE] Base Set is the set of all regular languages

## Complement Operation
- Regular Languages are closed under complementation operation.
- If $L$ is any regular language, then $\overline{L}$ will always be a regular language.
- If a DFA $D$ recognizes the regular language $L$, then the DFA $\overline{D}$ recognizes the complement of the regular language $\overline{L}$. 
- If a NFA $N$ recognizes the regular language $L$, then the NFA $\overline{N}$ ***does not necessarily*** recognize the complement of the regular language $\overline{L}$. 
