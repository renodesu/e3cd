const companies = [
  {
    name: 'Microsoft',
    timestamp: 1560110400,
    logo: {
      src: ''
    },
    official: 'https://www.xbox.com/e3',
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
    timestamp: 1560126600,
    logo: {
      src: ''
    },
    official: null,
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
    timestamp: 1560186000,
    logo: {
      src: ''
    },
    official: 'https://www.pcgamingshow.com',
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
    timestamp: 1560196800,
    logo: {
      src: ''
    },
    official: null,
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
    timestamp: 1560214800,
    logo: {
      src: ''
    },
    official: 'https://e3.square-enix-games.com/en-us/',
    streams: []
  },
  {
    name: 'Nintendo',
    timestamp: 1560268800,
    logo: {
      src: ''
    },
    official: 'https://e3.nintendo.com/',
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
]

export default companies
