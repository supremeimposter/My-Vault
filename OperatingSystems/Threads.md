---
pdf: lec-5, lec-6
module: 
lecture: 5, 6
date: 2023-12-21T18:10:00
version:
  - OS-24
last-revision: 
notes-taken: false
tags:
  - OperatingSystems
---
# Threads
- In certain situations, a single application may be required to perform several similar tasks.
- Threads are about concurrency and parallelism.
- Head, data, code, files are shared among the threads, whereas stack and registers are NOT shared. [link](https://stackoverflow.com/questions/1762418/what-resources-are-shared-between-threads)

![[Threads-20231221185630844.webp]]


> [!question] 
> Why we do not want different processes for the similar tasks?
> 1. Interprocess communication
> 2. Context switching


## Types of Threads

- User level and Kernel level threads are initiated using some libraries.

### User Level Threads
- User level threads cannot take help from the kernel scheduler to schedule the threads.

### Kernel Level Threads
