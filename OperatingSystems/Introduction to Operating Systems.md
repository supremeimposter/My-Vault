---
pdf: lec-1
module: 
lecture: "1"
date: 2023-12-20T09:42:00
version:
  - OS-23
last-revision: 
notes-taken: false
tags:
  - OperatingSystems
  - GATE/Dashboard
---
# Introduction to Operating Systems

- OS code is always there in the memory, but it is not always running or executing. It depends on the deisgn of the OS.

> [!discussion] 
> ![[Introduction to Operating Systems-20231220102654548.webp]]


## Fetch Decode Execute

- PC - Program Counter is a register.

> [!summary] 
> - A program is **fetched** from the memory
> - The instruction in the program is **decoded** and the suitable circuit in chosen
> - ALU **executes** the instruction

- After every such cycle, the program counter PC is incremented to the next address.

## Which memory should I use?
- Multiple programs cannot be stored at the same address, it must be overwritten.
- OS tracks of which memory is used by which program.
- An instruction or code has to be loaded into the memory before CPU to execute it.

## Interrupts

1. Hardware Interrupts - Interrupts when a key is pressed during fetch-decode-execute.
2. Software Interrupts - Program itself contains an instruction that calls an interrupt.

## Goals for Operating Systems


## Users Trust Issues
