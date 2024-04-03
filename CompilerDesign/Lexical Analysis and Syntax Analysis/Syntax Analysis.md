---
pdf: 
module: 1
lecture: "2"
date: 2024-03-06T13:55:00
version:
  - CD-24
last-revision: 
notes-taken: false
tags:
  - CompilerDesign/SyntaxAnalysis
---
# Syntax Analysis

- Goal of the syntax analysis is to recover the structure described by the series of tokens and report errors if those tokens do not properly encode a structure.
- When scanning (lexing), the [[Basic Concepts of TOC#Alphabet|alphabet]] is ascii or unicode characters. We produced tokens.
- When parsing, the alphabet is the set of tokens produced by the scanner.

## Parsing



### Context Free Grammars for Parsing

![[Syntax Analysis-20240403220237047.webp|CFG Notations]]

![[Syntax Analysis-20240403221156649.webp]]

- Ambiguity of CFG can be resolved using layering.

### Abstract Syntax Trees

