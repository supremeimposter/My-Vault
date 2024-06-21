---
pdf: 
module: 1
lecture: "6"
date: 2024-02-22T17:19:00
version:
  - DL-24
last-revision: 2024-06-21T22:42:00
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
  - DigitalLogic/KMap
---
# Implicant

- An implicant of a function is a product term that can be used in SOP expression for that function.
- Implicant $I$ of a function $f$ is a [[Standard and Canonical Forms of Boolean Expressions#Product Term|product term]] such that $I \rightarrow f$ i.e. whenever $I = 1$, then $f = 1$. 

> [!example] 
> 

- An implicant is a rectangle of size 1, 2, 4, 8, ... i.e. powers of 2. The rectangle may not contain 0s.
- In a [[Minimization using K Map|k-map]], every Cube of size $2^m$ covering 1's is an implicant.
- Every implicant is a product term and a size 1 implicant is a minterm.
- Each minterm in the canonical SOP form is an implicant of the function.

Let $h$ be a product of literals. If $F$ covers $h$, then $h$ is said to imply $F$ or $h$ is said to be an implicant of $F$ i.e. $h \rightarrow F$

Since [[Don't Cares and Covering Functions#Covering Functions|covering functions]] are from minterms point of view, implicants are also from minterms point of view.

## Counting Implicants of a Boolean Function
For counting the implicants of a function of different sizes, do not repeatedly count certain combinations of product terms.

> [!header] Counting the number of implicants for a function
>> [!question] 
>> ![[Minimization using K Map-20240222163219601.webp]]
> ---
>
>> Implicants of size 1
>
> ![[Minimization using K Map-20240222163428348.webp]]
>
>> Implicants of size 2 
>
> ![[Implicants in K Map-20240522113335358.webp]]
>
>> Implicants of size 4
>
> ![[Minimization using K Map-20240222164831549.webp]]
> 
>> Total number of implicants for the given k-map is $6 + 7 + 2 = 15$

> [!caution] 
> - Do not try to use combinatronics in counting implicants as it will result in error.
> - Don't forget to look the 1s at the **corners** of the K-map.

> [!example] 
> ![[Implicants in K Map-20240521170808213.webp]]
>
>> Implicants of size 1
> 
> ![[Implicants in K Map-20240521171023917.webp]]
>
>> Implicants of size 2
>
> ![[Implicants in K Map-20240521172845931.webp]]
>
>> Implicants of size 4
>
> ![[Implicants in K Map-20240521173623152.webp]]
>
>> Implicants of size 8
>
> ![[Implicants in K Map-20240521174049637.webp]]
>
>> Total number of implicants = 33

---
# Prime Implicant

- A ***prime implicant*** is an implicant (from the k-map point of view) which is *not fully contained* within anyone other implicant i.e. a cube of 1s that is as big as possible that is not fully contained within another bigger cube of 1s which means a product term that is as small as possible.
- An ***essential prime implicant*** is a prime implicant that includes **at least one** 1 that is not in any other prime implicant.
- A ***non-essential prime implicant*** is a prime implicant in which **every one** of the cells are a part of another prime implicant.

> [!important] 
> Essential is like a label given to an existing prime implicant and not a separate new prime implicant.

## Identifying Non-Prime Implicants

![[Implicants in K Map-20240521223349805.webp]]

![[Implicants in K Map-20240521223659997.webp]]

The above two diagrams tell which implicants are not at all prime implicants. 
The yellow ones are fully contained inside other implicants of bigger size. So they are not prime implicants at all.

Below is the overall diagram for the prime implicants and essential prime implicants.

![[Implicants in K Map-20240521224047768.webp]]

> [!example] 
> ![[Implicants in K Map-20240521214909223.webp]]
> 
>> Take any 2 Prime implicants from the k-map, each of the two is not fully contained within the other. (You can also tell that there are no larger implicants than 2, which makes these prime implicants).
>> The overall diagram looks confusing. Here is a separate diagram for any two Prime implicants
>
> ![[Implicants in K Map-20240521215355363.webp]]

## Unique Minimal SOP Expression

> [!header] Steps to find the minimal SOP expression using Prime Implicants
> 
> 1. Find each essential prime implicant and include it in the solution.  
> 2. Determine if any minterms are not yet covered.  
> 3. Find the minimal number of remaining prime implicants which are not essential which finish the cover.

- If **all** the essential prime implicants cover **all** the 1's, then we get **unique** minimal SOP. The converse is **NOT** true.

> [!example] 
> ![[Implicants in K Map-20240521215501154.webp]]
> 
> ![[Implicants in K Map-20240521215904880.webp]]
> 
> ![[Implicants in K Map-20240522100310109.webp]]
> 
> ![[Implicants in K Map-20240522100554882.webp]]

- If all the essential prime implicants do not cover all the 1's, then we try to include less number of non-essential prime implicants in the solution, but the solution is not unique.
- Essential prime implicants must be used in any minimal SOP expression.

> [!example] 
> ![[Implicants in K Map-20240522122236583.webp]]
> 
> ![[Implicants in K Map-20240522135941861.webp]]
> 
> ![[Implicants of a Boolean Function-20240621184908491.webp]]
> 
> ![[Implicants in K Map-20240522102031912.webp]]
> 
> ![[Implicants in K Map-20240522102401831.webp]]

- Redundant non essential prime implicants are avoided in minimal SOP expressions as they are redundant.

> [!example] 
> ![[Implicants in K Map-20240526112001316.webp]]
> 
> ![[Implicants of a Boolean Function-20240621171656301.webp]]
> 
> ![[Implicants of a Boolean Function-20240621170534351.webp]]
> 
> ![[Implicants of a Boolean Function-20240621182709223.webp]]

---
# Treating Don't cares in case of Implicants

- Consider don't cares are 1's in case of implicants and prime implicants.

- Don't cares do not make a prime implicant essential, since don't cares can be either 0 or 1. But for a prime implicant to be essential, it must cover a **unique** **1-cell**.
- To get minimum SOP incase of don't cares, consider only the cells which do not have don't cares, because of the above reason.

|                                                                          | Implicant | Prime Implicant | Essential Prime Implicant                                       |
| ------------------------------------------------------------------------ | --------- | --------------- | --------------------------------------------------------------- |
| Treating [[Don't Cares and Covering Functions#Don't Cares\|Don't cares]] | 1         | 1               | Try to have at least one 1-cell and the rest can be don't cares |

> [!example] 
> Essential prime implicant should cover at least one 1-cell. Not every cell can be a don't care in a essential prime implicant.
> 
> ![[Implicants in K Map-20240522143417348.webp]]

> [!example] 
> ![[Implicants in K Map-20240522150147054.webp]]

---
# Cyclic K-Map

In a cyclic [[Minimization using K Map|k-map]], 
- there is no prime implicant that is essential i.e. every 1-cell is not covered uniquely.
- all the prime implicants have the same size.
- every 1-cell is covered by **exactly two** prime implicants.

From a cyclic k-map, there will be exactly two minimal SOP with no common terms.

> [!example] 
> ![[Implicants in K Map-20240526111338782.webp]]
>  
> ![[Implicants in K Map-20240526111551979.webp]]

---
# Removing literals from Implicants

When a literal or literals are removed from an implicant of a function, it may or may not remain an implicant of the function.

> [!example] 
> ![[Implicants of a Boolean Function-20240621210438617.webp]]
> ![[Implicants in K Map-20240526172417078.webp]]

Since Prime implicant is a (as small as possible) product term that does not have any reduntant literal, removing a literal from a prime implicant will not even remain an implicant.

> [!example] 
> ![[Implicants in K Map-20240526172521709.webp]]

> [!attention] 
> Implicants, Prime Implicants are only defined for SOP expressions i.e. product terms covering 1's or X's, but not 0's

---
# Implicates

![[Implicants in K Map-20240527104733541.webp]]

> [!example] 
> ![[Implicants in K Map-20240527110207766.webp]]


> [!summary] 
> ![[Implicants in K Map-20240527104958870.webp]]

---
