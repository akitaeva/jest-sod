import { rest } from "msw";

export const handlers = [
  res.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanila", imagePath: "/images/vanila.png" },
      ])
    );
  }),
];
