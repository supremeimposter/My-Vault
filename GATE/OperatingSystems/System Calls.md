---
pdf: lec-2
module: 
lecture: "2"
date: 2023-12-21T10:01:00
version:
  - OS-23
last-revision: 
notes-taken: false
tags:
  - OperatingSystems
---
# Dual Mode of Operations

CPU has to run all the instructions at the end. When running an instruction, CPU checks whethere it is in user mode or in kernel mode. If in user mode, CPU must check if the instruction is valid or allowed. 

> [!NOTE] 
> Kernel Mode bit = `0`
> User Mode bit = `1`

In user mode, user is restricted to a subset of operations, whereas in the kernel mode, all the possible operations can be done. User cannot do any critical operations, it has to be done by the kernel through system calls.

> System call is used as an entry point to the kernel.
# System Calls

User can request the OS to run some previliged instruction. It is done through System calls.

> [!discussion] 
> ![[System Calls-20231221115109525.webp]]


> [!question] Cases when Program Counter change?

