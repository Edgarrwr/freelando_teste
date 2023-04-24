import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Card } from "./componentes/Carde/Card";


function App() {
  return (
    <ProvedorTema>
      <Estilos/>
      <Card>
      <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
