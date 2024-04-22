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
	else if (numb < nextmax) {
		nextmab = numb;
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

The above procedure can be followed to obtain third maximum, fourth maximum and so on. This procedure takes  $\underbrace {N - 1}_{\text{building the tournament}} + \underbrace {2\;log_2N}_{\text{second maximum}}$ comparisons.

This idea can be implemented as a sorting algorithm called Tournament sort which takes $\underbrace {N - 1}_{\text{building the tournament}} + \underbrace {2 (N - 1) \;log_2N}_{\text{finding the next maximum}}$ number of comparisons. This is an efficient algorithm than bubble sorting algorithm.

A more complex version of this tournament sort is the heap sort which takes only array of size $n$ instead of $2n - 1$.


> [!link] 
> [Algorithms: TIFR CSE 2011 | Part B | Question: 31](https://gateoverflow.in/20617/tifr-cse-2011-part-b-question-31)
> [Two smallest](https://www.codinghelmet.com/exercises/two-smallest)

---