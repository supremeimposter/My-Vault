---
pdf: lec-1-2
module: 5
lecture: "1"
date: 2023-11-28T22:38:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Disks
---
# Magnetic Disk Structure
> [!lecture] Lecture-1

- Each Sector is a logical division rather than a physical division.
- Sector is the smallest unit of data that can be read or write.
- At any time, only one read write head is active, though all the heads rotate at the same time.
- A platter has two surfaces.

![[Disk Structure and Performance-20231129113212276.webp]]

![[Disk Structure and Performance-20231129113234698.webp]]

![[Disk Structure and Performance-20231129120142875.webp]]

- A **Block** is a set of consecutive sectors within a track that is decided by the DBMS software. It is not a property of the disk itself.
- The size of a sector is fixed on a disk. It cannot be changed, whereas how many sectors form a block can be decided or changed.
- In any sector, apart from the actual data, every extra information is called Disk formatting or formatted data.
- All the tracks on the surface of a platter hold the same amount of data though there is a variation in the radius. The intersectional gap increases as the radius of a track increases.
- The number of tracks on a surface is the number of cylinders.
- Track 0 is the outermost track on a surface and the track with the highest number is one that is closest to the spindle.
- Cylinder 0 is the outermost cylinder on the surface.
- A track has a starting point and ending point similar to a sector. A track cannot be read or write at some random point.

![[Disk Structure and Performance-20231129130255654.webp]]

> [!tip] 
> - When a particular file is demanded, the read write head may be at some other track, so for safer side always add the average seek time for that particular file with the time desired.

![[Disk Structure and Performance-20231129220048021.webp]]

# Magnetic Disk Performance

## Measures for Quality of a Disk

## Disk Performance Parameters

1. **Seek Time** - Take the read write head to the desired track
2. **Rotational Latency** - Time taken by starting point of desired sector to come under the read write head
3. **Transfer Time** - Time taken by the desired sector to pass under the read write head
4. **Access Time** - The sum of Seek time and Rotational Latency.


> [!note] 
> Consider Average seek time and Average rotational latency unless explicitly mentioned otherwise.

