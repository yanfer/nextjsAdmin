import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
    folioRecibido: { type: Number, required: true },
    nombreRemitente: { type: String, required: true },
    puestoRemitente: { type: String, required: true },
    dependencia: { type: String, required: true },
    delegacion: { type: String, required: true },
    nombreDocumento: { type: String, required: true },
    turno: { type: String, required: true },
    referenciaInteresados: { type: String, required: true },

    fechaRecepcion: { type: Date, required: true },
    fechaRecibido: { type: Date, required: true },
    archivo: { type: String, required: false },
    descripcion: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const folioModel =
  mongoose.models.Folio || mongoose.model('Folio', topicSchema);

export default folioModel;
