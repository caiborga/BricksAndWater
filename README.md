# BricksAndWater

The Bricks and Water problem calculates the capacity of a channel between two borders. The "landscape" is given by an array of different numbers.

Her is an example: [3,2,1,3,1,3]
This array has two channels: 
1.  3,2,1,3 and 2. 3,1,3. 

The given result is: 5. 
1.  3-2 = 1 + 3-1 = 2 --> Capacity of 3
2.  3-1 = 2 --> Capacity of 2

My algorithm divides the landscape into individual "slice" - arrays containing only 0 and 1. The capacity of every slice is calculated and results in the capacity of the whole landscape.  
