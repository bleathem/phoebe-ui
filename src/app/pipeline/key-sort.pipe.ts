import { Pipe, PipeTransform } from '@angular/core';

interface HasKey {
  key: string|number;
};

@Pipe({ name: 'keySort' })
export class KeySortPipe  implements PipeTransform {
  transform(array: HasKey[]): HasKey[] {
    if (!array) {
      return array;
    }
    array.sort((a: HasKey, b: HasKey) => {
      if (a.key < b.key) {
        return -1;
      } else if (a.key > b.key) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
