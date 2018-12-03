import { input } from './input';

const part1 = of(input).pipe(
    map(input => input.split('\n')),
    mergeMap(arr => from(arr)),
    map(val => parseInt(val)),
    reduce((acc: number, x: number) => {
        return acc + x;
    }, 0),
    first()
);