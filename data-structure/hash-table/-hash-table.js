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

  // 아래에서 눈치채야할 것: object 의 크기가 50이고, 그 안에 단 3개의 shelves에 데이터가 채워져 있다. 헌데, 이 3개만 loop를 돌면 될 것을 50개의 모든 shelves를 다 뒤져야 한다. 더욱이 data 가 한 shelf에 중복 저장되는 collision이 발생하면, loopxloop 를 쓰게 되어 속도는 더 느려진다.
  // 이게 Array 대비 Object(hash table)의 단점이다. : 데이터가 랜덤하게 분산되어 채워지니 항상 모든 shelves를 다 loop해야 한다. 그래서 for in obj 구문이 그렇게 속도가 느리고, 반환되는 값의 순서도 보장이 안되는 단점이 있는 것이다.
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("orange", 2000);
myHashTable.get("banana", 444);
myHashTable.keys();

// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
