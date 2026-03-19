import Slugger from 'github-slugger'
import _map from 'lodash/map'

const multi_select = (data: any) => {
  const slugger = new Slugger()

  const dataReturn = {}
  _map(data.multi_select, (multiSelect: any) => {
    const ms = multiSelect
    ms.slug = slugger.slug(ms.name)
    dataReturn[ms.id] = ms
  })
  return dataReturn
}

export default multi_select
