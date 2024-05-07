import { dbConnect } from '@/app/libs/mongodb';
import { NextResponse } from 'next/server';
import Folio from '@/models/folioModel';

export async function GET() {
  await dbConnect();
  const folios = await Folio.find();
  return NextResponse.json({ folios });
}

export async function POST(request) {
  const {
    nombreRemitente,
    puestoRemitente,
    dependencia,
    delegacion,
    nombreDocumento,
    turno,
    referenciaInteresados,
    folioRecibido,
    fechaRecepcion,
    fechaRecibido,
    archivo,
    descripcion,
  } = await request.json();
  await dbConnect();
  await Folio.create({
    nombreRemitente,
    puestoRemitente,
    dependencia,
    delegacion,
    nombreDocumento,
    turno,
    referenciaInteresados,
    folioRecibido,
    fechaRecepcion,
    fechaRecibido,
    archivo,
    descripcion,
  });
  return NextResponse.json({ message: 'Folio Creado' }, { status: 201 });
}
