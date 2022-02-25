class Dictionary {
  constructor() {
    this.data = [];
  }

  add(key, value) {
    if (!this.data.find(node => node.key === key))
      this.data.push({ key, value });
  }

  find(key) {
    const node = this.data.find(node => node.key === key);
    if (node)
      return node.value;
    else
      return undefined;
  }

  getAll() {
    return this.data;
  }
}

module.exports = Dictionary;