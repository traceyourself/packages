import React from 'react'

import { colors } from 'App/style/settings'

export const contactPhone = '801-717-9054'

const chooseRandom = (options) =>
  options[Math.floor(Math.random() * options.length)]

const urls = {
  buyPackage1: 'https://ancestorcloud.typeform.com/to/FPiX8R',
  buyPackage2: 'https://nytimes.com'
}

export const Links = {
  BuyPackage: ({children}) =>
    <a {...{
      href: chooseRandom([urls.buyPackage1, urls.buyPackage2]),
      className: 'typeform-share link',
      'data-mode': '2',
      target: '_blank'
    }}>{children}</a>
}

export const packages = {
  origins: {
    icon: '/assets/images/originsTree.svg',
    name: 'Origins Package',
    subtitle: '4 Generations',
    checklist: [
      'Bios on 3-5 of your ancestors',
      'Up to 4 generations pedigree chart',
      'Contextual information',
      'Pictures, records, and documents'
    ],
    price: 149,
    link: urls.buyPackage
  },
  lineage: {
    icon: '/assets/images/lineageBook.svg',
    name: 'Lineage Package',
    subtitle: '6 Generations',
    checklist: [
      'Bios on 6-10 individual ancestors',
      'Up to 6 generations pedigree chart',
      'Contextual information',
      'Pictures, records, and documents',
      'Cited sources and research log'
    ],
    price: 299,
    disabled: true
  }
}

const avatarDirectory = '/assets/images/Testimonials/'

const people = {
  fred: {
    name: 'Fred Robson',
    location: 'Ontario',
    avatar: `${avatarDirectory}fred.jpg`
  },
  anna: {
    name: 'Anna Chan',
    location: 'California',
    avatar: `${avatarDirectory}anna.jpg`
  },
  jordan: {
    name: 'Jordan Scoggins',
    location: 'New York',
    avatar: `${avatarDirectory}jordan.jpg`
  },
  rebecca: {
    name: 'Rebecca Waldorf',
    location: 'Florida',
    avatar: `${avatarDirectory}rebecca.jpg`
  }
}

export const testimonials = [
  {
    person: people.fred,
    package: packages.lineage,
    quote: `I've been trying to get this information for years. AncestorCloud made it all possible. Thanks so much.`
  },
  {
    person: people.anna,
    package: packages.origins,
    quote: `Trace has given me a bigger sense of family.`
  },
  {
    person: people.jordan,
    package: packages.origins,
    quote: `The trip exceeded my expectations. I would do it again in a heartbeat, I’m hoping to do it in another country.`
  },
  {
    person: people.rebecca,
    package: packages.lineage,
    quote: `Now I feel like I have family. I'm not a researcher or family historian, but I'm understanding the importance of learning your family history.`
  }
]

export const questions = [
  {
    q: `What's included in my initial research package?`,
    a: `You will receive the results of hours of work from an expert genealogist. This will include a family tree, stories about selected ancestors, images of historical documents related to your ancestor, and a report of how the researcher spent his or her time.`
  },
  {
    q: `What if my family has already done some research?`,
    a: `That is great! The research steps that the expert will take can be tweaked based on what you already know. Also, when you are matched with a helper, don’t forget to provide them with all the information you already have about your family tree!`
  },
  {
    q: `How is this different from sites like Ancestry?`,
    a: `While Ancestry can connect you to historical records, Trace connects you with people who have experience and expertise using the historical records found in libraries, archives, and sites like Ancestry, FamilySearch, and others. It can take years to become thoroughly familiar with all the resources that are available, so Trace allows you to access the knowledge that experts have accumulated over years of their own experience.`
  },
  {
    q: `What if they can’t find anything about my family?`,
    a: `Sometimes all the necessary historical records about certain people have been destroyed, lost, or were never created. When that is the case, the expert will provide you with anything they find, including clues that may be available. It would be rare for a researcher to be unable to find something about your family. If you have doubts that an expert will be able to find anything about your particular family, please call us so that we can discuss the specifics!`
  },
  {
    q: `Who will I be paired with?`,
    a: `Trace has a network of genealogists who have expertise in areas all around the world. You will be paired with an expert whose experience and qualifications best fits your needs.`
  },
  {
    q: `When should I expect results?`,
    a: `Results will be submitted to you within a month of your purchase. If the expert researcher believes that more time is needed at the end of one month, (s)he will provide all that (s)he have found to that point, and will explain the additional research that needs to be done.`
  },
  {
    q: `How does payment work?`,
    a: `You will pay for the research up front. After you receive the results of the research, the expert will be paid for his or her work.`
  },
  {
    q: `What if I have other questions?`,
    a:
      <div>{`We are happy to talk with you about any specific questions you have. Just give us a call at `}
      <a {...{
        href: `tel:${contactPhone}`,
        style: {
          color: colors.heather[0],
          textDecoration: 'underline',
          whiteSpace: 'nowrap'
        }
      }}>{contactPhone}</a>
      {`, or send us a message by clicking on the blue icon in the lower right corner of the screen.`}</div>
  }
]
