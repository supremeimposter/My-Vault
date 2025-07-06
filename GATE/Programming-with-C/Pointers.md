---
tags:
  - ProgrammingWithC/Pointers
---
# Pointers


## Pointer Arithmetic

| Expression                       | Reason/Explanation                                                                     | Validity                   |
| -------------------------------- | -------------------------------------------------------------------------------------- | -------------------------- |
| `ptr + 3`                        | Advancing pointer by 3 elements                                                        | ✅ Valid                    |
| `ptr - ptr2`                     | Gives distance (ptrdiff\_t) between two pointers in same array                         | ✅ Valid                    |
| `ptr + ptr2`                     | Adding two pointers → meaningless in C                                                 | ❌ Invalid                  |
| `ptr - 100`                      | Moving pointer back by 100 elements                                                    | ✅ Valid                    |
| `100 - ptr`                      | Integer minus pointer → nonsensical                                                    | ❌ Invalid                  |
| `ptr1 - ptr2` (different arrays) | Subtracting pointers from unrelated arrays → undefined behavior                        | ❌ Undefined                |
| `ptr1 == ptr2`                   | Comparing pointers → well-defined even if unrelated                                    | ✅ Valid                    |
| `ptr == 0`                       | Comparing pointer with zero → checks for NULL                                          | ✅ Valid                    |
| `ptr + NULL`                     | Adding NULL (0) to pointer → technically same as `ptr + 0`, but conceptually confusing | ✅ Valid (but best avoided) |
| `ptr * 2`                        | Multiplying pointer → undefined/invalid                                                | ❌ Invalid/Undefined        |

