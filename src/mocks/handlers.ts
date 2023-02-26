import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL!;

const handlers = [
  rest.post(`${apiUrl}/users/login`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      })
    );
  }),
];

export default handlers;
