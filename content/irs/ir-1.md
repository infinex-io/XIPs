---
title: IR Purpose and Guidelines
ir: 1
author: Kain (@kaiynne), kmao (@kmao37), Spinxho (@spinxho)
status: Vote_Pending
created: 2023-11-30
updated: 2023-12-06
---
## What is an IR

IR stands for Infinex Referendum (IR). An Infinex Referendum is the mechanism by which meta-governance changes are made to the Infinex Protocol.

## IR Rationale

Though Governance Framework v1.0 was sufficient for launching Infinex Governance, there are severe inaccuracies and ambiguities described under “Meta-governance” that require clarification:

1. Due to the immutable nature of the Infinex governance contracts, any adjustments to these contracts necessitates forking. Governance v1.0 suggests that forking is only a possibility, which is incorrect.
1. This proposal replaces the&nbsp;`meta-governance`&nbsp;XIP category with the Infinex Referendum (IR) as the Council cannot modify the immutable election module.

The introduction of Infinex Referenda establishes a framework for proposing, deliberating, and implementing changes to the immutable governance contracts.

## IR Work Flow

Due to the Governance v1.0 framework specifying that Synthetix debt shareholders are the sole voters on meta-governance, the IR-1 proposal must be passed by a minimum of 60% of the actual debt shares voted. This will include debt shares on all networks and will be implemented via a snapshot taken at the time of the IR's deployment. This voting will be a linear SDS method, which is the same voting method as Synthetix's treasury council elections. Future IRs may take into consideration Governance Points holders.

Anyone within the Infinex community is welcome to submit an IR. However, to foster a collaborative environment, it is strongly encouraged that authors engage in discussions within the Infinex Discord community before formally submitting their proposals. This preliminary discourse allows for the exchange of ideas, feedback, and refinement of concepts, ultimately leading to more robust and well-considered IRs.

The IR workflow comprises three main stages:

1. Creation

Every IR will begin as a&nbsp;`Draft`. It must then meet specific formatting criteria (largely, correct metadata in the header), and be approved by the XIP editor for further community discussion and consideration. Once ready, the draft will be merged into the XIP website.

The author of the IR is responsible for building consensus within the community and documenting dissenting opinions. A Discord AMA presentation must then be held during this drafting phase, which can be arranged in coordination with the XIP editor.

1. Voting

Once a&nbsp;`Draft`&nbsp;is believed to be mature enough and ready to progress, it will move into&nbsp;`Vote Pending`.

At this stage, a new election module will be deployed by the Council with the relevant code changes and parameters of the proposed fork. This contract will remain inactive, and will only be triggered once a certain threshold of 'Yes' votes by Synthetix debt share holders has been reached.

1. Approval

IRs will be voted on by Synthetix debt share holders. If an IR is&nbsp;`Accepted`&nbsp;based on a 60% threshold [configurable via IR] of 'Yes' votes, the fork will become active. An IR is&nbsp;`Rejected`&nbsp;if the required threshold of ‘Yes’ votes is not reached.

Voting will be live for seven days [configurable via IR].

## What belongs in a successful IR?

Each IR should have the following parts:

- Referendum Summary – This section provides a summary of the referendum. It should briefly cover what implementations will happen if the proposal passes. The overview should be non-technical and accessible to a casual community member.
- Specification – The specification should describe the syntax and semantics of any new upgrade.
  - Overview – The overview should aim to describe the motivations for the changes that will be implemented if the Referendum is passed, and why it should pass. It should clearly explain why the existing specification is inadequate to address the problem that the Referendum solves.
- Copyright – All IR must be in the public domain. See the bottom of this IR for an example copyright waiver.

## IR Formats and Templates

IRs should be written in markdown&nbsp;format. Image files should be included in a subdirectory of the&nbsp;`assets`&nbsp;folder for that IR as follows:&nbsp;`assets/ir-X`&nbsp;(for IR X). When linking to an image in the IR, use relative links such as&nbsp;`../assets/ir-X/image.png`.

## IR Header Preamble

Each IR must begin with an&nbsp;[RFC 822](https://www.ietf.org/rfc/rfc822.txt)&nbsp;style header preamble, preceded and followed by three hyphens (`---`). This header is also termed&nbsp;["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order.

`ir:`&nbsp;(this is determined by the XIP editor)

`title:`

`author:`<a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s).>

`status:`< Draft | Vote Pending | Approved | Rejected | Implemented >

`created:`&nbsp;<date created on, in ISO 8601 (yyyy-mm-dd) format>

`implemented:`&nbsp;<date implemented on, in ISO 8601 (yyyy-mm-dd) format>

## Auxiliary Files

IRs may include auxiliary files such as diagrams. Such files must be named IR-XXXX-Y.ext, where “XXXX” is the IR number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## XIP Editors

The current XIP editors will take on the additional role of editing IRs. The current XIP editors are:

- kmao (@kmao37)

## XIP Editor Responsibilities

For every IR submitted, the XIP editor will operate as an editor of the IR. During the drafting stage of the process, the editor will work closely with the author to:

- Ensure the title accurately describes the content.
- Read the IR to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- Check the IR for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), and code style.

If the IR isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the IR is ready for the repository, the XIP editor will:

- Assign an IR number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this IR).
- Merge the corresponding pull request.
- Send a message back to the IR author with the next step.

Many IRs are written and maintained by developers with write access to the Ethereum codebase. The XIP editors monitor IR changes and correct any structure, grammar, spelling, or markup mistakes we see.

The editors do not pass judgment on IRs. They merely hold an administrative and editorial role.

## Copyright

Copyright and related rights waived via&nbsp;[CC0](https://creativecommons.org/publicdomain/zero/1.0/).
