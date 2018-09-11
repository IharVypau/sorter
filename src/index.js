class Sorter {
  constructor() {
    this.buffer = [];
  }

  add(element) {
    this.buffer.push(element);
  }

  at(index) {
    return this.buffer[index];
  }

  get length() {
    return this.buffer.length;
  }

  toArray() {
    return this.buffer;
  }

  sort(indices) {
    indices.sort();
    let tempArr = [];
     indices.forEach(val => {
      tempArr.push(this.buffer[val]);
    });
    if(this.compareFunction !== undefined){
      tempArr.sort(this.compareFunction);
    }else{
      tempArr.sort((a,b)=>a-b);
    }
    tempArr.forEach((val,i) => {
      this.buffer[indices[i]]=val;
    });
  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;