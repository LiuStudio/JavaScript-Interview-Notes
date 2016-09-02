/*Given the folloiwng defined stack */
function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) return null;

    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) return null;
    return this.items[this.items.length -1];
};

/*
Use your Stack class to implement a new class MaxStack with a function getMax() that returns the largest element in the stack. getMax() should not remove the item.
*/

function MaxStack(){

	this.stack = new Stack();
	this.maxsStack = new Stack();
}

MaxStack.prototype.push = function(item){
	this.stack.push(item);
};

MaxStack.prototype.pop = function() {

	if (!this.stack.peek()) return null;
	return this.stack.pop();
};

MaxStack.prototype.getMax = function() {
	var max_element;
	var max_index=0;
	var cur_element;
	if (!this.stack.peek()) {
		max_element = null;
	}else{
		max_element = this.stack.pop();
		this.maxsStack.push(max_element);

		for (int i = 1; i< this.stack.length; i++){
			cur_element = this.stack.pop();
			if (max_element < cur_element){
				max_element = cur_element;
				max_index = i;
			}
			this.maxsStack.push(cur_element);

		}
	}
	while(this.maxsStack.peek){
		this.stack.push(this.maxsStack.pop());
	}
	return max_element;

};


