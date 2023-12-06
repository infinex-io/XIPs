const fs = require('fs')
const kebabCase = require('lodash/kebabCase')
const statuses = require('./ci/statuses')

const kebabStatuses = statuses.map(kebabCase)

const Frontmatter = `
  fragment Frontmatter on MarkdownRemarkFrontmatter {
    xip
    ir
    wgc
    title
    author
    network
    type
    proposal
    implementor
    release
    created
    updated
    status
    theme
    wg_name
    wg_lead
    budget
    budget_cadence
    timeline
    established
  }
`
const allXipsQuery = `
  ${Frontmatter}
  query allXips {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/xips/" }
        frontmatter: { xip: { ne: null } }
      }
    ) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          frontmatter {
            ...Frontmatter
          }
          md: rawMarkdownBody
          html
        }
      }
    }
  }
`
const allIrsQuery = `
  ${Frontmatter}
  query allIrs {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/irs/" }
        frontmatter: { ir: { ne: null } }
      }
    ) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          frontmatter {
            ...Frontmatter
          }
          md: rawMarkdownBody
          html
        }
      }
    }
  }
`

const allWGCsQuery = `
  ${Frontmatter}
  query allWGCs {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/wgcs/" }
        frontmatter: { wgc: { ne: null } }
      }
    ) {
      group(field: frontmatter___status) {
        fieldValue
        nodes {
          frontmatter {
            ...Frontmatter
          }
          md: rawMarkdownBody
          html
        }
      }
    }
  }
`

exports.onPostBuild = async ({ graphql }) => {
  const allXips = await graphql(allXipsQuery)
  const allIrs = await graphql(allIrsQuery)
  const allWGCs = await graphql(allWGCsQuery)

  const xipsPath = './public/api/xips'
  const irsPath = './public/api/irs'
  const wgcsPath = './public/api/wgcs'

  ;[
    { path: xipsPath, result: allXips },
    { path: irsPath, result: allIrs },
    { path: wgcsPath, result: allWGCs },
  ].forEach(({ path, result }) => {
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true })

    // Initialize all statuses with empty array
    kebabStatuses.forEach((status) =>
      fs.writeFileSync(`${path}/${status}.json`, JSON.stringify([])),
    )

    result.data.allMarkdownRemark.group.forEach((group) => {
      const status = kebabCase(group.fieldValue)
      const data = group.nodes.map(({ frontmatter, ...node }) => ({
        ...frontmatter,
        ...node,
      }))
      fs.writeFileSync(`${path}/${status}.json`, JSON.stringify(data))
    })
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
    type MarkdownRemarkFrontmatter implements Node {
      title: String
      type: String
      network: String
      status: String
      author: String
      implementor: String
      proposal: String
      release: String
      created: Date
      updated: Date
      theme: String
    }
  `,
  ]
  createTypes(typeDefs)
}
