---
pdf: Hashing
module: 
lecture: 23b
date: 2023-12-03T23:00:00
version:
  - DS-24
last-revision: 
notes-taken: false
tags:
  - DataStructures
  - DataStructures/Hashing
---
# Expectation of Hashing
> [!lecture] Lecture-23b

- Each random variable is about a slot in the hash table.

> [!definition] Expected items per slot

- If there are ${} n {}$ items and $m {}$ slots in a hash table.
- The probability of an element mapping to the slot 1 is ${} \frac{1}{m} {}$, $m {}$ is the number of slots on the table.
- The probability of an element NOT mapping to the slot 1 is ${} (1 - \frac{1}{m})$
- Let $X$ be the random variable of number of elements in slot $1$.
- Expectation of $X$, $E(X) = \frac{n}{m}$ 

> [!quote] 
> You can work with bernoulli random variable, whenever there is a question on binomial random variable.


> [!definition] Expected number of empty location

- Let $X$ be the random variable of number of empty locations.


> [!discussion] 
> ![[Expectation of Hashing-20231203232211091.webp]]


> [!definition] Expected Number of collisions

- Each individual random variable is for collision at ${} i^{th} {}$ insertion.

- Collision cannot happen at the first insertion.
- Collision for second insertion depends on the previous element and so on.