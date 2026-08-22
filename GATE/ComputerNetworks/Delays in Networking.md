---
tags:
  - ComputerNetworks
---
# Delays in Networking

## Transmission Delay

![[Delays in Networking-1786774971155.webp]]


![[Delays in Networking-1786775137954.webp]]

## Propagation Delay

![[Delays in Networking-1786775157566.webp]]

![[Delays in Networking-1786775407726.webp]]

## Processing Delay

Time taken by the node to look up the routing table before forwarding the packet.

## Queuing Delay

If the packets reach a node, before it can forward the already reached packets onto the outgoing link, then it creates a congesting, and that delay is called queuing delay.

## End-to-End Delay

$$
\begin{aligned}
T_{\text{end-to-end delay}} &= T_{\text{queuing delay}} + T_{\text{proc delay}} + T_{\text{trans delay}} + T_{\text{propagation delay}} \\
&= 0 + 0 + T_{\text{trans delay}} + T_{\text{propagation delay}} && \text{(in most problems)}
\end{aligned}
$$

# Problem Solving in Delays

Consider the travelling of last packets to get the correct answer instead of relying on state time diagrams.

Every packets must be transmitted from the starting node, and there is no way to avoid counting it, considering that each packet can be transmitted onto the link one by one by the nodes.

After that, counting the propagation of the last packet to the next node, and from then on, grouping the number of transmission and propagation delays help solve the problem. This may ==not be correct== all the time though. #careful

#problems

> [!question] 
> ![[Delays in Networking-1786776255163.webp]]

![[Delays in Networking-1786776291132.webp]]

![[Delays in Networking-1786795811468.webp]]
![[Delays in Networking-1786776513293.webp]]

> [!tip] What if the entire packet has to be sent as one single packet

![[Delays in Networking-1786776323594.webp]]


> [!question] Follow up
> ![[Delays in Networking-1786776560397.webp]]

![[Delays in Networking-1786776667450.webp]]
![[Delays in Networking-1786776578345.webp]]


# Optimal Packet Size

You shouldn't consider the header size to get the number of packets. No. of packets should be based on the original file size
$$
P_{\text{number of packets}} = \frac{\text{file size F}}{\text{original message in each packet x}}
$$
Consider the end-to-end delay to calculate the optimal packet size based on local-minima.
$$
\text{packet size} = x + \text{packet header size}
$$
Time of end-to-end delay is,
$$
\begin{aligned}
T_{\text{end-to-end}} &= t_{\text{transmit all packets from first node}} + t_{\text{last packet's prop}} + m(t_{prog} + t_{trans}) \\
&= P . t_{\text{trans}} + t_{p} + m.t_{p} + m.t_{trans}
\end{aligned}
$$
Leaving out the constants and considering those terms containing only packet size of original message in each packet, $x$
$$
\frac{d}{dx} (T_{end-to-end}) = 0
$$
It will give the optimium orignial message packet size $x$
