---
tags:
  - DiscreteMath/GraphTheory
---
# Hamiltoninan cycles in undirected complete graphs


## 💫 Hamiltonian Cycles in $K_n$

### 📌 **What’s a Hamiltonian Cycle?**

A **Hamiltonian cycle** is a cycle that:

* Visits **each vertex exactly once**
* And **returns to the starting point**

So, in a complete graph $K_n$, since every vertex is connected to every other, Hamiltonian cycles **do exist for all $n \geq 3$**.

---

### ✨ How Many Hamiltonian Cycles Are There in $K_n$?

We’re looking for **unique** Hamiltonian cycles. So we avoid overcounting due to:

* **Rotations**: (a → b → c → d → a) is the same as (b → c → d → a → b)
* **Reversals**: (a → b → c → d → a) is the same as (a → d → c → b → a)

So, total **unique Hamiltonian cycles** in $K_n$ is:

$$
\frac{(n - 1)!}{2}
$$

---

### 💡 Why $\frac{(n - 1)!}{2}$ ?

* There are $(n - 1)!$ permutations of visiting all $n$ vertices **starting from a fixed vertex**
* But each cycle can be **traversed in two directions**, so we divide by 2.

---

### 🧮 Let’s See Some Examples:

#### 🔸 $K_3$:

$$
\frac{(3 - 1)!}{2} = \frac{2!}{2} = \frac{2}{2} = 1
$$

✔️ One Hamiltonian cycle: (a → b → c → a)

#### 🔸 $K_4$:

$$
\frac{(4 - 1)!}{2} = \frac{6}{2} = 3
$$

✔️ Three unique Hamiltonian cycles:

* a → b → c → d → a
* a → b → d → c → a
* a → c → b → d → a

(Other permutations are just rotations or reversals.)

#### 🔸 $K_5$:

$$
\frac{(5 - 1)!}{2} = \frac{24}{2} = 12
$$

✔️ Twelve unique Hamiltonian cycles

---

### 🧠 General Formula Recap:

$$
\boxed{\text{Hamiltonian cycles in } K_n = \frac{(n - 1)!}{2}}
$$


----
