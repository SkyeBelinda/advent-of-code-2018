import { input } from './input';
import { of, from } from 'rxjs';
import { map, reduce, mergeMap, tap, scan, first, pairwise, take, repeat, filter } from 'rxjs/operators';

const part1 = of(input).pipe(
    map(input => input.split('\n')),
    mergeMap(arr => from(arr)),
    map(val => parseInt(val)),
    reduce((acc: number, x: number) => {
        return acc + x;
    }, 0),
    first()
);

console.info('Day 1 results are:', part1);