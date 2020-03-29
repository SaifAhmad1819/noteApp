import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNotes'
})
export class SearchNotesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
