export const links = {
  buyPackage: 'https://ancestorcloud.typeform.com/to/bPRs0k'
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
    link: links.buyPackage
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

const people = {
  joan: {
    name: 'Joan Rivers',
    title: 'Actress',
    avatar: 'http://images.clipartpanda.com/face-clipart-dc8xrnRce.jpeg'
  },
  melissa: {
    name: 'Melissa Melissa',
    title: 'Cool Chick',
    avatar: 'http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg'
  }
}

export const testimonials = [
  {
    person: people.joan,
    package: packages.origins,
    quote: `This is an awesome testimonial about Trace. Cupiditate commodi quo est debitis sit exercitationem et eius. Nihil facilis doloremque vel quia consequatur similique tenetur fugit. Eum autem nihil ut. Eum voluptas nesciunt voluptatem corrupti aut. Sapiente et sint expedita dolor qui voluptate. Tempora incidunt aliquam praesentium consectetur.`
  },
  {
    person: people.melissa,
    package: packages.lineage,
    quote: `This is an awesome testimonial about Trace. Cupiditate commodi quo est debitis sit exercitationem et eius. Nihil facilis doloremque vel quia consequatur similique tenetur fugit. Eum autem nihil ut. Eum voluptas nesciunt voluptatem corrupti aut. Sapiente et sint expedita dolor qui voluptate. Tempora incidunt aliquam praesentium consectetur.`
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
    a: `We are happy to talk with you about any specific questions you have. Just give us a call at 801-717-9054, or send us a message by clicking on the blue icon in the lower right corner of the screen.`
  }
]
