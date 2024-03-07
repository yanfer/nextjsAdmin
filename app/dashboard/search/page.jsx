'use client';
import styles from '@/app/ui/dashboard/testSearch/testSeach.module.css';
//import { Users } from './users';
import { useState } from 'react';
import React from 'react';
import Table from './Table';

function searchPage() {
  const [query, setQuery] = useState('');

  return (
    <div className={styles.app}>
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.search}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <Table data={[]} />
    </div>
  );

  /* 
  ----------------1st way to do it-----------------

  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };

  console.log(
    Users.filter((user) => user.first_name.toLowerCase().includes('fe'))
  ); */

  /* 

  ----------------2st way to do it-----------------
  
  const keys = ['first_name', 'last_name', 'email'];

  //console.log(Users[0]['email']);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className={styles.app}>
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.search}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <Table data={search(Users)} />
    </div>
  ); */
}

export default searchPage;
