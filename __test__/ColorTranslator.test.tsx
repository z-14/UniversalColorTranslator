import { translateColor } from '@/utils/colorTranslator'
import '@testing-library/jest-dom'

describe('translateColor', () => {
  it('should return the correct hex code for known colors', () => {
    expect(translateColor('red')).toBe('#FF0000')
    expect(translateColor('blue')).toBe('#0000FF')
    expect(translateColor('green')).toBe('#008000')
  })

  it('should be case-insensitive', () => {
    expect(translateColor('RED')).toBe('#FF0000')
    expect(translateColor('Blue')).toBe('#0000FF')
    expect(translateColor('GrEeN')).toBe('#008000')
  })

  it('should trim whitespace', () => {
    expect(translateColor(' red ')).toBe('#FF0000')
    expect(translateColor('blue  ')).toBe('#0000FF')
    expect(translateColor('  green')).toBe('#008000')
  })

  it('should throw an error for unknown colors', () => {
    expect(() => translateColor('nonexistent')).toThrow('Color "nonexistent" not found in the color map.')
  })
})
