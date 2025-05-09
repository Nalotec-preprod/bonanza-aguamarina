import SectionHeader from "@/components/ui/headers/sectionHeader";

export default function ComunicadosPage() {
  return (
    <div>
      <SectionHeader>Comunicados</SectionHeader>
      <div className="space-y-4 px-3 text-justify">
        <p className="text-sm font-semibold">Fecha: 07-mayo-2025</p>

        <p>
          Estimados propietarios agradecemos su paciencia para temas del uso de
          la plataforma de residentia, chips y tarjetas de acceso ya que
          todav&iacute;a nos encontramos en el proceso de entrega de la antigua
          administraci&oacute;n. Por el momento se estar&aacute;n recibiendo
          comprobantes de pago por v&iacute;a WhatsApp.
        </p>
        <p>
          <b>NOTA: </b>
          Favor de realizar sus{" "}
          <span className="font-semibold underline">
            transferencias bancarias{" "}
          </span>{" "}
          agregando al concepto mes y n&uacute;mero de casa para poder
          identificar sus pagos.
        </p>
        <p className="text-center">
          EJEMPLO: &ldquo;Mantto Mayo casa 01&ldquo;
        </p>

        <p className="font-semibold text-center mt-10">
          Gracias por su atenci&oacute;n
        </p>
      </div>
    </div>
  );
}
