/**
 * Checks whether an object is empty
 * @param {} metadata
 */
const isObjectEmpty = (metadata: any | any[]) => {
  return 0 === Object.entries(metadata).length && metadata.constructor === Object
}

export default isObjectEmpty
