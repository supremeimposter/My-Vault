---
tags:
  - ProgrammingWithC/Operators
date: 2025-07-02
last-revision: 2025-07-02T17:43:00
---
# 📌 Sequence Points in C

Sequence points in C define well-defined moments during execution where:

- All **side effects** of previous evaluations are guaranteed to be complete.
- No side effects of subsequent evaluations have started yet.

Understanding sequence points is key to writing **portable, bug-free C code**.

---

## ✅ Common Sequence Points

- **End of a full expression**
  Example: `x = y + z; // semicolon marks a sequence point`

- **After logical AND/OR operands**
  Example: `if (f1() && f2()) // sequence point after f1()`

- **After comma operator**
  Example: `a = (f1(), f2()); // sequence point after f1()`

- **After evaluating the condition of the ternary conditional operator**
  Example: `x = cond ? f1() : f2(); // sequence point after cond`

- **After evaluation of all function arguments, before entering the function body**
  Sequence point occurs after all function arguments have been evaluated and before the function body starts.

- For all **conditionals** (if, switch) and loops (for, while, do-while), there’s a sequence point after evaluating their condition/expression before entering their body.

---

## ⚠️ Common Mistakes Causing Undefined Behavior

1️⃣ **Modifying a variable more than once between sequence points**

```c
i = i++ + ++i; // ❌ undefined behavior
```

2️⃣ **Reading and modifying the same variable without a sequence point**

```c
a[i] = i++; // ❌ undefined: i is read and modified without a sequence point
```

3️⃣ **Assuming left-to-right evaluation order of function arguments**

```c
foo(i++, i++); // ❌ undefined: order of i++ evaluations is unspecified
```

4️⃣ **Counting on order of operands in binary operators**

```c
y = (i++) * (i++); // ❌ undefined: order of evaluation of i++ operands is not defined
```

---

## ✅ Golden Rule

> Between two sequence points, **never modify a variable more than once**, or modify it and read it in the same expression.

Separate statements with clear sequence points to avoid ambiguity:

```c
i++;
j = i + 5; // safe: each expression ends with a sequence point
```

---

## 🧠 Key Takeaway

Sequence points are **your safety stops**:

- They ensure order and predictability in side effects.
- Relying on them prevents undefined behavior and improves portability.

Stay safe and write clear, bug-free code! 😘

