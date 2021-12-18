import { CARS } from './cars';
import CarsList from './CarsList';

function App() {

  const getCars = ()=> {
    return CARS.map((c, index) => {
      return { ...c, id: index};
    });
  };
  return (
    <div className="w-100 h-100">
      <CarsList cars={getCars()} />
    </div>
  );
}

export default App;
