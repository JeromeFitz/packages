import Slugger from 'github-slugger'

const people = (data: any) => {
  // console.dir(`👯 people`)
  // console.dir(data)
  const slugger = new Slugger()
  const people = data.results[0].people
  const { avatar_url, id, name, person } = people
  const { email } = person
  const slug = slugger.slug(name)
  return {
    [slug]: {
      avatar_url,
      email,
      id,
      name,
    },
  }
}

export default people
