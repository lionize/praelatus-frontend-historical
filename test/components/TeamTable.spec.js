import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TeamTable } from 'components/teams/TeamList'
import { TeamLink, UserLink } from 'components'

describe('TeamTable Component', () => {
  const setup = propOverrides => {
    const props = Object.assign({
      children: null,
    }, propOverrides)

    const wrapper = shallow(<TeamTable {...props} />)

    return {
      props,
      wrapper,
      rows: wrapper.find('tbody tr'),
      teamLink: wrapper.find(TeamLink),
      userLink: wrapper.find(UserLink),
    }
  }

  const fixtures = [
    {
      name: 'Team With Lead',
      lead: {
        username: 'user0',
      },
    },
    {
      name: 'Team With Members',
      members: [
        { username: 'user0' },
        { username: 'user1' },
        { username: 'user2' },
      ],
    },
    {
      name: 'Team With None'
    }
  ]

  context('team', () => {
    it("renders a row with team's information", () => {
      const { teamLink } = setup({ teams: [fixtures[0]] })

      expect(teamLink.prop('team')).to.eq(fixtures[0])
      expect(teamLink.prop('children')).to.eq(fixtures[0].name)
    })
  })

  context('lead', () => {
    it('renders a link to team lead', () => {
      const { userLink } = setup({ teams: [fixtures[0]] })

      expect(userLink.prop('user')).to.eq(fixtures[0].lead)
      expect(userLink.prop('children')).to.eq(fixtures[0].lead.username)
    })

    it('does not render lead link if lead does not exist', () => {
      const { userLink } = setup({ teams: [fixtures[2]] })

      expect(userLink.exists()).to.be.false
    })
  })

  context('members', () => {
    it('renders links to team members', () => {
      const { userLink } = setup({ teams: [fixtures[1]] })

      expect(userLink.length).to.eq(3)
      expect(userLink.at(0).prop('user')).to.eq(fixtures[1].members[0])
      expect(userLink.at(0).prop('children')).to.eq(fixtures[1].members[0].username)
    })

    it('does not render member links if members do not exist', () => {
      const { userLink } = setup({ teams: [fixtures[2]] })

      expect(userLink.exists()).to.be.false
    })
  })
})
