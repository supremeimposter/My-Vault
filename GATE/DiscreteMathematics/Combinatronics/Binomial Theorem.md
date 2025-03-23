---
tags:
  - DiscreteMath/Combinatronics
---
# Binomial Theorem

$$
(a+b)^n = \sum_{r=0}^{n} \, n_{C_{r}} \:\:\: a^{r} b^{n-r}
$$

Let's take the binomial (a+b) raised to a power n => $(a+b)^n$

It counts all the different n-length terms consisting of either a or b, or both
For example,
aaaaaa...a
abbbab...b
aababa...a
bbbbaa...b
bbbbbb...b

Here the permutation does matter i.e. abab is not same as aabb 
but we count the different ways of getting such a term where there are 2 a's and 2 b's i.e. a^2 . b^2

summation from r=0 to r=n over (nCr) x (a^r. b^(n-r))
The number of ways in which we get the term a^r. b^(n-r) is counted in steps

r=0:
nC0 x a^0 . b^n => 1 way of getting 0 a's and n b's
bbbbbb...b -> only 1 such term

r=1:
nC1 x a^1 . b^(n-1) => n ways of getting 1 a's and n-1 b's
abbbbb...b
babbbb...b
...
bbbbbb...a

n such terms

r=2:
nC2 x a^2 . b^(n-2) => (n(n-1))/2 ways of getting 2 a's and n-2 b's
aabbbb...b
babbab...b
...
bbbbba...a

nC2 such terms

r=3:
nC3 x a^3 . b^(n-3) => nC3 ways of getting 3 a's and n-3 b's
aaabbb...b
babbaa...b
...
bbbbba...a

nC3 such terms

and so on...

r=n:
nCn x a^n . b^0 => 1 way of getting n a's and 0 b's
aaaaaa...a

So both sides are counting the same things
One counts all the possibilites at once and the other counts the number of occurences of terms of different a, b compositions.

