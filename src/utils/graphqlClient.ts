import { createClient } from '@urql/core';
import { getToken } from './getToken';

export const client = createClient({
  url: 'https://back-homologacao.matrixcargo.com.br/graphql',
  fetchOptions: () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxYzI1ODY4MS1mYmUwLTRlNjUtYmJmZi1hNTliMTViODg1YzciLCJkYXRhIjp7ImNvbXBhbnkiOiJjYXJnb2xpZnQifSwiaWF0IjoxNjcyODU5MDcyfQ.iCoacNbvWe_JMknWjJZjgxaLK2YMGurzPPwDy_IpsWI';
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});
