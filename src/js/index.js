function bubbleSort(arr) {
	return [...arr].sort((a,b) => a-b);
}

console.log(bubbleSort([1,2,3,4,10,6,7,9,8,5]));