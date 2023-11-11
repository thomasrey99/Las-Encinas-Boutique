<<<<<<< HEAD


import React from 'react';
import { Table} from 'antd';
import styles from "./UsersTable.module.css"
import { useGetAllUsersQuery } from "../../../../libs/redux/services/usersApi"
import { EditOutlined, StopOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { getUserByUid } from '../../../../libs/redux/features/actions/userActions';



import {Link} from 'react-router-dom'
=======
import React, { useEffect } from 'react';
import { Table } from 'antd';
import styles from "./UsersTable.module.css"
import { useGetAllUsersQuery } from "../../../../libs/redux/services/usersApi"
import { EditOutlined, StopOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByUid, getUsers } from '../../../../libs/redux/features/actions/userActions';
import SearchBarUsers from '../SearchBarUsers/SearchBarUsers';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons'



import { Link } from 'react-router-dom'
>>>>>>> develop

const columns = [
  {
    title: 'Nombres',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Apellidos',
    width: 100,
    dataIndex: 'lastName',
    key: 'lastName',
    fixed: 'left',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: '1',
    width: 150,
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: '3',
    width: 150,
  },
  {
    title: 'Administrador',
    dataIndex: 'is_Admin',
    key: '4',
    width: 150,
    render: (text, record) => {
<<<<<<< HEAD
      return text ? "Sí" : "No";
    },
  },
  {
    title: 'Action',
=======
      return (<div className={styles.tableCell}>
        {text ? <CheckOutlined className={styles.check} /> : <CloseOutlined className={styles.block}/>}
      </div>)
    },
  },
  {
    title: 'Bloqueado',
    dataIndex: 'isBlocked',
    key: '5',
    width: 150,
    render: (text, record) => {
      return (<div className={styles.tableCell}>
        {text ? <CheckOutlined className={styles.check} /> : <CloseOutlined className={styles.block}/>}
      </div>)
    },
  },
  {
    title: 'Editar',
>>>>>>> develop
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (record) => (
      <div>
<<<<<<< HEAD
        
        <Link to={`/editUserAdmin/${record.uid}`}> 
          <EditOutlined className={styles.marginIcon} />
        </Link>
        
        
            
      </div>
      
      
=======

        <Link to={`/editUserAdmin/${record.uid}`}>
          <EditOutlined className={styles.marginIcon} />
        </Link>



      </div>


>>>>>>> develop
    ),
  },
];




const UsersTable = () => {
<<<<<<< HEAD

  //start
 

  //end

  const funcion1 = ()=>{
    alert("Se ha detenido el usuario");
  }
  
    const { data } = useGetAllUsersQuery()
    const users = data;
    console.log("Esto son los usuarios:",users)
    return(
<div >
        <h1 >Users Table</h1>
<Table className={styles.container} 
    columns={columns} 
    dataSource={users}
    
  />
    </div>
    )
    
  
    };
=======
  const users = useSelector(state => state.user.allUsers)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUsers())
  },[])

  // const { data } = useGetAllUsersQuery()
  // const users = data;
  console.log("Esto son los usuariossssss:", users)
  return (
    <div className={styles.container}>
      <h1 className={styles.titleTable}>Lista de usuarios</h1>
      <SearchBarUsers/>
      <br></br>
      
      <Table 
        className={styles.tableContainer}
        columns={columns}
        dataSource={users}

      />
    </div>
  )


}; 
>>>>>>> develop
export default UsersTable; 