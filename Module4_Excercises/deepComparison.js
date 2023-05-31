console.log("---> Deep comparison <---");

/* 
== sprawdza czy dwie nazwy odnosza sie do tego sameo obiektu 
- napisz funkcje deepEqual pobierajaca dwie wartosci
- zwroc true jezeli reprezentuja te sama wartosc lub sa obiektami majacymi takie same wlasnosci o takich samych wartosciach
- uzyj rekurencyjnego wywolania funkcji deepEqual 
- aby okreslic czy dwa elementy trzeba porownac bezposrednio uzyj ===
- czy wedlug wlasnosci mozna uzyc operatora typeof
- jezeli zwroci object to znaczy ze trzeba wykonac porownanie glebokie
- nalezy uwzglednic wyjatek -> typeof dla warosci null tez zwroci object 
- funkcja Object.keys przyda sie gdy trzeba bedzie przejrzec wlasnosci obiektow  */

object1 = {
  value: 1,
  creator: "John",
  cat: 1,
};

object2 = {
  value: 2,
  creator: "Tom",
  dog: 1,
};

object3 = {
  value: 1,
  creator: "John",
  cat: 1,
};

console.log(deepEqual(1, 1));
console.log(deepEqual(1, "1"));
console.log(deepEqual(object1, object2));
console.log(deepEqual(object1.value, object2.value));
console.log(deepEqual(object1, object3));

function deepEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  }

  if (
    typeof value1 === "object" &&
    value1 != null &&
    typeof value2 === "object" &&
    value2 != null
  ) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
}
