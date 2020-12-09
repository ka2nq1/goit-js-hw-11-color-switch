const delay = ms => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms)
      }, ms)
  
    })
    return promise
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);