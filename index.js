const Fl = {
  chain: 'fantasy-land/chain',
  of: 'fantasy-land/of',
};

module.exports = (generatorFunction, type) => {
  return type[Fl.of]()[Fl.chain](_ => {
    const generator = generatorFunction();
    const step = nextValue => {
      const result = generator.next(nextValue);
      const value = result.value;
      const done = result.done;

      if (!value || typeof value[Fl.chain] !== 'function') {
        const action = done ? 'returned' : 'yielded';
        throw new Error(`[lazy-do] ${action} value is not a Monad: ${result.value}.`);
      }
      return done ? value : value[Fl.chain](step);
    }
    return step();
  });
};
