import { translateColor } from '@/utils/colorTranslator'
import '@testing-library/jest-dom'

describe('translateColor', () => {
  it('should return success and correct hex code for known colors', () => {
    expect(translateColor('red')).toEqual({
      success: true,
      hexCode: '#FF0000'
    });
    expect(translateColor('blue')).toEqual({
      success: true,
      hexCode: '#0000FF'
    });
    expect(translateColor('green')).toEqual({
      success: true,
      hexCode: '#008000'
    });
  });

  it('should be case-insensitive', () => {
    expect(translateColor('RED')).toEqual({
      success: true,
      hexCode: '#FF0000'
    });
    expect(translateColor('Blue')).toEqual({
      success: true,
      hexCode: '#0000FF'
    });
    expect(translateColor('GrEeN')).toEqual({
      success: true,
      hexCode: '#008000'
    });
  });

  it('should trim whitespace', () => {
    expect(translateColor(' red ')).toEqual({
      success: true,
      hexCode: '#FF0000'
    });
    expect(translateColor('blue  ')).toEqual({
      success: true,
      hexCode: '#0000FF'
    });
    expect(translateColor('  green')).toEqual({
      success: true,
      hexCode: '#008000'
    });
  });

  it('should return error for unknown colors', () => {
    expect(translateColor('nonexistent')).toEqual({
      success: false,
      error: 'Color "nonexistent" not found in the color map.'
    });
  });
});

