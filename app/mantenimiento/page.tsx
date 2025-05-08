import SectionHeader from "@/components/ui/headers/sectionHeader";

const reporteMantto = {
  fecha: "7 de mayo 2025",

  mantos: [
    {
      id: "manto01",
      titulo: "Limpieza de palapas",
      photos: [
        "/images/palapa01.png",
        "/images/palapa02.png",
        "/images/palapa03.png",
      ],
    },
    {
      id: "manto02",
      titulo: "Limpieza de regadera",
      photos: ["/images/regadera01.png", "/images/regadera02.png"],
    },
  ],
};

export default async function ManttoPage() {
  return (
    <div className="px-2">
      <SectionHeader>Mantenimiento</SectionHeader>

      <div>
        <div className="my-4 flex items-center justify-center flex-col">
          <label htmlFor="fecha">Consultar reporte de otra fecha: </label>
          <input
            type="date"
            name="fecha"
            className="border border-gray-300 py-1 0x-4 rounded-md"
          />
        </div>
        <p>
          <b>Fecha reporte: </b> {reporteMantto.fecha}
        </p>

        {reporteMantto.mantos.map((item) => (
          <div key={item.titulo} className="my-6">
            <p className="font-semibold text-bonanzagreen-800 py-2 px-4 bg-bonanzagreen-200 rounded-md">
              {item.titulo}
            </p>
            <ul className="space-y-2">
              {item.photos.map((photo) => (
                <li key={photo}>
                  <img src={photo} alt="" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
