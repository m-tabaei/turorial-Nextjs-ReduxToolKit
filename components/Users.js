"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/features/users/usersSlice";
function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>Users</h2>
      {users.loading ? <h3>loading ...</h3> : null}
      {users.users.length
        ? users.users.map((user) => <p key={user.id}>{user.name}</p>)
        : null}
    </div>
  );
}

export default Users;
