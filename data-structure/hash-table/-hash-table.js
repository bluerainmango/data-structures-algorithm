class HashTable {
  // 50 사이즈의 빈 배열 생성(50개의 shelves), [[[grape,10000],...],[],[]...]
  constructor(size) {
    this.data = new Array(size);
  }

  //'_' 는 private property라는 의미로, 다른 dev에게 access하지 말라는 의미. 허나 기술적으로 당근 call 가능.
  // 아래 hash는 key-value에서 key를 숫자로 변환 기능.
  // 'grape'.carCodeAt(0)= 'g'에 대한 0-65535 사이 정수
  // %:modulo operator, 50으로 나눈 뒤의 님는 나머지(항상 50 이하)
  // 비록 for loop을 써도 hash 생성은 무척 빠르기에 time complexity: O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(hash)
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
  }

  // time complexity: O(1), arr생성 시 메모리(size)만 적절히 할당해주면 collision은 거의 일어나지 않음. 따라서 loop 를 썼어도 O(n) 이 아닌 O(1)
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("grapess", 2000);
myHashTable.get("grapess");

// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
