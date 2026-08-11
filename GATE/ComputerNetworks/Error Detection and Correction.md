---
tags:
  - ComputerNetworks/Error
---
# Error Detection


# Error Correction



## Hamming Code


### Worked Example

> [!question]
> We have received a code of $0010110$ and now using Hamming codes, find the single bit error and correct it

We are given the received Hamming code:

$$
\boxed{0010110}
$$

with bit positions:

| Position |    1    |    2    |    3    |    4    |    5    |    6    |    7    |
| -------: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
|     Type | $(P_1)$ | $(P_2)$ | $(D_3)$ | $(P_4)$ | $(D_5)$ | $(D_6)$ | $(D_7)$ |
| Received |    0    |    0    |    1    |    0    |    1    |    1    |    0    |

### Step 1: Compute the syndrome

Assume **even parity** (the standard Hamming code convention).

#### Check ($P_1$)

($P_1$) checks positions:

$$
1\;3\;5\;7
$$

Bits:

$$
0\;1\;1\;0
$$

Parity:

$$
0 \oplus 1 \oplus 1 \oplus 0 = 0
$$

So,

$$
S_1 = 0
$$

---

#### Check ($P_2$)

Checks positions:

$$
2\;3\;6\;7
$$

Bits:

$$
0\;1\;1\;0
$$

Parity:

$$
0 \oplus 1 \oplus 1 \oplus 0 = 0
$$

So,

$$
S_2 = 0
$$

---

#### Check ($P_4$)

Checks positions:

$$
4\;5\;6\;7
$$

Bits:

$$
0\;1\;1\;0
$$

Parity:

$$
0 \oplus 1 \oplus 1 \oplus 0 = 0
$$

So,

$$
S_4 = 0
$$

---

### Step 2: Syndrome

$$
S_4\,S_2\,S_1 = 000
$$

Decimal value:

$$
0
$$

This means:

* **No error is detected.**
* The received codeword is already valid.

---

### Step 3: Extract the data bits

Data positions are:

* ($D_3$ = 1)
* ($D_5$ = 1)
* ($D_6$ = 1)
* ($D_7$ = 0)

So the original data sent is

$$
\boxed{1110}
$$

### Final Answer

* **Error position:** No error (syndrome = **000**)
* **Corrected Hamming code:** $\boxed{0010110}$
* **Original data bits:** $\boxed{1110}$
