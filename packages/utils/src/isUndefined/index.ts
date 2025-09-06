// biome-ignore lint/suspicious/noDoubleEquals: migrate
const isUndefined = (v: any) => v === undefined && typeof v == 'undefined'

export default isUndefined
