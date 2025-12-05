import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import MercadoPagoConfig, { Preference } from "mercadopago";

// Initialize Mercado Pago
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || 'TEST-ACCESS-TOKEN' });

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { room, dates, guests, guestInfo } = body;

        // 1. Save pending reservation to Firestore
        const docRef = await addDoc(collection(db, "bookings"), {
            room,
            dates,
            guests,
            guestInfo,
            status: "pending",
            createdAt: new Date().toISOString(),
        });

        // 2. Create Mercado Pago Preference
        const preference = new Preference(client);
        const result = await preference.create({
            body: {
                items: [
                    {
                        id: room.id,
                        title: `Reserva: ${room.name}`,
                        quantity: 1,
                        unit_price: Number(room.price.replace('R$ ', '').replace(',', '.')),
                    },
                ],
                payer: {
                    email: guestInfo.email,
                    name: guestInfo.name,
                },
                external_reference: docRef.id, // Link payment to booking ID
                back_urls: {
                    success: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success`,
                    failure: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/failure`,
                    pending: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/pending`,
                },
                auto_return: "approved",
            },
        });

        return NextResponse.json({
            id: docRef.id,
            preferenceId: result.id,
            initPoint: result.init_point
        });

    } catch (error) {
        console.error("Error creating booking:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
