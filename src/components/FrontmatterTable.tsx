import React from 'react'
import { format } from 'date-fns'
import { graphql } from 'gatsby'

import { FrontmatterFragment } from '../../types/gql'
import { AuthorList } from './AuthorList'
import { ProposalStatus } from './ProposalStatus'

interface Props {
  frontmatter: FrontmatterFragment
}

const FrontmatterTable: React.FC<Props> = ({ frontmatter }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Author</th>
          <td>
            <AuthorList author={frontmatter.author} />
          </td>
        </tr>
        {frontmatter.wg_name && frontmatter.wgc !== 1 && (
          <tr>
            <th>Working Group</th>
            <td>{frontmatter.wg_name}</td>
          </tr>
        )}
        {frontmatter.wg_lead && frontmatter.wgc !== 1 && (
          <tr>
            <th>Working Group Lead</th>
            <td>{frontmatter.wg_name}</td>
          </tr>
        )}
        <tr>
          <th>Status</th>
          <td>{frontmatter.status}</td>
        </tr>
        {frontmatter.budget && frontmatter.wgc !== 1 && (
          <tr>
            <th>Budget</th>
            <td>{frontmatter.budget}</td>
          </tr>
        )}
        {frontmatter.budget_cadence && frontmatter.wgc !== 1 && (
          <tr>
            <th>Budget Cadence</th>
            <td>{frontmatter.budget_cadence}</td>
          </tr>
        )}
        {frontmatter.timeline && frontmatter.wgc !== 1 && (
          <tr>
            <th>Timeline</th>
            <td>{frontmatter.timeline}</td>
          </tr>
        )}
        {frontmatter.type && (
          <tr>
            <th>Type</th>
            <td>{frontmatter.type}</td>
          </tr>
        )}

        {frontmatter.network && (
          <tr>
            <th>Network</th>
            <td>{frontmatter.network}</td>
          </tr>
        )}

        {frontmatter.implementor && (
          <tr>
            <th>Implementor</th>
            <td>{frontmatter.implementor || 'TBD'}</td>
          </tr>
        )}

        {frontmatter.proposal && (
          <tr>
            <th>Release</th>
            <td>{frontmatter.release || 'TBD'}</td>
          </tr>
        )}

        {frontmatter.proposal && (
          <tr>
            <th>Proposal</th>
            <td>
              <ProposalStatus url={frontmatter.proposal} />
            </td>
          </tr>
        )}
        {frontmatter.created && (
          <tr>
            <th>Created</th>
            <td>{format(new Date(frontmatter.created), 'yyyy-MM-dd')}</td>
          </tr>
        )}
        {frontmatter.updated && (
          <tr>
            <th>Updated</th>
            <td>{format(new Date(frontmatter.updated), 'yyyy-MM-dd')}</td>
          </tr>
        )}
        {frontmatter.established && frontmatter.wgc !== 1 && (
          <tr>
            <th>Established</th>
            <td>{format(new Date(frontmatter.established), 'yyyy-MM-dd')}</td>
          </tr>
        )}

      </tbody>
    </table>
  )
}

export const query = graphql`
  fragment Frontmatter on MarkdownRemarkFrontmatter {
    xip
    ir
    wgc
    title
    network
    author
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

export default FrontmatterTable
