import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { IUser } from "../types/resources";
import styles from "../styles/Users.module.css";

type UserProps = {
  users: IUser[];
};

export const getServerSideProps: GetServerSideProps<UserProps> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
};

function Users({ users }: UserProps) {
  return (
    <div className={styles.container}>
      <h3>Server Rendering Page </h3>
      {users?.map((user) => (
        <div key={user.id} className={styles.card}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
