'use client';

import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
} from '@nextui-org/react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MdUpload } from 'react-icons/md';
import dayjs from 'dayjs';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { PlusIcon } from './tableComponents/PlusIcon';
import { puesto, departamento } from './tableComponents/data';
import styles from '@/app/ui/dashboard/folios/folios.module.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/es';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  esES // use 'de' locale for UI texts (start, next month, ...)
);

export default function AddFolios() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [nombreRemitente, setNombreRemitente] = useState('');
  const [puestoRemitente, setPuestoRemitente] = useState('');
  const [dependencia, setDependencia] = useState('');
  const [delegacion, setDelegacion] = useState('');
  const [nombreDocumento, setNombreDocumento] = useState('');
  const [turno, setTurno] = useState('');
  const [referenciaInteresados, setReferenciaInteresados] = useState('');
  const [folioRecibido, setFolioRecibido] = useState('');
  const [fechaRecepcion, setFechaRecepcion] = useState(dayjs(new Date()));
  const [fechaRecibido, setFechaRecibido] = useState(dayjs(new Date()));
  const [archivo, setArchivo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!folioRecibido || !fechaRecepcion) {
      alert('nombre y puesto requerido.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/folios', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
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
        }),
      });

      if (res.ok) {
        router.push('/dashboard/folios');
      } else {
        throw new Error('Failed to create a Product');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ paddingTop: '25px' }}>
      <div style={{ paddingBottom: '15px' }}>
        <Button
          className={styles.modalButton}
          style={{ backgroundColor: 'blue' }}
          onPress={onOpen}
          endContent={<PlusIcon />}
        >
          {' '}
          Crear Folio
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          size="5xl"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <ModalHeader className="flex flex-col gap-1">
                  Llene el Formulario
                </ModalHeader>
                <ModalBody>
                  <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 justify-center">
                    <Input
                      onChange={(e) => setNombreRemitente(e.target.value)}
                      value={nombreRemitente}
                      className={styles.userInput}
                      size="sm"
                      type="text"
                      label="Nombre del Remitente"
                    />

                    <Autocomplete
                      base={'data-open'}
                      onSelectionChange={setPuestoRemitente}
                      selectedKey={puestoRemitente}
                      className={styles.userInput}
                      allowsCustomValue
                      label="Puesto del Remitente"
                      size="sm"
                      defaultItems={puesto}
                    >
                      {(item) => (
                        <AutocompleteItem key={item.value}>
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                    <Autocomplete
                      onSelectionChange={setDependencia}
                      selectedKey={dependencia}
                      className={styles.userInput}
                      allowsCustomValue
                      label="Dependencia"
                      size="sm"
                      defaultItems={puesto}
                    >
                      {(item) => (
                        <AutocompleteItem key={item.value}>
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                    <Autocomplete
                      onSelectionChange={setDelegacion}
                      selectedKey={delegacion}
                      className={styles.userInput}
                      allowsCustomValue
                      label="Delegacion"
                      size="sm"
                      defaultItems={puesto}
                    >
                      {(item) => (
                        <AutocompleteItem key={item.value}>
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                    <Input
                      onChange={(e) => setNombreDocumento(e.target.value)}
                      value={nombreDocumento}
                      className={styles.userInput}
                      size="sm"
                      type="text"
                      label="Nombre Documento"
                    />
                    <Autocomplete
                      onSelectionChange={setTurno}
                      value={turno}
                      className={styles.userInput}
                      allowsCustomValue
                      label="Turno"
                      size="sm"
                      defaultItems={puesto}
                    >
                      {(item) => (
                        <AutocompleteItem key={item.value}>
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                    <Autocomplete
                      onSelectionChange={setReferenciaInteresados}
                      selectedKey={referenciaInteresados}
                      className={styles.userInput}
                      allowsCustomValue
                      label="Referencia Interesados"
                      size="sm"
                      defaultItems={departamento}
                    >
                      {(item) => (
                        <AutocompleteItem key={item.value}>
                          {item.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>

                    <Input
                      onChange={(e) => setFolioRecibido(e.target.value)}
                      value={folioRecibido}
                      className={styles.userInput}
                      size="sm"
                      type="number"
                      label="Folio Recibido"
                    />
                  </div>
                  {/* Segunda Seccion */}
                  <div className="flex gap-1 justify-center items-center">
                    <div>
                      <div className={styles.fechasTop}>
                        <ThemeProvider theme={theme}>
                          <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale="es"
                          >
                            <DemoContainer
                              components={['DatePicker', 'DatePicker']}
                            >
                              <div className=" flex flex-col p-7">
                                <div className={styles.fecha1}>
                                  <DatePicker
                                    label="Fecha de Recepción"
                                    value={fechaRecepcion}
                                    onChange={(newValue) =>
                                      setFechaRecepcion(newValue)
                                    }
                                  />
                                </div>

                                <div>
                                  <DatePicker
                                    label="Fecha de Recibo"
                                    value={fechaRecibido}
                                    onChange={(newValue) =>
                                      setFechaRecibido(newValue)
                                    }
                                  />
                                </div>
                              </div>
                            </DemoContainer>
                          </LocalizationProvider>
                        </ThemeProvider>
                      </div>
                      <div className="flex items-center justify-center">
                        <Button
                          onChange={(e) => setArchivo(e.target.value)}
                          value={archivo}
                          className="flex items-center justify-center"
                          color="secondary"
                        >
                          <h1>Subir Archivos</h1>
                          <MdUpload />
                        </Button>
                      </div>
                    </div>

                    <Textarea
                      onChange={(e) => setDescripcion(e.target.value)}
                      value={descripcion}
                      className="h-44  "
                      label="Descripción"
                      //variant="bordered"
                      placeholder="Ingrese la descripción del Folio"
                      disableAnimation
                      disableAutosize
                      size="lg"
                      classNames={{
                        base: 'max-w-xl',
                        input: 'resize-y min-h-[60px]',
                      }}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    onSubmitCapture={onClose}
                  >
                    Enviar
                  </Button>
                </ModalFooter>
              </form>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
