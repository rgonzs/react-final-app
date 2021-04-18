import React from "react";
import { Form, SearchContainer, SearchButton, SearchLabel, TitleContainer, SearchInput, SearchSelect } from "./Search.elements";

const Search = () => {
  return (
    <>
      <SearchContainer>
        <Form action='' >
          <TitleContainer id='title'>Busqueda de comprobante</TitleContainer>
          <SearchLabel htmlFor='ruc'>
            RUC EMISOR
          </SearchLabel>
          <SearchInput
            type="text"
            pattern="[0-9]*"
            id='ruc'
            name='ruc'
            placeholder='Numero de Ruc'
            maxlength='10'
          />
          <SearchLabel htmlFor='tipodoc'>
            TIPO DE DOCUMENTO
          </SearchLabel>
          <SearchSelect name='tipodoc' id='tipodoc'>
            <option value='default'>SELECCIONAR...</option>
            <option value='factura'>FACTURA</option>
            <option value='boleta'>BOLETA</option>
            <option value='resumen'>RESUMEN</option>
            <option value='nc'>NOTA DE CREDITO</option>
            <option value='nd'>NOTA DE DEBITO</option>
          </SearchSelect>
          <SearchLabel htmlFor='documento'>
            SERIE-CORRELATIVO
          </SearchLabel>
          <SearchInput
            type='text'
            id='documento'
            name='documento'
            placeholder='Serie-Correlativo'
            maxlength='13'
          />
          <SearchButton>Buscar</SearchButton>
        </Form>
      </SearchContainer>
    </>
  );
};

export default Search;
