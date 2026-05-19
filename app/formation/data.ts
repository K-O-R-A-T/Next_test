export interface Lesson {
  id: string;
  title: string;
  slug: string;
  lessonsList: string[];
}

export const LESSONS: Lesson[] = [
  {
    id: "1",
    title: "Porsche",
    slug: "module1",
    lessonsList: [
      "911 Turbo S",
      "918 Spyder",
      "taycan"
    ]
  },
  {
    id: "2",
    title: "Ferrari",
    slug: "module2",
    lessonsList: [
      "488 Pista",
      "F8 Tributo",
      "SF90 Stradale"
    ]
  },
  {
    id: "3",
    title: "Alfa Romeo",
    slug: "module3",
    lessonsList: [
      "Giulia",
      "Giulietta",
      "4C"
    ]
  },
  {
    id: "4",
    title: "Land Rover",
    slug: "module4",
    lessonsList: [
      "Defender",
      "Discovery",
      "Range Rover"
    ]
  },
  {
    id: "5",
    title: "Koenigsegg",
    slug: "module5",
    lessonsList: [
      "Agera RS",
      "Agera R",
      "Regera"
    ]
  }
];