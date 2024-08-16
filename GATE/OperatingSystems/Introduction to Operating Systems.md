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

OS is a compiled code (executable code) in the secondary storage. Boot loader loads the OS code in the main memory.

## Which memory should I use?

- Multiple programs cannot be stored at the same address, it must be overwritten.
- OS tracks of which memory is used by which program.
- An instruction or code has to be loaded into the memory before CPU to execute it.

## Interrupts

1. Hardware Interrupts - Interrupts when a key is pressed during fetch-decode-execute.
2. Software Interrupts - Program itself contains an instruction that calls an interrupt.

## Goals for Operating Systems

1. Memory Managament
2. Resource Management (I/0 Management)
3. File Systems

## Users Trust Issues
