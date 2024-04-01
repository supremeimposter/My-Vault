---
pdf: 
module: 3
lecture: "1"
date: 2024-03-29T07:47:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/CacheMemory
---
# Cache Memory

- If a memory address is requested from the main memory, then that whole block is to be sent to the cache.
- Each block of memory contains multiple bytes.


## Types of Cache

![[Cache Memory-20240329222343594.webp]]


## Cache Memory Effective Access Time


- By default, miss rate of a cache means the local miss rate of the cache memory.

## Cache Write Policies

- Mutliple copies of data exists, they must be kept in sync i.e. main memory data and cache memory data must be consistent.

- If processor wants to write to cache, there are two possible cases.
	1. Hit in cache
	2. Miss in cache

**Write Hit**
- When processor writes to the cache and it is a **hit**, then there are two options,
	- write in both cache and main memory - <u>write through</u>
	- write only in cache for now and write to main memory later - <u>write back</u>

**Write Miss**
- When the processor writes to the cache and it is a **miss**, then there are two options,
	- bring the data to the cache decide whether to use write through or write back - <u>write allocate</u>
	- write directly to the main memory - <u>no write allocate</u>

- There is not a problem of data inconsistency in <u>no write allocate</u>, since data is directly written to the main memory i.e. no cache is involved.
- <u>write back</u> needs a dirty bit.

> [!NOTE] 
> Any combination of write hit and write miss is possible 



