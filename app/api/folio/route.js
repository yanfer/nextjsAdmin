/* import { NextResponse } from 'next/server';


export const GET = async () => {
  const result = await fetch(process.env.API_USERS_URL, { headers: {} });
};
 */

import connectMongoDB from '@/app/libs/mongodb';
import Folio from '@/models/folioModel';

export async function POST(request) {
  const {
    nombreRemitente,
    puestoRemitente,
    dependencia,
    delegacion,
    nombreDocuento,
    turno,
    referenciaInteresados,
    folioRecibido,
    fechaRecepcion,
    fechaRecibido,
    archivo,
    descripcion,
  } = await request.json();
  await connectMongoDB();
}
