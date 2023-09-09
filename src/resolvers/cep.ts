import { http } from "../services/http";

export const cepResolver = {
  Query: {
    cep: async (_: any, { cep }: any) => {
      const { data } = await http.get(`https://viacep.com.br/ws/${cep}/json/`);
      return data;
    },
  },
};
