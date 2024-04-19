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

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-date-pickers/locales';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useState } from 'react';

import { PlusIcon } from '../../usuarios/PlusIcon';
import { statusOptions, puesto, departamento } from '../../usuarios/data';
import styles from '@/app/ui/dashboard/folios/folios.module.css';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  esES // use 'de' locale for UI texts (start, next month, ...)
);

export default function Folios() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState(dayjs(new Date()));

  return (
    <div style={{ paddingTop: '25px' }}>
      <div style={{ paddingBottom: '15px' }}>
        <Button
          id="btnCrearUsuario"
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
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Llene el Formulario
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-4">
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 justify-center">
                      <Input
                        className={styles.userInput}
                        size="sm"
                        type="text"
                        label="Nombre del Remitente"
                      />

                      <Autocomplete
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

                      <Input
                        className={styles.userInput}
                        size="sm"
                        type="text"
                        label="Nombre del Documento"
                      />

                      <Autocomplete
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
                        className={styles.userInput}
                        size="sm"
                        type="number"
                        label="Folio Recibido"
                      />
                    </div>
                    {/* Segunda Seccion */}
                    <div className="flex gap-1 justify-center items-center">
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
                        </ThemeProvider>
                      </div>

                      <Textarea
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
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Enviar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
