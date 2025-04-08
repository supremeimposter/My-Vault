---
tags:
  - DiscreteMath/Combinatronics
---
# Distributing Objects into Boxes

Objects are distributed into boxes i.e. objects have the choices of boxes, and not the other way around.

## DODB

When we distribute distinguishable objects into distinguishable boxes, we’re assigning each object to a box, but since we’re just focusing on “which objects go into which box,” we **treat the objects inside the same box as indistinguishable** to avoid overcounting permutations.

This is same as permutation with indistinguishable objects.

![[Distributing Objects into Boxes-1742562562428.webp]]

The permutation of $a, b$ inside the box $B_{1}$ is not needed. Similarly for the other boxes.

$$
\begin{split}
&= 7_{C_{2}} \times 5_{C_{3}} \times 2_{C_{2}} \\
&= \frac{7!}{2! \times 3! \times 2!}
\end{split}
$$

The boxes have to be permuted as well, since any box can have 2, 3, 2 objects in any order

$$
\begin{split}
&= 3! \times \frac{7!}{2! \times 3! \times 2!}
\end{split}
$$

## IODB

Since all the objects are indistinguishable, all it matters is each distinguishable boxes gets how many objects?

Since all the objects are indistinguishable i.e. same, we don't have to worry about their permutation, now we care only about which box gets what amount of such objects.

### Why Star-Bars?

> [!hint] 
> Now the star-bars is,
> **stars** - indistinguishable objects
> **bars** - dividing sections simulating a box

1 | 2 | 3 | 4 => these 3 bars form 4 sections i.e. k bars represent or simulate k+1 sections

We are asked to distribute these indistinguishable objects (stars) in to distinguishable boxes

xxxx | xx | xxxx | => here this represent 10 objects (indistinguishable) into 4 boxes (3 bars)

> [!interesting] 
> Now this distributing problem is reduced to choosing positions for these bars among (stars + bars)
> 

No of indistinguishable objects (stars) = $n$
No of distinguishable boxes = $k$
No of bars = $k - 1$

$$
\binom{n + k-1}{k-1}
$$
> [!caution] 
> Star-bars cannot be applied with restrictions

### Combination with Repetition

This problem is **Combinations with Repetitions**.
In how many ways we can choose $r$ objects from $n$ kinds of objects. Once we pick one of the $n$ kinds of objects, we can pick the same type of object again. The order (arrangement) doesn't matter here

<u>r-combinations of n types of objects</u>

r-combination of a set with 4 types of objects is represented as,

stars = $r$
bars = $n-1$
$$
\binom{r + n-1}{n-1}
$$

- Combinations can be considered as choosing elements for sets
- Combinations with repetitions can be considered as multi-sets

![[Distributing Objects into Boxes-1743744609711.webp]]

> [!problem] 
> ![[Distributing Objects into Boxes-1743048752623.webp]]

🍎🍊🍐 **Problem:**
- Select **4 pieces of fruit** from a bowl of Apples, oranges and pears.
- ✅ Order doesn’t matter.
- ✅ Only the type of fruit matters.
- ✅ At least 4 of each type available, so no restrictions on how many you can take.

- **Stars** = 4 pieces of fruit.
- **Bars** = Dividers between different types of fruit.

We are distributing 4 indistinguishable pieces of fruit (stars) into 3 distinguishable types (boxes), i.e., apples, oranges, and pears.
$$
\text{Formula: } \binom{n + k - 1}{k - 1}
$$
Where:
- $(n = 4)$ (number of pieces needed)
- $(k = 3)$ (number of types of fruit)
$$
\binom{4 + 3 - 1}{3 - 1} = \binom{6}{2} = 15
$$

🍎🍊🍐 **Valid Distributions:**

Here’s a breakdown of the possibilities:
- 4 apples, 0 oranges, 0 pears  
- 3 apples, 1 orange, 0 pears  
- 3 apples, 0 oranges, 1 pear  
- 2 apples, 2 oranges, 0 pears  
- 2 apples, 1 orange, 1 pear  
- 2 apples, 0 oranges, 2 pears  
- 1 apple, 3 oranges, 0 pears  
- 1 apple, 2 oranges, 1 pear  
- 1 apple, 1 orange, 2 pears  
- 1 apple, 0 oranges, 3 pears  
- 0 apples, 4 oranges, 0 pears  
- 0 apples, 3 oranges, 1 pear  
- 0 apples, 2 oranges, 2 pears  
- 0 apples, 1 orange, 3 pears  
- 0 apples, 0 oranges, 4 pears  


> [!problem] 
> Composition of integer 5

![[Distributing Objects into Boxes-1743822404330.webp]]

the bars here are nothing but just divisions, no numbers or weights, since we need all the ordered summations. Each box is unique, so the different count matters here, that's why IODB.

![[Distributing Objects into Boxes-1743822743032.webp]]

![[Distributing Objects into Boxes-1743756041367.webp]]

## DOIB

Different objects distributed to identical boxes i.e. boxes doesn't matter, the partition of the objects is reqruired.

DOIB = [[Partition of a Set|number of partitions]] of the set of all the distinct objects.

## IOIB

Identical objects distributed into identical boxes i.e. has to be counted by parts

Partition of an integer


> [!problem] 
> Integer partition of 5

![[Distributing Objects into Boxes-1743821921376.webp]]
![[Distributing Objects into Boxes-1743822509466.webp]]
