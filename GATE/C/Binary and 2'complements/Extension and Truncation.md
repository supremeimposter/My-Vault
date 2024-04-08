
## Integer Promotion

- Whenever a small integer (char or int) is used in an expression (including function arguments such as printf()), it is **implicitly** converted to int.
- Char, short and int belong to the ‘int’ family.

## Extension

- Copying a lower bit number to a higher bit representation.
- Extension happens based on the type of data of the source, it does not care about what kind of data type it is copied into
	- If the source is signed, then sign extension (copy the MS bit).
	- If the source is unsigned, then zero extension (fill 0’s).

![[Pasted image 20230912211206.png]]


## Truncation

- Causes drastic change in sign and value.
- Truncates bytes regardless of source or destination, signed or unsigned.
- Truncation might cause loss of significant bits depending on the type it is truncated to.
- But anyways when short or char is used in an expression, it gets integer promoted to 32 bits.

When a character is used in an expression, then it is promoted. When used in printf() also it gets promoted to 32 bits.
![[Pasted image 20230912211540.png]]
