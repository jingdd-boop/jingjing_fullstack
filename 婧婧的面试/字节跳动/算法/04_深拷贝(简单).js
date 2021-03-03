const deepClone = (target) => {
  if(typeof target === 'object' && target !== null) {
    const newTarget = Array.isArray(target) ? [] : {}
    for (let keys in target) {
      if(target.hasOwnProperty(keys)) {
        newTarget[keys] = deepClone(target(keys))
      }
      return newTarget
    }
  } else {
    return target
  }
}
