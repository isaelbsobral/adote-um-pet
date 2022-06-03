import type { NextPage } from 'next';
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';
const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você pode{' '}
            <strong> adotar um pet virtualmente</strong>
          </span>
        }
      />

      <Lista
        pets={[
          {
            id: 1,
            nome: 'Wayne',
            historia: 'lorem impsum asdasaclaksdl',
            foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lgetpy1hTM0yooWOx6rOAAHaE2%26pid%3DApi&f=1',
          },
          {
            id: 2,
            nome: 'Dick',
            historia: 'lorem impsum asdasaclaksdl',
            foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bq-U1KIz1NPRVtxFuSZqOgHaEH%26pid%3DApi&f=1',
          },
          {
            id: 3,
            nome: 'Vex',
            historia: 'lorem impsum asdasaclaksdl',
            foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eqzUE8vAeF_kcTZeaQQvfwHaFS%26pid%3DApi&f=1',
          },
          {
            id: 4,
            nome: 'Muchkin',
            historia: 'lorem impsum asdasaclaksdl',
            foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9hCnmGkw110QZUgCmJGzpwHaE8%26pid%3DApi&f=1',
          },
        ]}
      />
    </div>
  );
};

export default Home;
