import Slugger from 'github-slugger'

const select = (data: any) => {
  const slugger = new Slugger()

  const s: any = data.select
  // console.dir(`getTypeSelectNormalized`)
  // console.dir(data)
  // @todo(NICE-129) eslint
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!s) {
    s.slug = slugger.slug(data.select.name)
    return { [s.id]: s }
  } else {
    return null
  }

  // return data
}

export default select
