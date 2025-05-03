import Stat from '@/components/Stat';
import useActivities from '@/hooks/useActivities';

// only support China for now
const LocationSummary = () => {
  const { years, countries, provinces, cities } = useActivities();
  return (
    <div className="cursor-pointer">
      <section>
        {countries ? <Stat value={countries.length} description=" countries" /> : null}
        {years ? <Stat value={`${years.length}`} description=" years logged" /> : null}
        {/* {provinces ? <Stat value={provinces.length} description=" 个省份" /> : null}
        {cities ? (
          <Stat value={Object.keys(cities).length} description=" 个城市" />
        ) : null} */}
      </section>
      <hr color="red" />
    </div>
  );
};

export default LocationSummary;
