/**
 * Checks whether an object is empty
 * @param {} metadata
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
const isObjectEmpty = (metadata: any[] | any) => {
  return 0 === Object.entries(metadata).length && metadata.constructor === Object
}

export default isObjectEmpty
