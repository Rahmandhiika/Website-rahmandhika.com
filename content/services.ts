import type { Service } from "./types";

// Bodies are drafts built only from CV facts; Dika reviews them before launch.
export const services: Service[] = [
  { number: "01", title: "UI/UX & design systems", body: "User interviews, flows, and polished screens in Figma, backed by a design system your developers can follow." },
  { number: "02", title: "Front-end with Next.js", body: "Interfaces built in Next.js, React, and TypeScript, like the cashier system now running in a retail client's stores." },
  { number: "03", title: "iOS prototypes in SwiftUI", body: "Working SwiftUI prototypes to test an idea on a real iPhone before a full build." },
  { number: "04", title: "Ship and maintain", body: "Deployment with Docker and ongoing fixes after launch, so the product keeps running." },
];
