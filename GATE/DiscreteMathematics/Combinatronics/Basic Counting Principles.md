---
pdf: lec-1-4, lec-5-8A
module: 8
lecture: 1, 2, 3, 4, 5
date: 2023-11-19T13:57:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DiscreteMath/Combinatronics
---
# Basic Counting Principles

## Sum Rule

If two sets ${} A$ and $B$ are disjoint i.e. ${} A \cap B = \phi {}$, then 
$$
\mid A \; \cup \; B \mid = \mid A \mid + \mid B \mid
$$


> [!scenario] 

![[Basic Counting Principles-20250120011257347.webp]]

To take 1 ball from these 3 distinct boxes that all contain the same colored balls as the color of the box, how many ways are there?

**Task** : Pick 1 ball

You can pick 1 ball from any of these boxes that contain many balls
$$
10 + 20 + 15 = 45
$$

Look at it this way, for $45$ times, you will always pick a very different ball. There are $45$ choices from these three mutually exclusive boxes i.e. there are $45$ balls.

> [!think] 
> How about picking 2 balls?

## Product Rule

How many ways to do a task as a series of sub-tasks one followed by another?


> [!scenario] 

![[Basic Counting Principles-20250120011304533.webp]]

Take 2 balls from the these three mutually exclusive bins.

For the first ball, there are $10 + 20 + 15 = 45$ choices.

Now 1 ball is picked up and there are only $44$ more balls left totally from the bins.

For the second ball, there are $44$ choices.

$$
\underbrace{45}_{\text{for the first ball}} \cdot \underbrace{44}_{\text{for the second ball}} = 1980 \:\text{choices}
$$

There are $45 \cdot 44$ ways to pick this ball

**Task** : pick 2 balls
**Sub-tasks** : pick first ball and then pick second ball


> [!discussion] Lecture-3A
> ![[Combinatronics-20231119165212742.webp]]



> [!example] 
> No of bit-strings of length 7

**Task** : create a bit-string of length 7
**Sub-tasks** : choose first symbol, choose second symbol, $\cdots$ choose 7th symbol

$$
\underbrace{2}_{\text{first symbol}} . \underbrace{2}_{\text{second symbol}} . 2 . 2 . 2 . 2 . \underbrace{2}_{\text{seventh symbol}} = 2^7
$$

Look at it this way. There are $2^7$ different bit-strings of length 7.


> [!example] 
> Tops and bottoms

**Task** : Choose a dress to wear from 3 shirts and 4 pants

![[Basic Counting Principles-20250120180312611.webp|Choose shirt and then pant]]

![[Basic Counting Principles-20250120180324893.webp|Choose pant and then shirt]]

Remember both of these different ways of counting result in the same task i.e. Choose a dress. These different ways should not be counted as additional ways of choosing the dress.

This is similar to the cartesian product of the set of shirts and the set of pants.
$$
\begin{equation}
\begin{split}
\mid \text{Shirts} \times \text{Pants} \mid &= \mid \text{Shirts} \mid \cdot \mid \text{Pants} \mid \\
&= 3 \cdot  4 \\
&= 12
\end{split}
\end{equation}
$$

## Subtraction Rule

To avoid over-counting when the sets are not mutually exclusive.

If two sets $A$ and $B {}$ are NOT disjoint i.e. ${} A \cap B \not= \phi {}$, then 
$$
\mid A \; \cup \; B \mid = \mid A \mid + \mid B \mid - \mid A \cap B \mid
$$
![[Guidelines to GATE-CS-20250126094526618.webp]]

Consider the case, where there might be nothing can be one possible case and counting it as 1 or 0 depends highly on the context.

## Counting by Cases

- Mutually exclusive and exhaustive cases count everything only once i.e. count everything that is in the scenario.

> [!discussion] Lecture-6
> ![[Combinatronics-20231122135558284.webp]]
> ![[Combinatronics-20231122135618297.webp]]


## Complementary Counting

- If the desired cases cannot be counted, then non-desired cases can be counted and subtracted from the total.

## Division Rule

- Sometimes, it is easy to count the total possibilities rather than the desires ones. So the desired ones can be obtained from the total by division rule.
- It can ignore umimportant cases.
- k-1 correspondence


> [!problem] 
 ![[Basic Counting Principles-1741789319413.webp]]

5 per team and two unlabelled teams
It is enough to choose 5 people for a team and the rest will form a team themselves without a choice

Choosing 5 people out of 10 
$$
= \frac{(10 \times 9 \times 8 \times 7 \times 6) }{5!} = k
$$
we are removing the permutation of these 5 people within a team, since order does not matter within a team

Since the teams are unlabelled, it does not matter which 5 goes to which team i.e. $k/2$


| first unlabelled team | second unlabelled team |
| --------------------- | ---------------------- |
| ABCDE                 | FGHIJ                  |
| FGHIJ                 | ABCDE                  |

These two are same and does not need to be counted

$$
\text{result} = \frac{(10 \times 9 \times 8 \times 7 \times 6)}{5! \times 2}
$$

> [!problem] 
 ![[Basic Counting Principles-1741790809840.webp]]

Now 3 unlabelled teams of 4 each

step 1 : choose 3 from 12
step 2 : choose 3 from 6
step 3 : rest of the 3 has no choice

$$12_{C_3} \times 6_{C_{3}} \times 3_{C_{3}}$$

But these are unlabelled teams and order is not required
these 3 teams have 3! permutations which has to be removed

$$\text{result} = \frac{{12_{C_3} \times 6_{C_{3}} \times 3_{C_{3}}}}{3!}$$
