---
tags:
  - ProgrammingWithC
---
# Analysis and Doubts in C

## `switch()` conditionals

![[Analysis and Doubts in C-1788358136781.webp]]
![[Analysis and Doubts in C-1788358157471.webp]]
![[Analysis and Doubts in C-1788358180960.webp]]

![[Analysis and Doubts in C-1788358211951.webp]]
![[Analysis and Doubts in C-1788358224363.webp]]

![[Analysis and Doubts in C-1788357957495.webp]]

---
## Specifiers and return types (Optional)

![[Analysis and Doubts in C-1788707492804.webp]]

### Floating point specifiers

![[Analysis and Doubts in C-1788707897308.webp]]

### `%n` specifier

![[Analysis and Doubts in C-1788707940773.webp]]

### Integer Promotion

![[Analysis and Doubts in C-1788707966596.webp]]

---
## `sizeof()` evaluation

`sizeof()` is a compile time constant, its calculation of pointer arithmetic is different from the usual way I do arithmetic, but there are some VLA exceptions as well.

![[Guidelines to GATE-CS-1787934939074.webp]]

### Exceptions for `sizeof()`

```c
#include <stdio.h>

int main(){
    int n;
    printf("enter the size of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Size of arr : %zu\n", sizeof(arr));

    return 0;
}
```

![[Analysis and Doubts in C-1788601844620.webp]]

### `sizeof(expression)`

![[Analysis and Doubts in C-1788601970825.webp|Integer promotion happens in expressions|836]]

![[Analysis and Doubts in C-1788602014364.webp|Though both are characters, its an expression now|836]]


---
## What happens with pre and post increment operator in terms of sequence points

![[Analysis and Doubts in C-1788439525867.webp]]

![[Analysis and Doubts in C-1788439540692.webp]]

![[Analysis and Doubts in C-1788439433833.webp]]

![[Analysis and Doubts in C-1788439605317.webp]]

![[Analysis and Doubts in C-1788439616275.webp]]

![[Analysis and Doubts in C-1788439632126.webp]]

---
## Sequence Points

![[Analysis and Doubts in C-1787935913655.webp]]

This rule covers what happens when you modify a variable and read it within the same statement (between the same sequence points).

It sets a strict condition:

- **Allowed**: You may read the variable's old value if and only if that read is being used to compute its own new value.
- **Forbidden** (Undefined Behavior): If you modify a variable, you cannot also read it for some other, unrelated purpose in the same expression (such as an array index, a condition, or another operand).

### Why does this rule exists?

In C, the compiler is allowed to evaluate sub-expressions and apply side effects in any order it chooses if there is no sequence point between them.

If you read a variable for an unrelated purpose in the same expression where it is being modified:

• The compiler might read the variable before applying the modification, OR
• It might read the variable after applying the modification.

Because the C standard does not force an order, doing both creates an unsequenced race condition, which the standard classifies as Undefined Behavior (UB).

### Cases where allowed and forbidden

![[Analysis and Doubts in C-1787937805917.webp]]

![[Analysis and Doubts in C-1787938962571.webp]]

![[Analysis and Doubts in C-1787939043139.webp]]

### Additional Scenarios

![[Guidelines to GATE-CS-1787935575704.webp]]

![[Guidelines to GATE-CS-1787935605520.webp]]

### Summary for when to look out for Undefined Behaviour

![[Analysis and Doubts in C-1787939256483.webp]]

---
## Expression Evaluation

![[Analysis and Doubts in C-1788437558539.webp]]

![[Analysis and Doubts in C-1788437583268.webp]]

![[Analysis and Doubts in C-1788437820946.webp]]

![[Analysis and Doubts in C-1788437836134.webp]]

![[Analysis and Doubts in C-1788437851260.webp]]


---
## Post-inc/dec head recursion

> [!question] `C/recur/recur-5.c`
> ![[Analysis and Doubts in C-1787936491509.webp]]


> [!note] ISO C Standard (C99 §6.5.2.2 / C11 §6.5.2.2 / Annex C)
> "There is a sequence point after the evaluation of the function designator and all actual arguments, but before the actual function call."

 A sequence point guarantees that:

  1. Value Computation: The expression's return value is computed.
  2. Side Effects: All side-effect modifications (like post-increment ++ or post-decrement --) are fully completed and committed to memory before control enters the called function.

