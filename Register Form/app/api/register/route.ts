import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/db";
export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
  const { email, password, firstName, lastName, gender } = await request.json();

  if (!email || !password || !firstName || !lastName || !gender) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const [results] = await pool.query(
      "INSERT INTO users (email, password, firstName, lastName, gender) VALUES (?, ?, ?, ?, ?)",
      [email, password, firstName, lastName, gender]
    );
    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email, password, firstName, lastName, gender } = req.body;

//     if (!email || !password || !firstName || !lastName || !gender) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     try {
//       const [results] = await pool.query(
//         "INSERT INTO users (email, password, firstName, lastName, gender) VALUES (?, ?, ?, ?, ?)",
//         [email, password, firstName, lastName, gender]
//       );
//       res.status(201).json({ message: "User registered successfully." });
//     } catch (error) {
//       console.error("Error inserting data:", error);
//       res.status(500).json({ message: "Internal server error." });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
