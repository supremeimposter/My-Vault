---
pdf: mod-3
module: 3
lecture: 
date: 2024-04-19T09:26:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - Algorithm/DivideAndConquer
  - Algorithm/Sorts
---
# Maximum and Minimum of Numbers

> [!important] 
> In this analysis, we are not talking about asymptotic analysis, we are trying to get the exact number of comparisons.


> [!youtube] IIT Kharagpur Lectures
> [Lec-5 Data Structuring: Case Study-I - YouTube](https://www.youtube.com/watch?v=lEvzwEcjQ54)
> [Lec-6 Data Structuring: Case Study-II - YouTube](https://www.youtube.com/watch?v=t0ze7NJIh8M)
> [Lec-7 Data Structuring: Case Study-III - YouTube](https://www.youtube.com/watch?v=NU77XIX-wro)


> [!pdf] CLRS 
> Median and other statistics



> [!discussion] Lecture-12a
> Mod-3 Pg. No. 9
> ![[Maximum and Minimum of Numbers-20240419092817274.webp]]
> ![[Maximum and Minimum of Numbers-20240419092829600.webp]]


> [!discussion] Lecture-12b
> ![[Maximum and Minimum of Numbers-20240419094436760.webp]]




![[Maximum and Minimum of Numbers-20240419210954961.webp|keeping track for candiates of second maximum]]



> [!discussion] Lecture-13c
> ![[Maximum and Minimum of Numbers-20240420191417760.webp]]
> ![[Maximum and Minimum of Numbers-20240420191438031.webp]]
> ![[Maximum and Minimum of Numbers-20240420191501521.webp]]

```c title="maximum.c"
int max, min, A[10];
max = min = A[0];

for (int i = 1; i < 10; i++) {
	if (a[i] > max) max = a[i];
	if (a[i] < min) min = a[i];
}
```

The above program can be improved by a `else` block in conditionals, since `a[i] > max` and `a[i] < min` cannot happen simultaneously.

```c hl:6 title="maximum_improved.c"
int max, min, A[10];
max = min = A[0];

for (int i = 1; i < 10; i++) {
	if (a[i] > max) max = a[i];
	else if (a[i] < min) min = a[i];
}
```

- In a tournament of $n$ players, $(n - 1)$ matches are necessary and sufficient to determine a winner.

![[Maximum and Minimum of Numbers-20240420220200239.webp|Various tournaments to find the maximum of n numbers]]

- If a number has won at least one match, it will not be among the losers.
- The minimum can be found in the set who have lost their first match.


# Second Maximum

```c title="max_and_second_max.c" hl:7,11
int max = first; // put the first element into max
int nextmax = max;

for(int i = 1; i <= n - 1; i++) {
	scanf("%d", &numb);

	if (numb > max) {
		nextmax = max; // here the maximum so far becomes the second max
		max = numb;
	}
	else if (numb > nextmax) {
		nextmax = numb;
	}
}
```

In the above code, in the worst case both the conditionals in the LINE 7 and LINE 11 may fail, then $2(n - 1)$ comparisons will be made.

In a tournament of $n$ numbers, the second maximum will be the among those who have lost to the largest of those $n$ numbers.

![[Analysis of Maximum and Minimum-20240421114812961.webp]]

![[Analysis of Maximum and Minimum-20240421115223677.webp]]

In the worst case, the number of comparisons made to find the second maximum is the length of the longest path in the tournament. The length of the longest path can be minimized if the tournament tree is balanced. The tree is balanced, if we take **pairwise** **tournament**.

![[Analysis of Maximum and Minimum-20240421121945262.webp]]

For $n$ elements, a tournament can be built using an array of size $2n - 1$.

![[Analysis of Maximum and Minimum-20240421165653398.webp|Setting up a Tournament]]

In an array of size $2n - 1$, start filling the array from the position $n$ until the position $2n - 1$. Every pairwise elements at the position $i$ and $i + 1$ are compared and the largest one is stored at the position $\big\lfloor \frac{i}{2} \big\rfloor$.

If $n = 2^k$,

![[Analysis of Maximum and Minimum-20240421170725479.webp|$n = 8$]]

If $n \not= 2^k$,

![[Analysis of Maximum and Minimum-20240421175217268.webp|$n = 7$]]

The root of the tournament structure gives the largest of $n$ numbers.

The following procedure is followed to find out the second maximum from the tree:
1. Multiply the position of root (1) by 2 to get to the next level.
2. Assign the value of the least of the two child nodes to a temporary variable.
3. Multiply the position of the maximum value of the two child nodes to get to the next level.
4. Compare the value in the temporary variable with the least value of the two child nodes and update the maximum value to the temporary variable.
5. Repeat 2, 3, 4.

In the above procedure, you are tracing the route of the largest number from the root to leaf nodes.
In the worst case, finding the second maximum takes $2 \lceil log_2 n \rceil$ comparisons.

```cpp title="computing-tournament.cpp"
// computing the tournament from backwards
for (int i = (2 * n - 2); i > 1; i -= 2) {
	tournament[i / 2] = std::max(tournament[i], tournament[i + 1]);
}

std::cout << "Max : " << tournament[1] << "\n";

int i = 2;
int second_maximum = std::min(tournament[2], tournament[3]);

while (i <= 2 * n - 1) {
	if (tournament[i] > tournament[i + 1]) {
		second_maximum = std::max (tournament[i + 1], second_maximum);
		i = 2 * i;
	
	} else {
		second_maximum = std::max (tournament[i], second_maximum);
		i = 2 * (i + 1);
	}
}
```

The second maximum can also be obtained if a traversal is made downwards by making the largest element as a minimum value which is not in the tournament in every of its node and when going upwards recomputing the tournament again. Now the root will be the second maximum.

i.e. second maximum must be one of the siblings of the maximum at some level.

![[Analysis of Maximum and Minimum-1765019720861.webp]]

The above procedure can be followed to obtain third maximum, fourth maximum and so on. This procedure takes  $\underbrace {N - 1}_{\text{building the tournament}} + \underbrace {2\;log_2N}_{\text{second maximum}}$ comparisons.

This idea can be implemented as a sorting algorithm called Tournament sort which takes $\underbrace {N - 1}_{\text{building the tournament}} + \underbrace {2 (N - 1) \;log_2N}_{\text{finding the next maximum}}$ number of comparisons. This is an efficient algorithm than [[Bubble Sort|bubble sorting]] algorithm.

A more complex version of this tournament sort is the [[Heap Sort|heap sort]] which takes only array of size $n$ instead of $2n - 1$.


> [!link] 
> [Algorithms: TIFR CSE 2011 | Part B | Question: 31](https://gateoverflow.in/20617/tifr-cse-2011-part-b-question-31)
> [Two smallest](https://www.codinghelmet.com/exercises/two-smallest)

---

## Adversary proof for finding the second maximum

> **Claim:**
> Any comparison-based algorithm that finds the **maximum and the second maximum** among (n) elements requires at least
$$
\boxed{n + \lceil \log_2 n \rceil - 2}
$$
> comparisons in the worst case.

This is a **lower bound**.

---

### What “second maximum” really means (critical)

An element is the **second maximum** if and only if:

* it is **not the maximum**, and
* it is **larger than every element except the maximum**

In comparison-model terms:

> The second maximum must be the **largest element that has lost directly to the maximum**.

That word **directly** is non-negotiable.

### Key invariant

> If an element has **never been compared to the maximum**,
> it **cannot be ruled out** as the second maximum.

Why?
Because for all the algorithm knows, that element might be just slightly smaller than the max.

---

### Adversary strategy (simple and deadly)

The adversary plays this game:

* It allows the algorithm to find the maximum.
* But it tries to ensure that **as many elements as possible remain plausible candidates for second maximum**.

How?

### Rule:

Whenever an element loses a comparison:

* the adversary pretends it lost to **the largest element seen so far**.

This keeps the “second-largest” ambiguity alive.

---

### Phase 1: Finding the maximum (unavoidable)

No escape here.

To prove an element is the **maximum**:

* every other element must lose **at least once**

So:
$$
\text{At least } n - 1 \text{ comparisons}
$$

This part is identical to normal max-finding.

---

### Phase 2: Who can still be second maximum?

Let’s name the true maximum: **M**

Now look at all elements that:

* lost **directly** to (M)

Call this set:
$$
L(M)
$$
**Fact (absolute):**

> The second maximum must lie in $(L(M))$.

No other element is even eligible.

---

### Adversary’s core move

The adversary arranges comparisons so that:

* $(M)$ only compares against **one element per round**
* Like a knockout tournament

That way:

* the number of elements in $(L(M))$ is as large as possible
* specifically:
$$
  |L(M)| \ge \lceil \log_2 n \rceil
$$

Why?
Because each time (M) compares, it eliminates **only one** candidate.
To beat (n-1) elements, it needs at least $\lceil \log_2 n \rceil$ wins in a balanced comparison structure.

---

### Phase 3: Determining the second maximum

Now the algorithm must:

* find the **largest element among (L(M))**

That takes:
$$
|L(M)| - 1 \ge \lceil \log_2 n \rceil - 1
$$
comparisons.

There is **no shortcut**:

* these elements have never been compared with each other
* the adversary kept them mutually unordered

---

### Total lower bound (add it up)

* Finding maximum: (n - 1)
* Finding second max among its losers:
  (\lceil \log_2 n \rceil - 1)

So:
$$
\boxed{n + \lceil \log_2 n \rceil - 2}
$$

Done. Tight. Unavoidable.

---

> An adversary can force the maximum to compare against at least $\lceil \log n \rceil$ elements.
> The second maximum must be the largest among those elements that lost directly to the maximum, which requires $\lceil \log n \rceil - 1$ additional comparisons.
> Hence any algorithm needs at least $(n + \lceil \log n \rceil - 2)$ comparisons.

---

# Analysis of Comparison Model for Maximum and Minimum of an Array

## What the comparison model really is (plain truth)

In the **comparison model**:

* The algorithm **knows nothing** about values
* It only learns from answers to questions of the form
  👉 *“Is x < y?”*

That’s it.
No arithmetic. No indices. No magnitudes.
Only **relative order revealed by comparisons**.

Everything else you *think* the algorithm knows is an illusion.

---

## Key rule (burn this in)

> **An algorithm cannot claim anything unless it has been forced by comparisons.**

If something hasn’t:

* **lost once** → it *could still be the maximum*
* **won once** → it *could still be the minimum*

This is the core invariant.

---

## Tiny example (this will click it)

Let’s say we have **4 elements**:

```
a, b, c, d
```

Initially, the algorithm knows:

| Element | Could be min? | Could be max? |
| ------- | ------------- | ------------- |
| a       | yes           | yes           |
| b       | yes           | yes           |
| c       | yes           | yes           |
| d       | yes           | yes           |

No assumptions allowed.

---

## One comparison happens

Algorithm asks:

```
a ? b
```

Adversary answers:

```
a < b
```

Now what changed?

* `a` **lost** → ❌ cannot be maximum
* `b` **won** → ❌ cannot be minimum

Updated knowledge:

| Element | Could be min? | Could be max? |
| ------- | ------------- | ------------- |
| a       | yes           | ❌             |
| b       | ❌             | yes           |
| c       | yes           | yes           |
| d       | yes           | yes           |

⚠️ Notice:

* `a` could still be **minimum**
* `b` could still be **maximum**

One comparison → **one loser + one winner**
That’s all the information you get. No more.

---

## Second comparison

Algorithm compares:

```
c ? d
```

Adversary:

```
c < d
```

Now:

| Element | Could be min? | Could be max? |
| ------- | ------------- | ------------- |
| a       | yes           | ❌             |
| b       | ❌             | yes           |
| c       | yes           | ❌             |
| d       | ❌             | yes           |

At this point:

* Two elements eliminated from max
* Two eliminated from min

This is **efficient use** of comparisons.

---

## Why linear scan wastes power

Suppose instead the algorithm did:

```
a ? b   → a < b
b ? c   → b < c
c ? d   → c < d
```

What happened?

* `a` lost → not max
* `b` lost → not max
* `c` lost → not max

But:

* Only `d` won → not min
* Everyone else might still be min

You eliminated:

* 3 max-candidates
* only 1 min-candidate

That’s **information imbalance**. Wasteful.

---

## The adversary’s mindset (this is crucial)

The adversary’s job is to say:

> “Unless you *force* me to admit something, I won’t.”

So the adversary:

* answers consistently
* but always in a way that leaves **as many possibilities open as possible**

That’s why we say:

* each comparison gives **at most**

  * one “not max”
  * one “not min”

Never more.

---

## Why this leads to the lower bound

To finish the problem:

* (n-1) elements must be proven **not maximum**
* (n-1) elements must be proven **not minimum**

Total proofs needed:
$$
2n - 2
$$

But:

* each comparison gives **at most 2 proofs**
* and near the end, many give only **1**

So you **cannot** finish in fewer than:
$$
\lceil 3n/2 \rceil - 2
$$

No cleverness escapes that.

---

## One sentence summary

> In the comparison model, an element remains a candidate for minimum until it wins, and a candidate for maximum until it loses; comparisons are the only way to eliminate these possibilities.




