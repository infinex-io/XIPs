import { Link } from 'gatsby'
import React from 'react'
import { MarkdownRemark } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  rows: Partial<MarkdownRemark>[]
}

const StatusTable: React.FC<Props> = ({ rows }) => {
  return (

    <table className="xiptable">
      <thead>
        <tr>

          <th className="xipnum">Number</th>
          <th className="title w-2/3">Title</th>
          <th className="author w-1/3">Author</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="xipnum">
            {row.frontmatter.xip ? (
                <a href={`/xips/xip-${row.frontmatter.xip}`}>
                  {row.frontmatter.xip}
                </a>
              ) : row.frontmatter.ir ? (
                <a href={`/irs/ir-${row.frontmatter.ir}`}>
                  {row.frontmatter.ir}
                </a>
              ) : (
                <a href={`/wgcs/wgc-${row.frontmatter.wgc}`}>
                  {row.frontmatter.wgc}
                </a>
              )}
            </td>
            <td className="title">{row.frontmatter.title}</td>
            <td className="author">
              <AuthorList author={row.frontmatter.author} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { StatusTable };
