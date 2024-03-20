const Planets2 = () => {
  const Planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <>
      <ul
        className="m-5 h-40 bg-neutral-900 text-slate-300 p-10 
      rounded shadow-2xl text-md"
      >
        <h1 className="text-red-500">List of Gas Planets</h1>
        {Planets.map((Planet, index) => Planet.isGasPlanet && <li key={index}>{Planet.name}</li> )}
      </ul>
    </>
  );
};

export default Planets2;
