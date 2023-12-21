---
pdf: lec-2, lec-3, lec-4
module: 
lecture: 2a, 2b, 3, 4
date: 2023-12-20T11:35:00
version:
  - OS-24
last-revision: 
notes-taken: false
tags:
  - OperatingSystems
---
# Process
- Process, informally is a program in execution.
- Process Control Block PCB is the context of the process.

- How to create a process?
	- Create space in the memory - `fork`
	- Load in the memory - `exec`

> [!discussion] 
![[Process in Operating Systems-20231220141025158.webp]]

## Fork

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

## Process Creation

