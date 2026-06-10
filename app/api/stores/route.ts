// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function GET() {
//     const stores = await prisma.store.findMany();

//     return NextResponse.json(stores);
// }

// export async function POST(request: Request) {
//     try {
//         const body = await request.json();

//         const store = await prisma.store.create({
//             data: {
//                 id: crypto.randomUUID(),
//                 userId: body.userId,
//                 name: body.name,
//                 address: body.address,
//                 isVerified: false,
//             },
//         });

//         return NextResponse.json(store, {
//             status: 201,
//         });
//     } catch (error) {
//         return NextResponse.json(
//             {
//                 message: "Failed to create store",
//                 error,
//             },
//             {
//                 status: 500,
//             }
//         );
//     }
// }