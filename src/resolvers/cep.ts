export const cepResolver = {
  Query: {
    cep: async (_: any, { cep }: any) => {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        headers: {
          responseType: "application/json",
        },
      });
      return response.json();
    },
  },
};
