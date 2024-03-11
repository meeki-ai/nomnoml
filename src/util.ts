export function range([min, max]: [min: number, max: number], count: number): number[] {
  const output = []
  for (let i = 0; i < count; i++) output.push(min + ((max - min) * i) / (count - 1))
  return output
}
export function sum<T>(list: ArrayLike<T>, transform: (item: T) => number) {
  let summa = 0
  for (let i = 0, len = list.length; i < len; i++) summa += transform(list[i])
  return summa
}
export function find<T>(list: T[], predicate: (e: T) => boolean) {
  for (let i = 0; i < list.length; i++) if (predicate(list[i])) return list[i]
  return undefined
}
export function last<T>(list: T[]) {
  return list[list.length - 1]
}
export function hasSubstring(haystack: string, needle: string) {
  if (needle === '') return true
  if (!haystack) return false
  return haystack.indexOf(needle) !== -1
}
export function indexBy<T>(list: T[], key: keyof T): { [key: string]: T } {
  const obj: { [key: string]: T } = {}
  for (let i = 0; i < list.length; i++) obj[list[i][key] as any] = list[i]
  return obj
}
export function uniqueBy<T>(list: T[], property: keyof T): T[] {
  const seen: { [key: string]: boolean } = {}
  const out: T[] = []
  for (let i = 0; i < list.length; i++) {
    const key = list[i][property] as unknown as string
    if (!seen[key]) {
      seen[key] = true
      out.push(list[i])
    }
  }
  return out
}