![[Analysis and Doubts in C-1787936617030.webp]]

  1. Value Computation of n--:
      • The post-decrement expression n-- yields the original value: 3.
  2. Side Effect of n--:
      • The caller's local variable n is decremented: Caller's  n gets 2.
  3. Sequence Point Hit:
      • The side effect (Caller's  n = 2) is strictly committed in the caller's stack frame before jumping to the child function.
  4. Child Function Invocation (Call-by-Value):
      • The computed value (3) is passed into the newly created activation frame for the child function.
      • The child function initializes its own parameter: Child's  n gets 3.

![[Analysis and Doubts in C-1787936703959.webp|840]]

---
## Comma operator

```c
int main() {
	int i = 2, j = 3, k = 0;
}
```

Suppose we are about to include a 4th variable `p` and how `,` works in each of the cases below.

![[Analysis and Doubts in C-1788500417695.webp]]

----
## Scope of `extern` identifiers

![[Analysis and Doubts in C-1788527753019.webp]]

![[Analysis and Doubts in C-1788527836811.webp]]

---
## Evaluation of Operands of a binary operator

> [!refer] [ GATE IT 2004 | Question: 59](https://gateoverflow.in/3702/gate-it-2004-question-59)
> ![[Analysis and Doubts in C-1788544485497.webp]]

```c
y += funcf(x) + funcg(x);
```

![[Analysis and Doubts in C-1788544349079.webp]]

![[Analysis and Doubts in C-1788544367160.webp]]

![[Analysis and Doubts in C-1788585532199.webp]]

---
## `ptr + NULL`

![[Analysis and Doubts in C-1787985709649.webp]]

![[Analysis and Doubts in C-1787985738826.webp]]

![[Analysis and Doubts in C-1787985761832.webp]]

![[Analysis and Doubts in C-1787985771296.webp]]

---


## Array names are non-modify-able lvalues

```c
#include <stdio.h>

int main() {
    int arr1[5] = {1, 2, 3, 4, 5};
    int arr2[5] = {6, 7, 8, 9, 10};
    int* ptr = arr1;
    arr1 = arr2; // compiler error
    ptr += 3;
}
```

### Array Names

![[Analysis and Doubts in C-1788585726324.webp]]

### Memory Layout

![[Analysis and Doubts in C-1788585510762.webp]]

![[Analysis and Doubts in C-1788585666192.webp]]

An array name `int a[5]` is not a pointer at all. It is an object of array type `(int[5])`. A pointer variable occupies separate memory to store an address, while an array name refers directly to the array's contiguous memory block.

---
## 1D Array

### Memory Model

![[Analysis and Doubts in C-1788585510762.webp]]

### Array name Decay and Exceptions

![[Analysis and Doubts in C-1788585872270.webp]]

### Pointer Arithmetic

![[Analysis and Doubts in C-1788599525048.webp]]

----
## Truncation vs Endianness

![[Analysis and Doubts in C-1788609666645.webp]]

### Why both are independent of each other?

![[Analysis and Doubts in C-1788609735682.webp]]

### Where does Endianness matter?

Endianness matters in physical memory dereferencing

![[Analysis and Doubts in C-1788609784168.webp]]

![[Analysis and Doubts in C-1788609829613.webp]]
![[Analysis and Doubts in C-1788609856331.webp]]

---
## Character Arrays vs String Literals

![[Analysis and Doubts in C-1788613433904.webp]]

### Memory layout

![[Analysis and Doubts in C-1788613452783.webp]]

### Mutability and Pointer Arithmetic

![[Analysis and Doubts in C-1788613499656.webp]]

```c
int main() {
	char* s = "hello";
	s[0] = 'j'; // compiles without any error, but causes seg-fault
}
```

---
## `sizeof()` vs `strlen()`

```c
#include <stdio.h>
#include <string.h>

int main() {

    printf("%zu\n", sizeof("hello"));

    char s[] = {'a', 'b', 'c', 'd', 'e'};
    char t[6] = {'a', 'b', 'c', 'd', 'e'};
    
    printf("%zu\n", sizeof(s));
    printf("%zu\n", sizeof(t));
    printf("%ld\n", strlen("hello"));

    char* p = "hello";
    printf("%zu\n", sizeof(p));
    printf("%zu\n", sizeof(*p));

    return 0;
}
```

![[Analysis and Doubts in C-1788613268047.webp]]

![[Analysis and Doubts in C-1788613296299.webp]]

![[Analysis and Doubts in C-1788613365208.webp]]

---
## Yield of Expressions in C

```c
#include <stdio.h>

int main() {

    int c = 10;

    if (c = 0) {printf("true\n");}
    else {printf("false\n");}

    printf("c : %d\n", c);

    return 0;
}
```

![[Analysis and Doubts in C-1788631739385.webp]]

### Comparing with yield of postfix/prefix operators

![[Analysis and Doubts in C-1788631760677.webp]]

### Typical applications of yield of expressions

![[Analysis and Doubts in C-1788631840509.webp]]

![[Analysis and Doubts in C-1788631859311.webp]]

---
## 1D Array, Pointers and `sizeof()`

![[Analysis and Doubts in C-1788706474694.webp]]

![[Analysis and Doubts in C-1788707214393.webp]]

![[Analysis and Doubts in C-1788707242602.webp]]


---
## 2D Pointers and `sizeof()`

```c
int a[3][4];
```

![[Analysis and Doubts in C-1788700045881.webp]]

![[Analysis and Doubts in C-1788699986050.webp]]

![[Analysis and Doubts in C-1788700021489.webp]]

### Exercises and Examples

![[Analysis and Doubts in C-1788700104127.webp]]
![[Analysis and Doubts in C-1788700133431.webp]]

---
## Pointer to Array vs Array of Pointers

![[Analysis and Doubts in C-1788708433972.webp]]


---
## Array Decay Behaviour

![[Analysis and Doubts in C-1788719027150.webp]]

![[Analysis and Doubts in C-1788719052650.webp]]


---