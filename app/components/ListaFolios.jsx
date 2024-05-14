'use client';
import React, { useCallback, useMemo, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownItem,
  DropdownMenu,
  Pagination,
  Input,
} from '@nextui-org/react';

import { columns, folioColumns } from './tableComponents/data';
import { VerticalDotsIcon } from './tableComponents/VerticalDotsIcon';
import { SearchIcon } from './tableComponents/SearchIcon';
import Link from 'next/link';
import { ChevronDownIcon } from './tableComponents/ChevronDownIcon';
import { capitalize } from '../utils';

const INITIAL_VISIBLE_COLUMNS = [
  'folioRecibido',
  'nombreRemitente',
  'turno',
  'acciones',
  'fechaRecepcion',
];

export default function ListaFolios({ folios }) {
  const [filterValue, setFilterValue] = useState('');
  const hasSearchFilter = Boolean(filterValue);
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );

  //HIDE COLUMNS
  const headerColumns = useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  // FILTERING BY NUMBERS AND STRINGS
  const filteredItems = useMemo(() => {
    let filteredFolios = [...folios];

    if (hasSearchFilter) {
      filteredFolios = filteredFolios.filter(
        (folio) =>
          folio.folioRecibido === Number(filterValue) ||
          folio.folioRecibido.toString().includes(filterValue) ||
          folio.nombreRemitente
            .toLowerCase()
            .includes(filterValue.toLocaleLowerCase()) ||
          folio.puestoRemitente
            .toLowerCase()
            .includes(filterValue.toLocaleLowerCase()) ||
          folio.dependencia
            .toLowerCase()
            .includes(filterValue.toLocaleLowerCase()) ||
          folio.nombreDocumento
            .toLowerCase()
            .includes(filterValue.toLocaleLowerCase()) ||
          folio.descripcion
            .toLowerCase()
            .includes(filterValue.toLocaleLowerCase()) ||
          folio.fechaRecepcion.includes(filterValue) ||
          folio.fechaRecibido.includes(filterValue)
      );
    }
    return filteredFolios;
  }, [folios, filterValue, hasSearchFilter]);

  /* PAGINATION */
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  const [sortDescriptor, setSortDescriptor] = useState({
    column: 'name',
    direction: 'ascending',
  });
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue('');
    setPage(1);
  });

  /* SEARCH FIELD */
  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por folio, remitente, puesto, fecha, etc..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />

          <Dropdown>
            <DropdownTrigger className="sm:flex">
              <Button
                endContent={<ChevronDownIcon className="text-small" />}
                variant="flat"
              >
                Columnas
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}
            >
              {columns.map((column) => (
                <DropdownItem key={column.uid} className="capitalize">
                  {capitalize(column.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            {folios.length} folios en total
          </span>
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="50">100</option>
              <option value="50">500</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, onRowsPerPageChange, onClear]);

  const renderCell = useCallback((folio, columnKey) => {
    const cellValue = folio[columnKey];
    switch (columnKey) {
      case 'acciones':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="dynamic">
                <DropdownItem textValue="Ver">
                  <Link href={`/dashboard/folios/${sortedItems._id}`}>Ver</Link>
                </DropdownItem>
                <DropdownItem>Editar</DropdownItem>
                <DropdownItem>Borrar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Example table with dynamic content"
      topContentPlacement="outside"
      topContent={topContent}
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      bottomContentPlacement="outside"
      classNames={{ wrapper: 'min-h-[222px]' }}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="warning"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      className={{
        wrapper: 'min-h-[222px]',
      }}
    >
      <TableHeader columns={folioColumns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.key === 'acciones' ? 'center' : 'start'}
            allowsSorting={column.key}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={sortedItems} emptyContent={'Sin folios para mostrar'}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
