function assertNever(value: never): never {
  throw new Error(`Unexpected value should never occur: ${value}`)
}

export default assertNever
