// eslint-disable-next-line no-undef
const args = process.argv;
const mssg = args[2];

const opts = ['-s', '--set', '-b', '--bg-color', '-f', '--font-color'];

const escapeAnsiCode = code => '\x1b[' + code + 'm';

const ansiStyles = opts.map(opt =>
  args.indexOf(opt) > -1 ? escapeAnsiCode(args[args.indexOf(opt) + 1]) : ''
);

console.log('%s%s%s', ansiStyles.join(''), mssg, '\x1b[0m');
