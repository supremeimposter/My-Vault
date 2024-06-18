---
pdf: 
module: 1
lecture: 
date: 2024-06-18T16:48:00
version:
  - C-24
last-revision: 
notes-taken: false
tags:
  - ProgrammingWithC/Conditionals
---
# Conditional Statements in C

## If else blocks

| Expression | Evaluation |
| ---------- | ---------- |
| 129        | True       |
| -1         | True       |
| "abcde"    | True       |
| 0          | False      |
| NULL       | False      |

![[Conditional Statements in C-20240618165249180.webp]]

In C, any number other than $0$ is a true condition.

Braces are important in if blocks as they specify the scope of the statements within the if block.

If braces are not mentioned for a if block, then only the first statement following the if statement lies in the scope of it.

![[Conditional Statements in C-20240618171926177.webp]]

![[Conditional Statements in C-20240618171153775.webp]]

![[Conditional Statements in C-20240618173215680.webp]]

![[Conditional Statements in C-20240618173743382.webp]]

If the braces are missing in if-else blocks, then the `else` is matched with the closest `if`. This is called as the dangling if-else problem.



---