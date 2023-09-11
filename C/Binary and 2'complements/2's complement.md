- Computers use 2’s complement to store negative numbers 
```ad-caution
In C, it is not mandatory for signed numbers to use 2’s complement, so they have to mention in the question.
```

- For a number N,
	- N + 2’s Complement (N) = 0000 0000 = 0
	- N + 1’s Complement (N) = 1111 1111


```ad-attention
- Both [[signed and unsigned]] have either 0 or 1 as their MS bit.
- Signed types are represented using 2’s complement.

```

## Decimal to 2's complement

- Flip all the bits (~) 
- add 1 to the flipped bits.
```ad-tip
From reverse, copy until first '1' bit and then flip all the bits and copy.
![[Pasted image 20230910214647.png]]
```

## 2's complement to Decimal

### Method 1
> summation of weights of bits with MSB as negative weight.

- If number is positive, MS bit is 0, then normal conversion to binary. (Even if the negative weight of MS bit is taken, it is not taken into effect as the bit is 0.)
- If number is negative, MS bit is 1, then take the negative weight of the MS bit and add with the positive weights of the rest of the bits.

```ad-seealso
2’s complement of a negative number is the corresponding positive number
```

### Method 2
> Performing 2's complement

- If number is positive, normal conversion form binary to decimal.
- If number is negative, take the 2’s complement for the given 2’s complement which gives the corresponding negative number and put a minus sign in front of the number.

![[Pasted image 20230910215532.png]]


