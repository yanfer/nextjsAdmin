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
  SortDescriptor,
} from '@nextui-org/react';

import { folioColumns } from './tableComponents/data';
import { VerticalDotsIcon } from './tableComponents/VerticalDotsIcon';
import { SearchIcon } from './tableComponents/SearchIcon';

export default function ListaFolios({ folios }) {
  /* FILTERING */
  const [filterValue, setFilterValue] = useState('');
  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredFolios = [...folios];

    if (hasSearchFilter) {
      filteredFolios = filteredFolios.filter((folio) =>
        folio.nombreRemitente
          .toLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      );
    }
    return filteredFolios;
  }, [folios, filterValue, hasSearchFilter]);

  /* PAGINATION */
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);
  const pages = Math.ceil(folios.length / rowsPerPage);

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

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por folio..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, onClear]);

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
              <DropdownMenu>
                <DropdownItem>Ver</DropdownItem>
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
            allowsSorting={column.sortable}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items} emptyContent={'Sin folios para mostrar'}>
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
