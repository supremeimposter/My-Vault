
```ad-important
- Signed - Negative weight of MSB
	- MSB = 0 => positive number
	- MSB = 1 => negative number
- Unsigned - Positive weight of MSB
	- MSB = 0 => positive number
	- MSB = 1 => positive number
```

- By default, the data types are signed in C.
- In signed numbers, all the leading 1's can be ignored and only one 1 can be taken with the negative weight to get the original number.

## Maximum and Minimum values of Signed and Unsigned

![[Pasted image 20230910220638.png]]

![[Pasted image 20230910220835.png]]

- Positive numbers are the same in both 2’s complement(signed) and in the unsigned range. The arrow marks in between signifies the similar bit pattern but as the MS bit is interpreted differently, the value changes.

![[Pasted image 20230910221428.png]]

## %d and %u specifier

```ad-note
**%d** – always takes the **negative weight** of the MS bit.
**%u** – always takes the **positive weight** of the MS bit.
- Negative numbers cannot be represented in unsigned forms (**%u**).
- Both do not care about the type of data (unsigned or signed), they care only about the **bit pattern**.
```

- Bit pattern is constant for a number(literals), the type of data (unsigned or signed) does not influence the bit pattern, it gives different perception of the bit pattern and how the variables have to be handled.
- printf() does not use the information about the type of variable.

- In the below code, the value is determined as per the type of the variable and the specifier used.

![[Pasted image 20230910222412.png]]
