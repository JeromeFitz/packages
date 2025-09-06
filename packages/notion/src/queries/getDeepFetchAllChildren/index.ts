const getDeepFetchAllChildren = async ({
  blocks,
  getBlocksChildrenList,
}): Promise<Array<any | any[]>> => {
  if (blocks === null || blocks === undefined) return blocks
  const fetchChildrenMap = blocks
    .filter((block: { has_children: any }) => block.has_children)
    .map((parent_block: { id: string }) => {
      const { id: block_id } = parent_block
      return {
        parent_block,
        promise: getBlocksChildrenList({
          block_id,
          page_size: 100,
        }),
      }
    })

  const results = await Promise.all<any>(
    fetchChildrenMap.map((value) => value.promise),
  )

  for (let i = 0; i < results.length; i++) {
    const blocks = results[i].results
    await getDeepFetchAllChildren({
      blocks,
      getBlocksChildrenList,
    })
    if (fetchChildrenMap[i]) {
      const parent: any = fetchChildrenMap[i].parent_block
      parent[parent.type].children = blocks
    }
  }
  return blocks
}

export default getDeepFetchAllChildren
