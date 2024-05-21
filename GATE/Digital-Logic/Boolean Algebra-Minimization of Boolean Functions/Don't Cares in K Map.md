# Don't Care
- For a boolean function or a digital circuit, some input combinations **can never occur**. For such input combinations, we do not care about the function values.
- For a boolean function or a digital circuit, some input combinations **can occur, but we do not care** about what happens to those input combinations.

> [!NOTE] 
> By default, boolean functions are completely specified i.e. total functions

- Functions with don't care combinations are incompletely specified functions or partial functions.
![[Minimization using K Map-20240520175648429.webp]]
- A partial function with $k$ don't care combinations corresponds to a class of $2^k$ functions, since don't cares can be either 0 or 1.
- Every partial function is a class of functions.

- Dont cares can be used in any way we desire (0 or 1). We can try to create bigger cubes using don't cares to create minimized SOP and minimized POS.

> [!example] 
> ![[Minimization using K Map-20240520191104140.webp]]
> ![[Minimization using K Map-20240520191503113.webp]]
> ![[Minimization using K Map-20240520191756677.webp]]

> [!important] 
> ````col
> ```col-md
> flexGrow=1
> ===
> Since don't cares can be anything, we can utilize it to create cubes of appropriate size to create the minimized SOP and minimized POS.
>
>
> ![[Minimization using K Map-20240520192619472.webp]]
> ```
> ```col-md
> flexGrow=1
> ===
> ![[Minimization using K Map-20240520192637404.webp]]
> ![[Minimization using K Map-20240520192757190.webp]]
> ```
> ````


> [!example] 
> Look for redundant cubes after grouping cubes.
> ````col
> ```col-md
> flexGrow=1
> ===
> ![[Minimization using K Map-20240520193236952.webp]]
> ```
> ```col-md
> flexGrow=1
> ===
> ![[Minimization using K Map-20240520193248318.webp]]
> ```
> ````


## Covering Functions
- A function $f$ covers $g$ **iff** whenever $g = 1$, then $f = 1$ **or** whenever $f = 0$, then $g = 0$.
$$
f \text{ covers } g \equiv g \text{ implies } f \equiv g \rightarrow f
$$
- There is no assignment of values that makes $g = 1$ and $f = 0$

- If $f$ covers $g$, then $f$ is the covering function of $g$ and either of these two conditions occur
````col
```col-md
flexGrow=1
===
If $g$, then $f$

|g|f|
| --- | --- |
|1|1|
|0|0 or 1|
```
```col-md
flexGrow=1
===
If $f$, then $g$

|f|g|
| --- | --- |
|0|0|
|1|0 or 1|
```
````

> [!example] 
> ![[Minimization using K Map-20240520200055750.webp]]

> [!example]
>> $f = a \oplus b$ and $g = a + b$. Does $f$ cover $g$ or $g$ cover $f$ ?
>
 ![[Minimization using K Map-20240222105636186.webp]]


> [!example] 
> ![[Minimization using K Map-20240520204227217.webp]]
> ![[Minimization using K Map-20240520204246521.webp]]
> ![[Minimization using K Map-20240520204334283.webp]]
> ![[Minimization using K Map-20240520204746429.webp]]

### Analysis of Covering Functions
- If $f$ covers $g$ and $g$ covers $f$, then $f$ and $g$ are the same functions i.e. $f = g$

> [!tip]
> Covering of functions is defined on minterm point of view (1's point of view).

````col
```col-md
flexGrow=1
===
If $f(a, b, c) = \sum_{m} (0, 5, 7)$, then the covering function of f is,
$g = \sum_{m}(0, 5, 7) + d (1,2,3,4,6)$
```
```col-md
flexGrow=1
===
If $f(a, b, c) = \prod_{m} (0, 5, 7)$, then the covering function of f is,
$g = \sum_{m}(1,2,3,4,6) + d (0, 5, 7)$
```
````


> [!pdf] lec06D pg. No. 120

For any function $F$, the minimum SOP expression for the covering function of $F$ is 1
For any function $F$, the minimum POS expression for the covering function of $F$ is 1.
![[Don't Cares in K Map-20240520225756833.webp|Not sure if this is the correct explanation]]


Smaller product terms cover larger product terms i.e. bigger product terms implies its subset product terms.
- If $P_1$ and $P_2$ are two product terms, then $P_1 \rightarrow P_2$ iff literals ($P_2$) $\subseteq$ literals ($P_1$)
![[Don't Cares in K Map-20240520230410740.webp]]

Bigger sum terms cover smaller sum terms i.e. smaller sum terms implies its superset sum terms.
- If $S_1$ and $S_2$ are two sum terms, then $S_1 \rightarrow S_2$ iff literals ($S_1$) $\subseteq$ literals ($S_2$)
![[Don't Cares in K Map-20240520230636415.webp]]

---