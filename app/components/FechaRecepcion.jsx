import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

export default function fechaRecepcion() {
  const [value, setValue] = useState(dayjs(new Date()));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <div className=" flex flex-col p-7">
          <div className="pb-2">
            <DatePicker
              label="Fecha de Recepción"
              defaultValue={dayjs(new Date())}
            />
          </div>

          <div>
            <DatePicker
              label="Elaboración del Documento"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
