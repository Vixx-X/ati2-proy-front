import useTranslate from "@hooks/useTranslate";

const Questions = ({}) => {
  const t = useTranslate();
  return (
    <div>
      <br />
      <br />
      {t('1. ¿Cuánto costará mi anuncio en VehiculoATI?')}
      <br />
      <br />
      {t('Este documento es parte integrante de los Términos y Condiciones Generales de Servicio. Mediante la aceptación de los Términos y Condiciones Generales en el momento del registro o de contratación del servicio, el cliente acepta las políticas aquí contenidas.')}
      <br />
      <br />
      {t('No hay costo. La aplicación es gratuita.')}
      <br />
      {t('2. ¿Cómo puedo pagar mi anuncio?')}
      <br />
      <br />
      {t('Podrás pagar a través de distintos medios, dependiendo de la opción de publicación que escojas:')}
      <br />
      <br /> 
      {t('Pago en Línea: cancela con transferencia bancaría desde el Banco Mercantil o BANESCO')}
      <br /> 
      {t('Centro de Publicación: cancela directamente en nuestros Centros de Publicación.')}
      <br />
      <br />
      {t('3. ¿Me cobrarán alguna comisión por la venta de mi vehículo?')}
      <br />
      <br />
      {t('No, ya que la compra/venta de los vehículos se realiza directamente entre las personas involucradas. Como sitio de fotoclasificados en Internet, VehiculoATI es un medio de contacto entre vendedores y compradores y no participa en la negociación de los vehículos.')}
      <br />
      {t('4. ¿Por cuánto tiempo estará publicado mi anuncio en VehiculoATI?')}
      <br />
      <br />
      {t('El término de la publicación es de 60 días.')}
      <br />
      {t('5. ¿Cómo renuevo mi anuncio en VehiculoATI?')}
      <br />
      <br />
      {t('Si el anuncio fue autogestionado para renovar debes ingresar en tu cuenta de Mercado Libre con tu usuario y contraseña, tildar "Micuenta" luego "Ventas", ubicar "Publicaciones", seleccionar "Finalizadas", seleccionar anuncio a renovar y tildar "Modificar". Si el anuncio fue gestionado por un Centro de publicación debes contactarlo para la renovación. El costo de la renovación está publicado en la sección de Tarifas. Ten presente que a partir de la primera renovación, el número de anuncio cambiará cada vez que lo renueves. Recuerda que sólo podrás renovar tu anuncio únicamente hasta 15 días después de su vencimiento (revisa la fecha indicada en nuestra factura)')}
      <br />
      {t('6. ¿Qué ocurre si mi aviso es retirado?')}
      <br />
      <br />
      {t('Si tu aviso ha sido retirado, esto significa que ya pasaron 60 días o más desde su publicación. Puedes renovar el anuncio si así lo deseas.')}
      <br />
      {t('7. ¿Puedo modificar mi aviso?')}
      <br />
      <br />
      {t('Sí')}
      <br />
      {t('8. ¿Cómo finalizo mi anuncio?')}
      <br />
      <br />
      {t('Acceder a la cuenta de Mercado Libre con tu usuario y contraseña, tildar "Micuenta" luego "Ventas", ubicar "Publicaciones", seleccionar "Activas", seleccionar anuncio a finalizar y tildar "Modificar".')}
      <br />
      <br />
      {t('También puedes finalizar tu anuncio aquí. De esta manera dejarás de recibir las llamadas y correos electrónicos de compradores interesados. Recuerda si no finalizas tu anuncio, el mismo será retirado del sistema después de 60 días, contados a partir de su publicación o la última renovación realizada.')}
      <br />
      {t('12. ¿Puedo tomar las fotos a mi carro y publicarlas en VehiculoATI?')}
      <br />
      <br />
      {t('Si.')}
      <br />
      {t('13. No veo la marca de mi carro, ¿puedo publicarlo?')}
      <br />
      <br />
      {t('Colocar marca en especificaciones en ese caso.')}
      <br />
      {t('14. ¿Debo colocar el precio de venta de el vehículo a anunciar?')}
      <br />
      <br />
      {t('Si, el precio referencial de venta es obligatorio, cada vendedor elige el monto que pedirá por su vehículo. VehiculoATI no es el propietario de los vehículos publicados en el portal, no tiene posesión de ellos ni los ofrece en venta, por ello no interviene en las operaciones realizadas entre los usuarios, ni participa en el establecimiento de condiciones de calidad o precio estipuladas por las partes.')}
      <br />
      {t('16. ¿Cuáles son las Condiciones de Publicación?')}
      <br />
      <br />
      {t('Puedes revisar las Condiciones de Publicación en nuestro sitio web y en ati2.proy.vittorioadesso.com, la revista.')}
      <br />
      {t('17. ¿Cuáles son las Políticas de Privacidad?')}
      <br />
      <br />
      {t('Puedes revisar las Políticas de Privacidad en nuestro sitio web.')}
      <br />
      {t('18. ¿Se hace responsable VehiculoATI por los datos o información contenida en las publicaciones exhibidas en el sitio?')}
      <br />
      <br />
      {t('La información publicada en los anuncios es responsabilidad del agente, propietario o persona que paga por el servicio. VehiculoATI no es responsable por errores, interpretaciones erradas o por la precisión de la información parcial o total publicada. Es responsabilidad del comprador chequear/verificar los datos expresados en los anuncios.')}
      <br />
      {t('19. Ya publiqué en ati2.proy.vittorioadesso.com. ¿Debo hacer algo adicional para que mi publicación también aparezca en ati2.proy.vittorioadesso.com?')}
      <br />
      <br />
      {t('Tu carro aparecerá en VehiculoATI automáticamente sin costo adicional. Este es un beneficio con el que ahora cuentas al contratar tu fotoclasificado en VehiculoATI. ')}
      <br />
      {t('20. Aún tengo preguntas. ¿Cómo puedo contactar al equipo de VehiculoATI?')}
      <br />
      <br />
      {t('Puedes comunicarte con nosotros llamando al 04241315948 comunicándote con nuestros aliados en los Centros de publicación y con gusto te atenderemos.')}
    </div>
  );
};

export default Questions;
