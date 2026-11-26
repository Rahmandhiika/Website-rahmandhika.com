import type { Project } from "./types";

// Copied verbatim from the "Porto 2026" slides in Figma (Page 1, frames 05-15).
export const projects: Project[] = [
  {
    "slug": "stride",
    "title": "Stride",
    "subtitle": "Group ride companion app",
    "oneLiner": "On a group motorcycle tour, riders get split up and lose signal.",
    "story": "On a group motorcycle tour, riders get split up and lose signal. Stride keeps the whole group on one map, warns anyone who drifts off route, and keeps everyone talking even without signal. I was the Product Designer: I led the UI and design system, interviewed riders, and tested it on a real tour.",
    "chips": {
      "role": "Product Designer",
      "period": "Sep 2026 – now",
      "tools": [
        "Figma"
      ]
    },
    "stats": [
      {
        "value": "6",
        "label": "Team members"
      },
      {
        "value": "1",
        "label": "Real tour test"
      },
      {
        "value": "Beta",
        "label": "In beta testing"
      }
    ],
    "footerLeft": "Product Design",
    "footerRight": "Apple Developer Academy",
    "accent": "blue",
    "cover": {
      "src": "/work/stride/tour-details.webp",
      "width": 402,
      "height": 874,
      "alt": "Stride tour details screen with the group's riders and their roles"
    },
    "gallery": [
      {
        "src": "/work/stride/off-route.webp",
      "width": 402,
      "height": 874,
        "alt": "Stride map warning that a rider is off route",
        "caption": "Off-route alert"
      },
      {
        "src": "/work/stride/anyer.webp",
      "width": 1200,
      "height": 2133,
        "alt": "The Stride team on a test ride to Anyer",
        "caption": "Test ride to Anyer"
      }
    ],
    "featured": true,
    "order": 1
  },
  {
    "slug": "chaingo",
    "title": "ChainGO",
    "subtitle": "Fruit delivery monitoring",
    "oneLiner": "Fruit often spoils on the way to the store, and nobody finds out until it arrives.",
    "story": "Fruit often spoils on the way to the store, and nobody finds out until it arrives. ChainGO puts sensors in each fruit crate on the truck and shows its temperature, humidity, and ripeness live. Our 6-person team, TariOT, built it in 20 days. I designed the Mac dashboard the head office uses and helped code it in SwiftUI.",
    "chips": {
      "role": "Designer + SwiftUI",
      "period": "Jul – Aug 2026",
      "tools": [
        "SwiftUI",
        "Swift Charts",
        "MapKit"
      ]
    },
    "stats": [
      {
        "value": "6",
        "label": "Team members"
      },
      {
        "value": "20",
        "label": "Days"
      },
      {
        "value": "3",
        "label": "Live sensors"
      }
    ],
    "footerLeft": "Product Design",
    "footerRight": "Apple Developer Academy",
    "accent": "green",
    "cover": {
      "src": "/work/chaingo/dashboard.webp",
      "width": 1512,
      "height": 982,
      "alt": "ChainGO Mac dashboard showing days until the fruit spoils"
    },
    "gallery": [
      {
        "src": "/work/chaingo/truck-detail.webp",
      "width": 1512,
      "height": 1534,
        "alt": "ChainGO truck detail with crate list, map, and sensor readings",
        "caption": "Truck detail"
      },
      {
        "src": "/work/chaingo/mascot.webp",
      "width": 800,
      "height": 805,
        "alt": "ChainGO mango mascot sitting on a crate",
        "caption": "Mascot sticker"
      }
    ],
    "featured": true,
    "order": 2
  },
  {
    "slug": "meander",
    "title": "Meander",
    "subtitle": "Quests for city explorers",
    "oneLiner": "A city exploration app: quests lead you to hidden spots and local community events, so a walk becomes more than a trip to one place.",
    "story": "A city exploration app: quests lead you to hidden spots and local community events, so a walk becomes more than a trip to one place. Our new 6-person team got an open theme, urban lifestyle. I was the design lead: I split the design work and guided teammates new to design. We ran 2 days of street interviews, and user testing led to 3 rounds of redesign, like cutting quests from 6 to 3.",
    "chips": {
      "role": "Design Lead",
      "period": "Jun – Jul 2026",
      "tools": [
        "Figma"
      ]
    },
    "stats": [
      {
        "value": "6",
        "label": "Team members"
      },
      {
        "value": "2",
        "label": "Days of interviews"
      },
      {
        "value": "3",
        "label": "Redesign rounds"
      }
    ],
    "footerLeft": "Product Design",
    "footerRight": "Apple Developer Academy",
    "accent": "blue",
    "cover": {
      "src": "/work/meander/screens.webp",
      "width": 1600,
      "height": 1050,
      "alt": "Three Meander screens: nearby events, a quest, and an event detail"
    },
    "gallery": [
      {
        "src": "/work/meander/feedback.webp",
      "width": 1600,
      "height": 900,
        "alt": "Slide showing how user feedback changed Meander's screens",
        "caption": "How feedback shaped Meander"
      }
    ],
    "featured": true,
    "order": 4
  },
  {
    "slug": "badminkuy",
    "title": "BadminKuy",
    "subtitle": "Hands-free badminton scoring",
    "oneLiner": "Casual badminton players lose track of the score mid-rally.",
    "story": "Casual badminton players lose track of the score mid-rally. BadminKuy keeps score without touching the phone: a player shows a hand sign and the iPhone camera reads it. In a 6-person team I was Project Manager and Designer. Later, working solo, I learned SwiftUI from zero and built a feature that shows which side serves next.",
    "chips": {
      "role": "PM, Designer, iOS Dev",
      "period": "Apr – May 2026",
      "tools": [
        "SwiftUI",
        "Vision"
      ]
    },
    "stats": [
      {
        "value": "6",
        "label": "Team members"
      },
      {
        "value": "2",
        "label": "User test rounds"
      },
      {
        "value": "1",
        "label": "iPhone needed"
      }
    ],
    "footerLeft": "Product Design",
    "footerRight": "Apple Developer Academy",
    "accent": "blue",
    "cover": {
      "src": "/work/badminkuy/hand-signs.webp",
      "width": 1600,
      "height": 736,
      "alt": "BadminKuy screen assigning a hand sign to each team"
    },
    "gallery": [
      {
        "src": "/work/badminkuy/before-after.webp",
      "width": 1600,
      "height": 900,
        "alt": "Concept testing slide comparing the two-iPhone idea with the one-iPhone hand-sign idea",
        "caption": "Concept testing: before vs after"
      }
    ],
    "featured": true,
    "order": 5
  },
  {
    "slug": "restme",
    "title": "RestMe",
    "subtitle": "Pixel-art cooking game",
    "oneLiner": "A tap-to-cook game: a hungry pixel-art fire-fox orders food, and you grill it, assemble it, and serve it before time runs out.",
    "story": "A tap-to-cook game: a hungry pixel-art fire-fox orders food, and you grill it, assemble it, and serve it before time runs out. A solo 10-day challenge. I set the scope, the game rules, and the grading, and built it in SwiftUI and SpriteKit, with AI helping on environment art and debugging.",
    "chips": {
      "role": "Solo: design + build",
      "period": "Sep 2026",
      "tools": [
        "SwiftUI",
        "SpriteKit"
      ]
    },
    "stats": [
      {
        "value": "10",
        "label": "Days"
      },
      {
        "value": "1",
        "label": "Person"
      },
      {
        "value": "3",
        "label": "Dish grades"
      }
    ],
    "footerLeft": "Game Design",
    "footerRight": "Apple Developer Academy",
    "accent": "yellow",
    "cover": {
      "src": "/work/restme/grill.webp",
      "width": 1600,
      "height": 900,
      "alt": "RestMe kitchen with a burger patty on the grill and the fire-fox customer"
    },
    "gallery": [
      {
        "src": "/work/restme/serve.webp",
      "width": 1600,
      "height": 900,
        "alt": "RestMe order served to the fire-fox on time",
        "caption": "Order served on time"
      }
    ],
    "featured": false,
    "order": 7
  },
  {
    "slug": "trivoi",
    "title": "TriVoi",
    "subtitle": "Voice + karaoke prototype",
    "oneLiner": "My first solo project at the Academy: a voice interaction concept, built from scratch with no step-by-step guide.",
    "story": "My first solo project at the Academy: a voice interaction concept, built from scratch with no step-by-step guide. A top-down 2D world where each teammate appears as a pixel-art character, and you record your voice or sing karaoke. I made the concept, drew every character and pose, and designed the interactive prototype.",
    "chips": {
      "role": "Solo designer",
      "period": "Mar – Apr 2026",
      "tools": [
        "Pixel art",
        "Prototype"
      ]
    },
    "stats": [
      {
        "value": "1",
        "label": "Person"
      },
      {
        "value": "2",
        "label": "Weeks"
      },
      {
        "value": "6",
        "label": "Characters drawn"
      }
    ],
    "footerLeft": "UI/UX Design",
    "footerRight": "Apple Developer Academy",
    "accent": "yellow",
    "cover": {
      "src": "/work/trivoi/characters.webp",
      "width": 1322,
      "height": 700,
      "alt": "Four pixel-art TriVoi characters standing on their bases"
    },
    "gallery": [
      {
        "src": "/work/trivoi/idle-frames.webp",
      "width": 1600,
      "height": 467,
        "alt": "Frame-by-frame idle animation of Dika's pixel-art character",
        "caption": "Idle animation, frame by frame"
      }
    ],
    "featured": false,
    "order": 8
  },
  {
    "slug": "cashier-system",
    "title": "Cashier System",
    "subtitle": "Live client project · Retail",
    "oneLiner": "A family-owned retail business with several branches ran its sales by hand.",
    "story": "A family-owned retail business with several branches ran its sales by hand. On a paid contract, I designed the cashier and stock system and built its front end with a back-end developer. It has run in their stores since August 2026, and I handle deployment and fixes. The client now has me leading the UI on a second system for their gym.",
    "chips": {
      "role": "Designer + Front-End",
      "period": "Jul 2026 – now",
      "tools": [
        "Next.js",
        "React",
        "TS"
      ]
    },
    "stats": [
      {
        "value": "Live",
        "label": "Since Aug 2026"
      },
      {
        "value": "3",
        "label": "Access levels"
      },
      {
        "value": "2",
        "label": "Systems, same client"
      }
    ],
    "footerLeft": "Client Work",
    "footerRight": "Paid contract · 2026",
    "accent": "yellow",
    "cover": {
      "src": "/work/cashier-system/diagram.webp",
      "width": 885,
      "height": 866,
      "alt": "Diagram of how the cashier system works: three roles, web app, database, server, invoices, and login"
    },
    "gallery": [
      {
        "src": "/work/cashier-system/screen.webp",
      "width": 1187,
      "height": 800,
        "alt": "The sales screen of the cashier system, recreated with made-up data",
        "caption": "Recreated with made-up data to protect the client"
      }
    ],
    "featured": true,
    "order": 3
  },
  {
    "slug": "mazdu",
    "title": "MazDu",
    "subtitle": "Two-phone maze duel",
    "oneLiner": "A 1v1 maze duel for two iPhones that connect straight to each other, with no server or internet.",
    "story": "A 1v1 maze duel for two iPhones that connect straight to each other, with no server or internet. Made for an Apple Developer Academy game jam with the theme Compact. Teams needed at least three people; I built it solo in a few weeks and ran the booth on my own at the exhibition.",
    "chips": {
      "role": "Solo: design + code",
      "period": "Sep 2026",
      "tools": [
        "SwiftUI",
        "Multipeer"
      ]
    },
    "stats": [
      {
        "value": "1",
        "label": "Person team"
      },
      {
        "value": "3",
        "label": "Min. team size"
      },
      {
        "value": "2",
        "label": "iPhones per match"
      }
    ],
    "footerLeft": "Personal Project",
    "footerRight": "Game Jam 2026",
    "accent": "orange",
    "cover": {
      "src": "/work/mazdu/duel.webp",
      "width": 1000,
      "height": 1778,
      "alt": "Two people playing MazDu against each other on two iPhones"
    },
    "gallery": [
      {
        "src": "/work/mazdu/title.webp",
      "width": 600,
      "height": 1304,
        "alt": "MazDu title screen styled like a handheld console",
        "caption": "Title screen"
      },
      {
        "src": "/work/mazdu/gameplay.webp",
      "width": 600,
      "height": 1304,
        "alt": "A MazDu player moving through the maze with the timer and enemy indicator",
        "caption": "In the maze"
      }
    ],
    "featured": true,
    "order": 6
  },
  {
    "slug": "mentoring",
    "title": "Mentoring",
    "subtitle": "Teaching back-end at BNCC",
    "oneLiner": "For two batches at BNCC, BINUS's computer club, I taught students how to build the back end of a website with Laravel.",
    "story": "For two batches at BNCC, BINUS's computer club, I taught students how to build the back end of a website with Laravel. Every one of my learners finished and put a website online. I also wrote the brief for an inventory website, Toko Meksiko, and built it myself in 3 days. It was chosen as Batch 36's official final project.",
    "chips": {
      "role": "Back-End Mentor",
      "period": "Sep 2024 – Apr 2026",
      "tools": [
        "Laravel",
        "REST APIs"
      ]
    },
    "stats": [
      {
        "value": "36",
        "label": "Learners"
      },
      {
        "value": "5",
        "label": "Classes"
      },
      {
        "value": "100%",
        "label": "Put a site online"
      }
    ],
    "footerLeft": "Teaching",
    "footerRight": "BNCC · BINUS University",
    "accent": "blue",
    "cover": {
      "src": "/work/mentoring/toko-meksiko.webp",
      "width": 813,
      "height": 412,
      "alt": "Toko Meksiko inventory website, the brief Dika wrote and built"
    },
    "gallery": [],
    "featured": false,
    "order": 9
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
