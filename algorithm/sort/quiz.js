//! 답변은 각자 다를 수 있음. 그냥 왜 선택했는지 잘 설명하기만 하면 됨
//* #1 - Sort 10 schools around your house by distance:
//small data, number, stable(same distance) -> one of IBM
//? => Insertion(fastest for small/nearly sorted data, even faster than Merge sort for small data)

//* #2 - eBay sorts listings by the current Bid amount:
//big number, huge data -> no Insertion sort, decimal -> no Non-comparison sorts(radix, counting)
//? => Quick or Heap (space complexity is low)

//* #3 - Sport scores on ESPN
//one of non-comparison sorts
//? => Radix or Counting

//* #4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//? => Heap(space complexity is O(1))

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//? => Insertion

//#6 - Temperature Records for the past 50 years in Canada
// lot of same data, have negative number
//? => Quick(bc of low space complexity)

//#7 - Large user name database needs to be sorted. Data is very random.
//stable, random
//? => Merge

//#8 - You want to teach sorting for the first time
//? => Bubble, Selection
