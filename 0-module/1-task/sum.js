function sum(a, b) {
      if (Number(a)  === a && Number(b) === b)
        {
          return a + b;
        }
      throw TypeError();
}

module.exports = sum;
