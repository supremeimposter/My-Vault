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

> [!link] 
> [Process control – Harvard CS 61](https://cs61.seas.harvard.edu/site/2024/Process/#process-creation-with-fork&gsc.tab=0)

Fork creates an exact replica of the calling process. 
- `fork()` returns the pid of the child process it has created if it is a parent. Or else it returns `0` to the child.
- The order of evaluation of parent and child process depends on scheduling.
- Topological order of the dependency graph can be the order of evaluation.

> [!NOTE]
> `pid = 0` if a process is a child process
> `pid` is non-zero if a process is a parent process

printf() prints only the logical address, not the physical address.

![[System Calls-20240813214655956.webp]]

![[System Calls-20240813221448628.webp]]

![[System Calls-20240813221429616.webp]]

> [!pdf] 
> Fork - cs-110-lec-05.pdf Pg. no. 6

![[System Calls-20240813222341626.webp]]

![[System Calls-20240813222414170.webp]]

![[System Calls-20240813223520147.webp]]

![[System Calls-20240813224126437.webp]]

![[System Calls-20240813225223858.webp]]


> [!example] 

![[Process in Operating Systems-20240818102110272.webp]]

![[Process in Operating Systems-20240818102135960.webp]]

![[Process in Operating Systems-20240818102118454.webp]]

> [!example] 

wait() waits for the child process to finish before proceeding with subsequent statements below wait() in the parent process.

![[Process in Operating Systems-20231220164740489.webp]]

![[Process in Operating Systems-20231220172031623.webp]]

> [!example] 

![[Process in Operating Systems-20240814075918320.webp]]

Seems like the child processes are execute in a different order.

![[Process in Operating Systems-20240814075855705.webp]]

![[Process in Operating Systems-20231221071926557.webp]]

Topological sort can be applied to write the possible execution order based on the dependency [lec-03.pdf Pg. No. 47]

> [!example] 

> fork with loops can either be unwinded first and executed using the code itself directly.

![[Process in Operating Systems-20231221074718343.webp]]

> [!example] 

![[Process in Operating Systems-20240814201255709.webp]]

![[Process in Operating Systems-20240815111927484.webp]]



> [!discussion] 
![[Process in Operating Systems-20231221080539522.webp]]
![[Process in Operating Systems-20231221080722999.webp]]

## Exec
- `exec()` completely replaces the current process with another process.
- The new process has the same `PID` as the old process.


![[Process in Operating Systems-20240818225012515.webp]]

> fork-exec pair is used to create a new process

