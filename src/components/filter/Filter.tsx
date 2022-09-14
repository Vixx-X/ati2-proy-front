import ContinentFilter from './subFilters/ContinentFilter';
import ContryFilter from './subFilters/ContryFilter';
import StateFilter from './subFilters/StateFilter';
import TrasactionFilter from './subFilters/TrasactionFilter';
import VehicleBrandFilter from './subFilters/VehicleBrandFilter';
import VehicleModelFilter from './subFilters/VehicleModelFilter';

interface FilterInterface extends Props {
  tag: string;
}

export const Filter = ({ tag }: FilterInterface) => {
  return (
    <>
      {tag === 'continent' && <ContinentFilter/>}
      {tag === 'contry' && <ContryFilter/>}
      {tag === 'state' && <StateFilter/>}
      {tag === 'vehicle brand' && <VehicleBrandFilter/>}
      {tag === 'vehicle model' && <VehicleModelFilter/>}
      {tag === 'trasaction type' && <TrasactionFilter/>}
    </>
  );
};

export default Filter;
