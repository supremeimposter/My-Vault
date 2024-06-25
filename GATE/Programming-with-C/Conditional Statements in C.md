---
pdf: 
module: 1
lecture: 
date: 2024-06-18T16:48:00
version:
  - C-24
last-revision: 2024-06-22T20:10:00
notes-taken: false
tags:
  - ProgrammingWithC/Conditionals
---
# Conditional Statements in C

In C, only $0$, `NULL` and '\0' are considered false conditions. Any other numbers are considered as true conditions. 

| Expression | Evaluation |
| ---------- | ---------- |
| 129        | True       |
| -1         | True       |
| 0          | False      |
| NULL       | False      |

![[Conditional Statements in C-20240618165249180.webp]]

## If else blocks

Boolean expressions can be evaluated in conditions.
1. If the condition is true, then it evaluates as 1.
2. If the condition is false, then it evaluates as 0.

Braces are important in if blocks as they specify the scope of the statements within the if block.

If braces are not mentioned for a if block, then only the first statement following the if statement lies in the scope of it.

> [!example] 

![[Conditional Statements in C-20240618171926177.webp]]

![[Conditional Statements in C-20240618171153775.webp]]

> [!example] 

![[Conditional Statements in C-20240618173215680.webp]]

![[Conditional Statements in C-20240618173743382.webp]]

![[Conditional Statements in C-20240622114228906.webp]]

![[Conditional Statements in C-20240622114302476.webp]]

---

If the braces are missing in if-else blocks, then the `else` is matched with the closest `if`. This is called as the dangling if-else problem.

![[Conditional Statements in C-20240622114610959.webp]]

> [!example] 

![[Conditional Statements in C-20240622115419646.webp]]

> [!NOTE]
> If there are other statements in level-0 `if`, then it would becomes its statements
> 
> ![[Conditional Statements in C-20240622115521061.webp]]

![[Conditional Statements in C-20240622115752847.webp]]

![[Conditional Statements in C-20240622115834448.webp]]

If the level-0 `if` fails, then every statement below does not get executed.

![[Conditional Statements in C-20240622120037650.webp]]

---

> [!example] 

![[Conditional Statements in C-20240622124206314.webp]]

---

![[Conditional Statements in C-20240622124857541.webp]]

> [!example] 

![[Conditional Statements in C-20240622124705097.webp]]

![[Conditional Statements in C-20240622124936226.webp]]

![[Conditional Statements in C-20240622125000105.webp]]

![[Conditional Statements in C-20240622125012601.webp]]

---
![[Conditional Statements in C-20240622151616007.webp]]


> [!cases] if-level 2 fails, else-2 executes
> ![[Conditional Statements in C-20240622172028824.webp]]


> [!cases] if-level 3 fails, else-3 executes
> ![[Conditional Statements in C-20240622172056630.webp]]


> [!cases] if-level 1 fails and no else executes.
> ![[Conditional Statements in C-20240622172215478.webp]]

---
## Switch case blocks

The condition of switch statement must evaluate to an integer value.
1. Variables, literals (constants) that evaluate to an integer.
2. An integer family variable i.e. `int`, `short`, `char`.

> [!example] 
> 1. $4 + 2$
> 2. 'a' + 'v'

- `NULL` is not allowed in switch condition.
- The case label values must be unique and constant and must end with a colon.
- `case` labels can be either integer constant or a single character literals enclosed in single quote. Identifiers are not allowed in case labels.

![[Conditional Statements in C-20240622141319997.webp]]

![[Conditional Statements in C-20240622144036005.webp]]

> [!cases] case labels must be unique.
> ![[Conditional Statements in C-20240622141807772.webp]]

> [!cases] variables are not allowed as case labels.
>![[Conditional Statements in C-20240622143449367.webp]]

- `case` statements and `default` statements can occur in any order within the `switch` block.

![[Conditional Statements in C-20240622141645742.webp]]

- If no case label matches with the switch condition, then `default` block gets executed.

> [!cases] If there is no break statement
> ![[Conditional Statements in C-20240622130703054.webp]]

- If the matched `case` label does not have a `break` statement, then all the case statements below the matched case will be executed until the next `break` statement or the end of the `switch` statement.

> [!cases] If there is no break statement and there are no matches
> ![[Conditional Statements in C-20240622130912433.webp]]

- There is no sequential ordering in case labels. case labels can be specified in any order.

![[Conditional Statements in C-20240622142301671.webp]]

- If `default` block is at the end of all the cases, then `break` statement in not required in `default` block.

---

Switch condition can handle boolean conditions. 
1. If the boolean condition is false, then it matches for the case label 0.
2. If the boolean condition is true, then it matches for the case label 1.

If each of the case labels do not exist, then it goes to the default block.

Boolean conditions in switch generate warnings, but runs anyways.

> [!cases] Boolean condition fails and case label 0 exists.
> ![[Conditional Statements in C-20240622174022324.webp]]

> [!cases] Boolean condition fails and case label 0 does not exist
> ![[Conditional Statements in C-20240622174618505.webp]]

> [!cases] Boolean condition succeeds and case label 1 exists
> ![[Conditional Statements in C-20240622174715605.webp]]

> [!cases] Boolean condition succeeds and case label 1 does not exist
> ![[Conditional Statements in C-20240622174812796.webp]]


> [!observation] 
> Program execution always goes through the body of the switch even if the condition fails.

---
Statements outside the `case` blocks does not get executed.
Statements outside the case block are the ones that exists between the `break` statement of one case and beginning of another `case`.

![[Conditional Statements in C-20240622185711020.webp]]

---