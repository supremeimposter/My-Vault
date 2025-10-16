---
tags:
  - Calculus
---
# Indeterminate forms of a function

## **The Core Idea**

When you see something like:

$$
\lim_{x \to \infty} \frac{f(x)}{g(x)}
$$

you’re really asking:
**"As $x$ grows, which one dominates — the numerator $f(x)$ or the denominator $g(x)$?"**

* If the **numerator grows faster**, the fraction blows up to $\infty$.
* If the **denominator grows faster**, the fraction shrinks to $0$.
* If they grow at the **same rate**, you get a finite constant.

---

## **Growth Hierarchy (Fastest → Slowest)**

This is a crucial mental ladder:

$$
\text{Factorials} \gg \text{Exponentials} \gg \text{Polynomials} \gg \text{Logarithms}.
$$

For example:

* $e^x$ grows **faster** than $x^{1000}$.
* $x^{1000}$ grows **faster** than $\ln x$.
* And $\ln x$ grows **slower** than all of them.

So:

$$
\lim_{x \to \infty} \frac{\ln x}{x} = 0,
$$

because $x$ grows way faster than $\ln x$.

---

## **"Shrinking" Race**

For forms like $0 × \infty$, think of it as a race:

* $x \to 0$ is trying to **shrink** the value.
* $1/x \to \infty$ is trying to **grow** the value.
  Who wins? Depends on **how fast** each side moves.

Example:

$$
\lim_{x \to 0^+} x \ln x.
$$

* $x \to 0$ (shrinking fast).
* $\ln x \to -\infty$ (growing in negative direction, but very slowly compared to how fast $x$ hits zero).
* Result = 0, because $x$ "shrinks" faster than $|\ln x|$ grows.

---

## **Visual Intuition**

Imagine two runners:

* One starts fast (like $e^x$), the other jogs slowly (like $x^2$).
* Even if the slow runner starts ahead, the fast runner will eventually dominate. That’s why:

$$
\lim_{x \to \infty} \frac{e^x}{x^{100}} = \infty.
$$

---

## **Key Trick for "Speed Check"**

If you’re not sure who’s faster, take the ratio and check:

$$
\lim_{x \to \infty} \frac{f(x)}{g(x)}.
$$

* If the limit is 0, **g grows faster**.
* If ∞, **f grows faster**.
* If a constant, they’re **same rate**.

---
# **Growth Race Chart (Fastest → Slowest)**

### **1. Factorials (n!)**

* **Fastest growth** among standard functions.
* Example: $\lim_{n \to \infty} \frac{n!}{2^n} = \infty$.
  (Even $100!$ is astronomically bigger than $2^{100}$.)

---

### **2. Exponentials ($a^x$, $e^x$)**

* Exponentials beat polynomials and logs.
* Example: $\lim_{x \to \infty} \frac{x^{10}}{e^x} = 0$.
  (No matter the power of $x$, $e^x$ wins.)

---

### **3. Polynomials ($x^n$)**

* Polynomials beat logs but lose to exponentials.
* Example: $\lim_{x \to \infty} \frac{\ln x}{x^2} = 0$.

---

### **4. Logs ($\ln x$, $(\ln x)^k$)**

* Logs grow painfully slow compared to anything above.
* Example: $\lim_{x \to \infty} \frac{\ln x}{x} = 0$.

---

### **5. Constants**

* Obviously slower than anything above.
* Example: $\lim_{x \to \infty} \frac{5}{x} = 0$.

---

### **6. Inverse Powers ($1/x^n$)**

* Shrink **faster** than $\ln x$ grows.
* Example: $\lim_{x \to \infty} x \cdot \frac{1}{x^2} = 0$.

---

# **Hierarchy Summary (for $x \to \infty$):**

$$
n! \gg a^x \gg x^n \gg \ln x \gg \text{constant} \gg \frac{1}{x^n}
$$

---
