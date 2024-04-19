import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es';

export default function fechaDocumento() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DemoContainer components={['DateTimePicker']}>
        <DatePicker
          label={'"Fecha de Elaboración de Documento"'}
          //slotProps={{ textField: { size: 'small' } }}
          //openTo="month"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
