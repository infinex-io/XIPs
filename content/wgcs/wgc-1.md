---
title: Working Group Purpose and Guidelines
wg_name: '-'
wgc: 1
wg_lead: '-'
author: kmao (@kmao37), Kain (@kaiynne), Spinxho (@spinxho)
status: Draft
budget: '-'
budget_cadence: '-'
timeline: '-'
created: 2023-12-06
updated: 2023-12-06
established: '2023-12-06'
---

## What is a WGC?

WGC stands for Working Group Charter. A WGC is a document that outlines the establishment of a working group, defines its outcomes, and aligns expectations between the working group and the Council.

## WGC Rationale

Infinex's initial governance structure was forked from Synthetix and thus established core contributors as the primary way to contribute to the platform. After further developments, various issues have arisen. These are:

- The lack of delegation processes between the Council and the protocol contributors.
- The various 1-1 relationships between the council and core contributors.
- The lack of a formal methodology and accountability framework in implementing council-directed decisions.

The introduction of working groups is designed to resolve these issues, streamlining how contributions to the protocol are coordinated.

The following implementations are proposed:

1. Introduction of 'working groups' and 'working group leads'.
1. Deprecation of the 'core contributor' role.
1. Introduction of the Working Group Charter (WGC).

### Working groups

Rather than having individual core contributors directly engage with the Council, working groups are proposed — clusters of contributors who collectively coordinate with the Council via a working group lead.

The functioning of each working group is guided by budgetary frameworks and timelines, negotiated between the Treasury Seat, Core Contributor Seat and the working group lead. A working group is then ratified via a council vote on their respective WGC.

### Working group lead

Each working group will have a working group lead who is responsible for:

- Managing the working group.
- Collaborating with the Core Contributor seat and Treasury seat to set budget and timelines.
- Conducting retrospectives with the Council.
- Managing the assigned budget to execute working group outcomes.
- Drafting relevant Release Candidates (RCs)* for approval by the Council.

\*RCs are a new form of documentation that will be introduced in RC-1. RCs aim to be a changelog of overall proposed changes to be easily approved by the Council.

## WGC Workflow

Anyone within the Infinex community is welcome to submit a WGC. However, to foster a collaborative environment, it is strongly encouraged that authors engage in discussions within the Infinex Discord community and directly negotiate with the Treasury and Core Contributor seats before formally submitting their charters. This preliminary discourse allows for the exchange of ideas, feedback, and refinement of concepts, ultimately leading to more robust and well-considered WGCs.

The WGC workflow comprises three main stages:

1. Creation

Every WGC will begin as a&nbsp;`Draft`. It must then meet specific formatting criteria (largely, correct metadata in the header), and be approved by the WGC editor for further community discussion and consideration. Once ready, the draft will be merged into the ~~proposals~~ website.

The author of the WGC is responsible for building consensus within the community and council, whilst documenting dissenting opinions. A Discord AMA presentation must then be held during this drafting phase, which can be arranged in coordination with the WGC editor.

1. Voting

Once a&nbsp;`Draft`&nbsp;is believed to be mature enough and ready to progress, it will move into&nbsp;`Vote Pending`.

1. Approval

WGCs will be voted on by the Infinex Council (`Vote Pending`) for five days and will be passed only under a majority decision. Approved WGCs are moved to `Approved` and then `Established` once executed. Otherwise, it is `Rejected`.

1. Dissolution

If a working group is to be dissolved, the core contributor seat must present to the council their rationale behind dissolving the working group. After this internal presentation, the council will then vote on the dissolution of the working group for five days. A WG can only be dissolved only if the treasury seat, core contributor seat and two other seats vote for it. Working groups are also automatically dissolved and require no council vote once the timeline outlined in the WGC has elapsed.

## WGC status terms

- **Draft**&nbsp;– The initial state of a new WGC before the Infinex Council has formally assessed it.
- **Vote Pending**&nbsp;– a WGC that is awaiting a vote.
- **Approved**&nbsp;– a WG that has successfully reached a majority Infinex Council vote in favour.
- **Rejected**&nbsp;– a WGC that has failed to reach a majority Infinex Council vote in favour.
- **Established**&nbsp;– A ~~WG~~ has been established.
- **Dissolved** - A WG has been dissolved.

## **What belongs in a successful WGC**

Each WGC should have the following parts:

- **Working group name** – Clearly state the official name of the working group, which should reflect its primary function or area of focus.
- **Working group lead** – Provide the name of the working group lead.
- **Outcomes** – Specify the desired outcomes or goals that the working group lead aims to achieve with the creation of their working group.
- **Budget** – Propose a budget to facilitate the operational costs of the working group, and the cadence at which this is provided. This should be designed to prevent outlandish expenditure of resources (time and money). A rationale should be included.
- **Timeline** – Offer a timeline for achieving the set outcomes with the proposed budget frameworks in mind. A rationale should be included.
- **Release Candidate frequency** (*optional) – Describe the frequency (weekly/fortnightly/monthly/custom of RCs that should be drafted for approval by the Council.
- **Dissolution Rationale**- This should be left empty until the working group is dissolved. Once dissolved, the WGC editor needs to update the WGC with the rationale behind the dissolution of the working group.

## WGC Formats and Templates

WGCs should be written in&nbsp;[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)&nbsp;format. Image files should be included in a subdirectory of the assets folder for that WGC as follows: assets/wgc-X (for wgc X). When linking to an image in the WGC, use relative links such as ../assets/wgc-X/image.png.

## WGC Header Preamble

Each WGC must begin with an&nbsp;[RFC 822](https://www.ietf.org/rfc/rfc822.txt)&nbsp;style header preamble, preceded and followed by three hyphens (`---`). This header is also termed&nbsp;["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order.

`title:`

`type:` <Establishment | Dissolution>

`wg name:`&nbsp;<the official name of the working group>

`wg lead:`&nbsp;<the working group lead's name and/or username>

`author:`&nbsp;<a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s)>

`status:`&nbsp;<Draft | Vote Pending | Approved | Rejected | Established | Dissolved>

`budget:`&nbsp;<the budget assigned to the working group to achieve their outcome, i.e. 40,000 USDC>

`budget cadence:`&nbsp;<the frequency at which the budget is provided to the working group i.e. weekly, monthly, etc >

`timeline:`&nbsp;<length of the working group i.e. 4 months, 12 months, indefinite>

`created:`&nbsp;<yyyy-mm-dd>

`established:`&nbsp;<yyyy-mm-dd>

## WGC Editors

The current XIP editors will take on the additional role of editing WGCs. The current XIP editors are:

- kmao (@kmao37)

## WGC Editor Responsibilities

For every WGC submitted, the WGC editor will operate as an editor of the WGC. During the drafting stage of the process, the editor will work closely with the author to:

- Ensure the title accurately describes the content.
- Read the WGC to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- Check the WGC for language (spelling, grammar, sentence structure, etc.), markup (Github-flavored Markdown), and code style.

If the WGC isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the WGC is ready for the repository, the WGC editor will:

- Assign a WGC number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this WGC).
- Merge the corresponding pull request.
- Send a message back to the WGC author with the next step.

The WGC editor has the discretion to update and improve the WGC template structure. The WGC editor also monitors WGC changes and corrects any structure, grammar, spelling, or markup mistakes as needed.

The editors do not pass judgment on WGCs. They merely hold an administrative and editorial role.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).