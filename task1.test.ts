import {describe, expect, test} from '@jest/globals';
import {getScore, generateStamps} from './task1';

const gameStamps = generateStamps();

describe('getScore module', () => {
    test('returns score 0:0 for the initial state offset', () => {
      expect(getScore(gameStamps, 0)).toEqual({ home: 0, away: 0 });
    });
  
    test('returns correct score at the first timestamp', () => {
      const firstStamp = gameStamps[0];
      expect(getScore(gameStamps, firstStamp.offset)).toEqual(firstStamp.score);
    });
  
    test('returns correct score at an offset beyond the last timestamp', () => {
      const lastStamp = gameStamps[gameStamps.length - 1];
      expect(getScore(gameStamps, lastStamp.offset + 10)).toEqual(lastStamp.score);
    });
  
    test('returns correct score when offset matches a mid-game timestamp', () => {
      const middleStamp = gameStamps[Math.floor(gameStamps.length / 2)];
      expect(getScore(gameStamps, middleStamp.offset)).toEqual(middleStamp.score);
    });
  });