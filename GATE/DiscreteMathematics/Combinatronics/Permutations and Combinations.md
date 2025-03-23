---
tags:
  - DiscreteMath/Combinatronics
---
# Permutations

The different ways to arrange $r$ objects out of $n$ distinct objects.

Consider a set of distinct elements,

![[Permutations and Combinations-20250202112045893.webp]]

In how many different ways, you can arrange 3 objects out of 6 objects?

![[Permutations and Combinations-20250202112106584.webp]]

It will be $6_{P_{3}}$ where order of the same set of objects matter.

![[Permutations and Combinations-20250202115915677.webp]]

To arrange $r$ objects out of $n$ distinct objects, we need to permute them,
$$n_{P_{r}} = \frac{n!}{(n-r)!}$$

> [!important] The empty arrangement $n_{P_{0}}$

$$
\begin{split}
n_{P_{0}} &= \frac{n!}{(n-0)!} \\ 
&= \frac{n!}{n!} \\
&= 1
\end{split}
$$

The empty arrangement is counted as a permutation as well

> [!problem] Permutations
COMBATTIVE (yes, double T's)
(this word COMBATTIVE can also be considered as an unordered set)
>
**conditions:**
> 1. the vowels have to stay in alphabetical order (not necessarily consecutive)
> 2. the consontants have to stay in alphabetical order (not necessarily consecutive)

order of vowels = AEIO (there is no U in this COMBATTIVE) 
order of consonants = BCMTTV (there are two T's though)

there are totally 10 elements = $10!$

we have to remove the permutations of the vowels
$$
\frac{10!}{4!}
$$

we also have to remove the permutations of the 6 consonants
$$
\frac{10!}{4! \times 6!}
$$

When the permutations of the 6 consonants are removed, along with them the permutations of 2 T's are also removed. $6! \times 2!$ is wrong and it overcounts.

Final answer
$$
\frac{10!}{4! \times 6!}
$$


> [!problem] 
> **An additional condition:**
> 3. vowels cannot be together

The consonants can be constructed as barriers

_ B _ C _ M _ T _ T _ V _ = 7 spots for 4 vowels $=7_{C_{4}}$
$$
\text{result} = {\frac{10!}{4! \times 6!}} \times 7_{C_{4}}
$$


> [!problem] Circular permutation

![[Permutations and Combinations-1741974109408.webp]]


# Combinations

What if we don't care about the different permutations of the same 3 objects?

![[Permutations and Combinations-20250202112401054.webp]]

Here, we are not arranging these 3 objects out of 6 distinct objects. i.e. we are selecting 3 objects from 6 distinct objects. 

Well it is easy to count from the permutations of 3 out of 6 objects.

![[Permutations and Combinations-20250202120704205.webp]]

The set of permutations to combinations is a well-defined [[Function Definition|function]] with $6-1$ correspondence and an onto function.

To know the number of ways, we can select 3 out of 6 objects, we can remove these $3!$ permutations of the same 3 objects. for example, $abc, acd$ 

$$
\frac{n_{P_{r}}}{r!} = n_{C_{r}}
$$

> [!important] The empty selection $n_{C_{0}}$

Number of subsets of size 0 from a base set $S$ where, $\mid S \mid = n$ is 1 i.e. the empty set $\phi$

Number of subsets of size $r$ where $r \gt n$ from a base set $S$ whose cardinality is $n$, is 0 i.e. there are no such subsets whose cardiality is larger than the base set itself.


> [!summary] 
> - Permutation is a fancy name for Product Rule
> - Combination is a fancy name for Division Rule

