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

> [!summary] 
> - Permutation is a fancy name for Product Rule
> - Combination is a fancy name for Division Rule

