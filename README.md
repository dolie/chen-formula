# chen-formula
Calculate and render table for starting hands following Bill Chen 's formula.

## Result  
20,12,11,10,8,7,7,7,7,7,7,7,7  
10,16,10,9,8,6,5,5,5,5,5,5,5  
9,8,14,9,8,7,5,4,4,4,4,4,4  
8,7,7,12,9,8,6,4,3,3,3,3,3  
6,6,6,7,10,8,7,5,3,2,2,2,2  
5,4,5,6,6,9,8,7,5,3,2,2,2  
5,3,3,4,5,6,8,7,6,4,2,1,1  
5,3,2,2,3,5,5,7,7,6,4,2,1  
5,3,2,1,1,3,4,5,6,6,5,3,1  
5,3,2,1,0,1,2,4,4,5,6,5,3  
5,3,2,1,0,0,0,2,3,4,5,5,4  
5,3,2,1,0,0,-1,0,1,3,3,5,5  
5,3,2,1,0,0,-1,-1,-1,1,2,3,5    

## Algorithm  
Based on Chen's formula published at [thepokerbank.com](https://www.thepokerbank.com/strategy/basic/starting-hand-selection/chen-formula/).  

> 1. Score your highest card only. Do not add any points for your lower card.  
        A = 10 points.  
        K = 8 points.  
        Q = 7 points.  
        J = 6 points.  
        10 to 2 = 1/2 of card value. (e.g. a 6 would be worth 3 points)  
> 2. Multiply pairs by 2 of one card’s value. However, minimum score for a pair is 5.  
    (e.g. KK = 16 points, 77 = 7 points, 22 = 5 points)  
> 3. Add 2 points if cards are suited.  
> 4. Subtract points if their is a gap between the two cards.  
  No gap = -0 points.  
  1 card gap = -1 points.  
  2 card gap = -2 points.  
  3 card gap = -4 points.  
  4 card gap or more = -5 points. (Aces are high this step, so hands like A2, A3 etc. have a 4+ gap.)  
> 5. Add 1 point if there is a 0 or 1 card gap and both cards are lower than a Q.  
    (e.g. JT, 75, 32 etc, this bonus point does not apply to pocket pairs)  
> 6. Round half point scores up.  
    (e.g. 7.5 rounds up to 8)  
