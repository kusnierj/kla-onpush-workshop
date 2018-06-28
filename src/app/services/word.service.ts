import { Injectable } from '@angular/core';
import { WORD_LIST } from '../model';

@Injectable()
export class WordService {

    public build(words: number): string {
        let ret = '';
        for (let i = 0; i < words; i++) {
            if (ret !== '') { ret += ' '; }
            ret += this.getRandomWord();
        }
        return ret;
    }

    public getRandomWord(): string {
        const index = Math.floor(Math.random() * WORD_LIST.length);
        return WORD_LIST[index];
    }

    public buildNumberString(numbers: number): string {
        let ret = '';
        for (let i = 0; i < numbers; i++) {
            ret += Math.floor(Math.random() * 10).toString();
        }
        return ret;
    }
}
