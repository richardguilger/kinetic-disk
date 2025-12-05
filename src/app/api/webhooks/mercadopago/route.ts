import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import MercadoPagoConfig, { Payment } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || 'TEST-ACCESS-TOKEN' });

export async function POST(request: Request) {
    try {
        const url = new URL(request.url);
        const topic = url.searchParams.get("topic") || url.searchParams.get("type");
        const id = url.searchParams.get("id") || url.searchParams.get("data.id");

        if (topic === "payment" && id) {
            const payment = new Payment(client);
            const paymentData = await payment.get({ id });

            if (paymentData.status === "approved") {
                const bookingId = paymentData.external_reference;

                if (bookingId) {
                    // Update booking status in Firestore
                    const bookingRef = doc(db, "bookings", bookingId);
                    await updateDoc(bookingRef, {
                        status: "confirmed",
                        paymentId: id,
                        paidAt: new Date().toISOString(),
                    });

                    // TODO: Trigger WhatsApp/Email notification here
                }
            }
        }

        return NextResponse.json({ status: "ok" });
    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json({ error: "Webhook Error" }, { status: 500 });
    }
}
