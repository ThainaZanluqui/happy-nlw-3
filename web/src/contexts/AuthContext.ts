import React, { createContext, useState, useEffect, useContext } from 'react'

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext