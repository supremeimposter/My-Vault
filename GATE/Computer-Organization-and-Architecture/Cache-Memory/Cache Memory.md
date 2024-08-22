---
pdf: 
module: 3
lecture: "1"
date: 2024-03-29T07:47:00
version:
  - COA-24
last-revision: 2024-08-04T19:37:00
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/CacheMemory
---
# Cache Memory

- Most of the time of [[Instruction Execution Cycle|program execution]] is spent on accessing memory, which takes more cycles as well
- [[Registers and Status Flags in CPU#CPU|CPU]] is the fastest device in the computer and [[Main Memory and Addressability|main memory]] has large storage, but is slow and far away from the CPU.
- For CPU to perform an operation, the data has to be loaded to the CPU registers and operated on the data and the result may have to be written back to the memory i.e. load, store operations for every computation. 
- So for each operation, memory access increases the program execution time.
- All the necessary data cannot be stored in the registers in CPU as well as they are very small in capacity, which brings us a need to design a **cache memory**.

![[Cache Memory-20240804193448845.webp]]

![[Cache Memory-20240804172818023.webp]]

![[Cache Memory-20240804181347048.webp]]

## Locality of Reference

Cache works because of **locality of reference**. Programs tend to use data and instructions with addresses nearer or equal to those they have used recently.

<u>Temporal Locality</u>

- Recently referenced items are likely to be referenced again in the near future.

![[Cache Memory-20240804193924125.webp]]

- If a particular word is accessed from the main memory, then it is more likely to be accessed again and again in the future during program execution. This is called **Temporal Locality** (locality related to time). 
- For example, a variable that acts as a flag or constant or a loop counter that needs to accessed again and again.

> [!example] 
> ![[Cache Memory-20240804194246520.webp]]
> 
> The variables i, sum have temporal locality

<u>Spatial Locality</u>

- Items with nearby addresses tend to be referenced closed together in time.

![[Cache Memory-20240804194029338.webp]]

- If a particular word is accessed from the main memory, then the words around or next to the word is more likely to be accessed again and again in the future during program execution. This is called **Spatial Locality** (locality related to space). 
- For example, the elements of an array is most likely to be accessed.

> [!example] 
> ![[Cache Memory-20240804194246520.webp]]
> 
> The variable a\[\] has spatial locality

- Though cache memory is not as fast as registers, it is not as slow as main memory. Cache memory is expensive and has larger capacity than processor registers.

- If a memory address is requested from the main memory, then that whole block in which the address exists is sent to the cache. 

> [!NOTE] 
> Cache memory = Static RAM (SRAM)
> Main memory = Dynamic RAM (DRAM)

## Terminologies in Cache

- Main memory is indexed by address.
- A block of memory contains a number of bytes.
- Cache memory is indexed by cache block number or cache line number.

- A cache line is nothing but a block of memory in cache. It is referenced as line for convenience.
- A memory block has the same size as cache line or block.
- Main memory is many times larger than cache memory. The ratio of main memory to cache memory is defined as Tag.

## Types of Cache Mapping

To put data in cache, mapping has to be done i.e. where to put data in cache?

![[Cache Memory-20240804195455088.webp]]

There are 3 types of cache mapping techniques,
1. Fully associative
2. Direct mapped
3. Set associative

<u>Fully associative</u> 
A block can be placed anywhere in the cache

<u>Direct mapped</u>
A block with a given address can only placed in a single location in the cache

<u>Set associative</u>
A block can be place anywhere within a set of locations in a cache

## Cache Memory Effective Access Time

- If data is found in the cache, then it is called a cache hit.
- If data is not found in the cache, then it is called a cache miss. Then the data is brought to the cache.

- By default, miss rate of a cache means the local miss rate of the cache memory.



## Cache Write Policies

![[Cache Memory-20240821222209939.webp]]


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
 time somewhat, at the expense of more complex
circuitry.
When a Write miss occurs in a computer that uses the write-through protocol, the
information is written directly into the main memory. For the write-back protocol, the
block containing the addressed word is first brought into the cache, and then the desired
word in the cache is overwritten with the new information.
Recall from Section 6.7 that resource limitations in a pipelined process- <u>write back</u> needs a dirty bit.

> [!NOTE] 
> Any combination of write hit and write miss is possible 


---