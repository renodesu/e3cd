const companies = [
  {
    name: 'Microsoft',
    id: 'microsoft',
    timestamp: 1560110400,
    logo: {
      src: 'microsoft.png'
    },
    official: 'https://www.xbox.com/e3',
    mixer: 'Xbox',
    streams: [
      {
        id: 'ms1',
        type: 'twitch',
        link: 'https://www.twitch.tv/xbox',
        embed: {
          channel: 'xbox'
        }
      }
    ]
  },
  {
    name: 'Bethesda',
    id: 'bethesda',
    timestamp: 1560126600,
    logo: {
      src: 'bethesda.jpg'
    },
    official: 'https://bethesda.net',
    mixer: 'Bethesda',
    streams: [
      // {
      //   id: 'bethesda1',
      //   type: 'youtube',
      //   link: 'https://www.twitch.tv/xbox',
      //   embed: {
      //     channel: 'xbox'
      //   }
      // },
      {
        id: 'bethesda2',
        type: 'twitch',
        link: 'https://www.twitch.tv/bethesda',
        embed: {
          channel: 'bethesda'
        }
      }
    ]
  },
  {
    name: 'PC Gaming Show',
    id: 'pcgamer',
    timestamp: 1560186000,
    logo: {
      src: 'pcgamer.jpg'
    },
    official: 'https://www.pcgamingshow.com',
    mixer: 'PCGamer',
    streams: [
      {
        id: 'pcgaming1',
        type: 'twitch',
        link: 'https://www.twitch.tv/pcgamer',
        embed: {
          channel: 'pcgamer'
        }
      }
    ]
  },
  {
    name: 'Ubisoft',
    id: 'ubisoft',
    timestamp: 1560196800,
    logo: {
      src: 'ubisoft.jpg'
    },
    official: 'https://www.ubisoft.com',
    mixer: 'Ubisoft',
    streams: [
      {
        id: 'ubisoft11',
        type: 'twitch',
        link: 'https://www.twitch.tv/ubisoft',
        embed: {
          channel: 'ubisoft'
        }
      }
    ]
  },
  {
    name: 'Square Enix',
    id: 'squareenix',
    timestamp: 1560214800,
    logo: {
      src: 'squareenix.jpg'
    },
    official: 'https://e3.square-enix-games.com/en-us/',
    mixer: 'SquareEnix',
    streams: [
      {
        id: 'nintendo1',
        type: 'twitch',
        link: 'https://www.twitch.tv/squareenix',
        embed: {
          channel: 'squareenix'
        }
      }
    ]
  },
  {
    name: 'Nintendo',
    id: 'nintendo',
    timestamp: 1560268800,
    logo: {
      src: 'nintendo.png'
    },
    official: 'https://e3.nintendo.com/',
    mixer: 'Nintendo',
    streams: [
      {
        id: 'nintendo1',
        type: 'twitch',
        link: 'https://www.twitch.tv/nintendo',
        embed: {
          channel: 'nintendo'
        }
      }
    ]
  },
  {
    name: 'Devolver Digital',
    id: 'devolverdigital',
    timestamp: 1560132000,
    logo: {
      src: 'devolverdigital.png'
    },
    official: 'https://www.devolverdigital.com/',
    mixer: 'DevolverDigital',
    streams: [
      {
        id: 'devolver1',
        type: 'twitch',
        link: 'https://www.twitch.tv/twitch',
        embed: {
          channel: 'twitch'
        }
      }
    ]
  },
]

export default companies
