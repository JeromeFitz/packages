import Slugger from 'github-slugger'

const people = (data: any) => {
  const slugger = new Slugger()
  return data.people.map((p) => {
    const { avatar_url, id, name, person } = p
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
  })[0]
  // return data.people || null
}

export default people
