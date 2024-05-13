const depsMap = new Map();
const effects = new Map();

function track(target) {
  let dep = depsMap.get(target);

  if (!dep) {
    depsMap.set(target, (dep = new Set()));
  }

  effects.forEach((value, key) => { dep.add([key, value]) });
}

function trigger(target) {
  const dep = depsMap.get(target);

  if (!dep) { return }

  dep.forEach(([effectName, effectFunction]) => {
    target[effectName] = effectFunction.call(target);
  });
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
      trigger(target);
    },
  });
}

function init(obj) {
  return Object.keys(obj).forEach((key) => obj[key]);
}

function getObject({ data, computed }) {
  return Object.assign(data, Object.keys(computed).reduce((result, key) => {
    return Object.keys(result, { [key]: computed[key].call({ ...data, ...result }) });
  }, {}));
}

function setEffects(obj) {
  return Object.keys(obj).forEach((key) => { effects.set(key, obj[key]) });
}

function Cue(obj) {
  setEffects(obj.computed);
  const result = reactive(getObject(obj));

  init(result);

  return result;
}

const cue = Cue({
  data: {
    a: 2,
  },
  computed: {
    getA() {
      return this.a * 2;
    },
    getB() {
      return this.getA * 10;
    },
  },
});

console.log(cue); // { a: 2, getA: 4, getB: 40 }
cue.a = 4;
console.log(cue); // { a: 4, getA: 8, getB: 80 }
cue.a = 8;
console.log(cue); // { a: 8, getA: 16, getB: 160 }

