---
pdf: lec-3, lec-4
module: 
lecture: 3, 4
date: 2023-12-20T11:35:00
version:
  - OS-23
last-revision: 
notes-taken: false
tags:
  - OperatingSystems
---
# Process
- Process, informally is a program in execution.
- When the OS schedules a program for execution, then the program becomes a process.
- A process contests for resources.
- Process Control Block PCB is the context of the process.

- How to create a process?
	- Create space in the memory - `fork`
	- Load in the memory - `exec`

> [!discussion] 
![[Process in Operating Systems-20231220141025158.webp]]

- For every process, some information is stored in the previliged memory, in which there is a kernel stack to push register values for context switching.
- A process cannot access the data of other process unless there is a an inter-process communication.

## Process Control Block
A Process Control Block PCB is a C structure. There can be only a finite number of processes in a computer. Every process has a PCB associated with it. 

OS maintains a doubly linked list (or any other data structure) of PCBs somewhere in the RAM. Once a process is terminated, OS removes its PCB.

To run a program, 
	1. Create a new process
	2. Load the program from hard drive onto the new process
Both operations have separate system calls.

## Fork
Fork creates an exact replica of the calling process. 
- `fork()` returns the pid of the child process it has created if it is a parent. Or else it returns `0`.
- The order of evaluation of parent and child process does not matter.
- Topological order of the dependency graph can be the order of evaluation.

> [!NOTE]
> `pid = 0` if a process is a child process
> `pid` is non-zero if a process is a parent process

![[Process in Operating Systems-20231220164740489.webp]]

![[Process in Operating Systems-20231220172031623.webp]]

`wait()` waits for child processes to finish


> [!example] 

![[Process in Operating Systems-20231220230221320.webp]]

![[Process in Operating Systems-20231221071926557.webp]]


> [!example] 

![[Process in Operating Systems-20231221074718343.webp]]




> [!discussion] 
![[Process in Operating Systems-20231221080539522.webp]]
![[Process in Operating Systems-20231221080722999.webp]]

## Exec
- `exec()` completely replaces the current process with another process.
- The new process has the same `PID` as the old process.



