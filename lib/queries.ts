const projectFields = `
  _id,
  title
`

export const indexQuery = `
*[_type == "projects"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`

export const projectQuery = `
{
  "project": *[_type == "projects" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "projects" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    content,
    ${projectFields}
  }
}`

export const projectSlugsQuery = `
*[_type == "projects" && defined(slug.current)][].slug.current
`

export const projectBySlugQuery = `
*[_type == "projects" && slug.current == $slug][0] {
  ${projectFields}
}
`
