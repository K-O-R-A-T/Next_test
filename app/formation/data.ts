interface CarModel {
  name: string;
  engine: string;
  power: string;
  desc: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  logo: string;
  lessonsList: CarModel[];
}

export const LESSONS: Lesson[] = [
  {
    id: "porsche",
    slug: "module1",
    title: "Porsche",
    logo: "/porsche-logo.png",
    lessonsList: [
      { 
        name: "911 Carrera", 
        engine: "3.0 Flat-6 Turbo", 
        power: "385 cv", 
        desc: "Le mythe absolu de la marque allemande, avec son architecture unique et son moteur en porte-à-faux arrière." 
      },
      { 
        name: "Cayman GT4", 
        engine: "4.0 Flat-6 Athmo", 
        power: "420 cv", 
        desc: "Une bête de circuit à moteur central, conçue pour offrir les sensations de conduite les plus pures." 
      },
      { 
        name: "918 Spyder", 
        engine: "4.6 V8 Hybride", 
        power: "887 cv", 
        desc: "L'hypercar technologique de Porsche, combinant un V8 de course hurlant avec deux moteurs électriques performants." 
      }
    ]
  },
  {
    id: "ferrari",
    slug: "module2",
    title: "Ferrari",
    logo: "/ferrari-logo.png",
    lessonsList: [
      { 
        name: "488 GTB", 
        engine: "3.9 V8 Bi-Turbo", 
        power: "670 cv", 
        desc: "Une supercar italienne d'exception, alliant un aérodynamisme poussé à la fougue d'un bloc V8 survolté." 
      },
      { 
        name: "FXX-K Evo", 
        engine: "6.3 V12 Hybride (KERS)", 
        power: "1050 cv", 
        desc: "Le monstre ultime réservé uniquement au circuit. Un aérodynamisme digne d'un prototype du Mans et un V12 strident." 
      },
      { 
        name: "Daytona SP3", 
        engine: "6.5 V12 Athmo", 
        power: "840 cv", 
        desc: "Chef-d'œuvre de la série Icona, rendant hommage aux prototypes de course des années 1960 avec le V12 le plus puissant de la marque." 
      }
    ]
  },
  {
    id: "land-rover",
    slug: "module4",
    title: "Land Rover",
    logo: "/LandRover-logo.png",
    lessonsList: [
      { 
        name: "Range Rover Sport", 
        engine: "3.0 D300", 
        power: "300 cv", 
        desc: "Le roi des SUV de luxe, capable de franchir les pires terrains dans un confort de première classe." 
      },
      { 
        name: "Defender 110", 
        engine: "3.0 D250 MHEV", 
        power: "250 cv", 
        desc: "Le baroudeur légendaire modernisé. Un franchisseur hors pair au look néo-rétro indestructible." 
      },
      { 
        name: "Range Rover Evoque", 
        engine: "2.0 P200 Flexfuel", 
        power: "200 cv", 
        desc: "Le SUV urbain chic et compact, reprenant le design dynamique de ses grands frères dans un format idéal pour la ville." 
      }
    ]
  },
  {
    id: "alfa-romeo",
    slug: "module3",
    title: "Alfa Romeo",
    logo: "/alfa-logo.png",
    lessonsList: [
      { 
        name: "Giulietta", 
        engine: "1.6 JTDm", 
        power: "105 cv", 
        desc: "Compacte italienne au design intemporel, réputée pour son comportement dynamique et ses poignées arrière intégrées aux vitres." 
      },
      { 
        name: "Giulia", 
        engine: "2.0 Turbo", 
        power: "200 cv", 
        desc: "Berline sportive à propulsion, dotée d'une répartition des masses parfaite pour un plaisir de conduite maximal." 
      },
      { 
        name: "4C Spider", 
        engine: "1750 TBi", 
        power: "240 cv", 
        desc: "Une mini-supercar ultra-légère avec un châssis monocoque entièrement en carbone et aucun filtre de conduite." 
      }
    ]
  },
  {
    id: "koenigsegg",
    slug: "module5",
    title: "Koenigsegg",
    logo: "/Koenigsegg-logo.png",
    lessonsList: [
      { 
        name: "Agera RS", 
        engine: "5.0 V8 Bi-Turbo", 
        power: "1360 cv", 
        desc: "Détentrice de records mondiaux de vitesse, une œuvre d'art d'ingénierie suédoise offrant un rapport poids/puissance de 1:1." 
      },
      { 
        name: "Jesko Absolut", 
        engine: "5.0 V8 Bi-Turbo (E85)", 
        power: "1600 cv", 
        desc: "Conçue pour briser la barre des 500 km/h, elle embarque la boîte de vitesses à 9 rapports 'Light Speed Transmission' la plus rapide du monde." 
      },
      { 
        name: "Gemera", 
        engine: "5.0 V8 Bi-Turbo Hybrid", 
        power: "2300 cv", 
        desc: "La première 'Mega-GT' à 4 places au monde. Un monstre hybride à quatre roues directrices et motrices au design spectaculaire." 
      }
    ]
  }
];