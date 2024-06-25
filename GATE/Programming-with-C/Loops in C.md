---
pdf: 
module: 
lecture: 
date: 2024-06-22T19:39:00
version:
  - C-24
last-revision: 2024-06-22T20:10:00
notes-taken: false
tags:
  - ProgrammingWithC/Conditionals
---
# Loops in C

## While Loop in C

![[Loops in C-20240622194341887.webp]]

- The condition is always checked before entering the body of the loop.
- Counter update statements can be placed anywhere inside the body of the loop.

![[Loops in C-20240622194743467.webp]]

- To create an infinite loop simply keep the condition of while as true.

![[Loops in C-20240622195032126.webp]]

---
## For Loop in C

![[Loops in C-20240622194604556.webp]]

counter_init_stmt, condition, update_counter_stmt are optional statements.
For loop constructs can mimic while loop constructs.

![[Loops in C-20240622195225222.webp]]

- Infinite loop can be created out of for loop.

![[Loops in C-20240622195554882.webp]]

- for loop can run without a loop body.

![[Loops in C-20240622195732590.webp]]

---
## Do-While Loop in C

- Do-while loop is guaranteed to run at least once even if the condition fails.

![[Loops in C-20240622195945591.webp]]

- The condition is evaluated after the body of the loop is executed.

- Infinite loop can be built by keeping the condition true.

![[Loops in C-20240622200150597.webp]]

![[Loops in C-20240622200349183.webp]]

---
## Break and Continue

`break` statement breaks out of the current loop.
`continute` statement skips the current iteration in the current loop.

![[Loops in C-20240622200626717.webp]]

![[Loops in C-20240622200659763.webp]]

- infinite loops can be stopped with `break` statements.

---