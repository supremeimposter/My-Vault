---
pdf: lec-1
date: 2023-09-26-22:07
version: TOC-24
---

> [!youtube] [Why Theory of Computation? What is the motivation of Theory of Computation](https://www.youtube.com/watch?v=3MAwb_kF2FI)

- Theory of Computation deals with what are the problems that are solvable by computers.
- Algorithm computes a function. A problem is a function. So algorithm solves a problem.
- A program expresses an algorithm.
- Computation is simply executing a program or solving a function.
- There are problems which cannot be solved by algorithms. Functions which can NEVER be computed. e.g. Halting Problem.
- Algorithm is an automated and same procedure for all the inputs. It does not change for an input.

### Function vs Algorithm
- A function is a definition of the problem.
- An algorithm is a guide or manual or "how to" solve the problem.

> [!example] 
> **Prime Numbers**
> Function = A number whose factors are 1 and itself (definition).
> Algorithm = Find if there is not a factor until the square root of the number (how to solve).
> 

- No algorithm exists for Halting problem (will the program stop?), and it can NEVER be solved.

## Goals of Theory of Computation

1. Find out which are the problems that cannot be solved by computers or machines or which functions can NEVER be computed by any algorithm.
2. Find the resources (time, space) consumed by the problems that can be solved by computers or machines.

- There are two types of problems
![[Pasted image 20230927002342.png]]
- Computers can solve only a limited number of problems. There are many problems which they can NEVER solve.
![[Pasted image 20230927002436.png]]

## Models of Computation
- There are different models of computations which are theoretical machines which solves problems.

1. FA - Finite Automata
2. PDA - Push Down Automata
3. LBA - Linear Bounded Automata
4. Turing Machine

> [!important] **Turing Machine** is the ultimate model of computation
> A theoretical machine which gives the limitation of any mechanical or computational device.
> If a problem is NOT solvable by Turing Machine, then no machine can solve that problem.
> It has infinite time and space.

- Modern computers are LBA (Linear Bounded Automata) - Research is going on.

> [!quote] "Computer Science is no more about computers than astronomy is about telescopes" --Djikstra

## Course Plan

1. Regular Languages
2. Context-Free Languages
3. Turing Machine and Decidability