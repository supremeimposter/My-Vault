---
pdf: 
module: 1
lecture: 
date: 2024-06-10T21:58:00
version:
  - C-24
last-revision: 
notes-taken: false
tags:
  - ProgrammingWithC
---
# Types

## Data Types

- int (4 bytes)
	- signed 
	- unsigned
- char (1 byte)
	- signed
	- unsigned
- short (2 bytes)
	- signed
	- unsigned
- float (4 bytes)
- double (8 bytes)
- long double (10 bytes)

---
## Format Specifiers

| Type         | Format Specifier |
| ------------ | ---------------- |
| char         | %c               |
| int          | %d               |
| unsigned int | %u               |
| float        | %f               |
| Hexadecimal  | %x               |
| Address      | %p               |
| String       | %s               |

---
## Type Conversion

![[Pasted image 20230912212601.png]]
```ad-note
up the ladder = implicit conversion
down the ladder = explicit conversion
```

```ad-info
**%f** prints only 0.000 when used to print an integer
```

### Cases of Type Conversion
- integer division truncates the precision
![[Pasted image 20230912213552.png]]
---
- integer division truncates precision, but result is a float, so it adds the precision of 0s.
![[Pasted image 20230912213629.png]]
---
- 'a' is explicitly type-casted to float, which also promotes b to a float implicitly.
![[Pasted image 20230912213706.png]]
![[Pasted image 20230912213722.png]]

---
- 'a' is integer and 'b' is float, hence no explicit mention of float is necessary to get accurate result.
![[Pasted image 20230912213907.png]]

---
- The precision gets truncated when stored in integer.
![[Pasted image 20230912214310.png]]

```ad-important
The precision gets truncated at the final step after the complete calculation.

``(2.5 + 3.6 = 6.1``, the precision is truncated at the final step, rather than ``2.5 + 3.6`` getting truncated to ``2 + 3 = 5``).

![[Pasted image 20230912214827.png]]
```


---
- The float precision is truncated to integers as i and j are integers. float k captures the precision.
```ad-info
Integer division never generates precision even if it is going to be stored in float. The storing float generates precision (0's).

```

![[Pasted image 20230912214956.png]]

---
- At LINE 7,  'a' is type-casted to int `10 / 8.2 = 1.219512` 

- At LINE 8, 'a' and 'b' both are type-casted to int `10 / 8 = 1.25` which gets truncated to `1` and by storing in a float `d`, it becomes `1.00000`

- At LINE 9 'a' and 'b' are not type-casted. `10.4 / 8.2 = 1.268293`

![[Pasted image 20230912215830.png]]

---
```ad-caution
When type conversion is done, the source of the value becomes the type it has been converted to. `LINE 6`
```

- At LINE 6, the ‘i’ is explicitly type casted(truncated) to character, but the source becomes unsigned.

- At LINE 6, x is of 32 bits, so the type converted char has to be extended, but the source is now `unsigned char`, so zero extension occurs and x becomes 255

![[Pasted image 20230912220659.png]]

---
