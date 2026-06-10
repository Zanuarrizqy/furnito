// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// type Params = Promise<{
//     id: string;
// }>;

// export async function GET(
//     request: Request,
//     { params }: { params: Params }
// ) {
//     const { id } = await params;

//     const store = await prisma.store.findUnique({
//         where: {
//             id,
//         },
//     });

//     if (!store) {
//         return NextResponse.json(
//             {
//                 message: "Store not found",
//             },
//             {
//                 status: 404,
//             }
//         );
//     }

//     return NextResponse.json(store);
// }

// export async function PUT(
//     request: Request,
//     { params }: { params: Params }
// ) {
//     const { id } = await params;

//     const body = await request.json();

//     const store = await prisma.store.update({
//         where: {
//             id,
//         },
//         data: {
//             name: body.name,
//             address: body.address,
//             isVerified: body.isVerified,
//         },
//     });

//     return NextResponse.json(store);
// }

// export async function DELETE(
//     request: Request,
//     { params }: { params: Params }
// ) {
//     const { id } = await params;

//     await prisma.store.delete({
//         where: {
//             id,
//         },
//     });

//     return NextResponse.json({
//         message: "Store deleted",
//     });
// }