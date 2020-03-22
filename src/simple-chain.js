const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) == false || position <= 0 || position > this.chain.length){
      this.chain.length=0;
      throw new Error();
    }
    else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str="";
    for (i = 0; i < this.chain.length; i++) {
      str += "( " + this.chain[i] + " )";
      if (i != this.chain.length - 1)
        str += "~~"
    }
    this.chain.length = 0;
    return str;
  }
};

module.exports = chainMaker;
