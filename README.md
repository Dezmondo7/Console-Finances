# Console Finances Application README

## This project will document the code used for analyzing the financial records of a companies dataset.

## The JavaScript code will analyzes the records to calculate each of the following:

The total number of months included in the dataset.
The net total amount of Profit/Losses over the entire period.
The average of the **changes** in Profit/Losses over the entire period.
Will track what the total change in Profit/Losses are from month to month and then find the average.
* (`Total/(Number of months - 1)`)
* The greatest increase in Profit/Losses (date and amount) over the entire period.
* The greatest decrease in Profit/Losses (date and amount) over the entire period.

The end result is to look like the below.

  ```text
  Financial Analysis 
  ----------------
  Total Months: 86
  Total: $38382578
  Average Change: -2315.12
  Greatest Increase in Profits/Losses: Feb-2012 ($1926159)
  Greatest Decrease in Profits/Losses: Sep-2013 ($-2196167)
  ```
## Psuedo Code
## find the totalnumber of months in the data,add the data variable to the codebase