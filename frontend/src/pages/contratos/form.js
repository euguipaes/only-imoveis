import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getImoveis, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const imovel = ref.current;

      imovel.valor_imovel.value = onEdit.nome;
      imovel.tam_imovel.value = onEdit.cpf;
      imovel.desc_imovel.value = onEdit.email;
      imovel.tipo_imovel.value = onEdit.dt_nascimento;
      imovel.status_imovel.value = onEdit.dt_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imovel = ref.current;

    if (
      !imovel.valor_imovel.value ||
      !imovel.tam_imovel.value ||
      !imovel.desc_imovel.value ||
      !imovel.tipo_imovel.value ||
      !imovel.status_imovel.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8081/" + onEdit.id, {
          valor_imovel: imovel.valor_imovel.value,
          tam_imovel: imovel.tam_imovel.value,
          desc_imovel: imovel.desc_imovel.value,
          tipo_imovel: imovel.tipo_imovel.value,
          status_imovel: imovel.status_imovel.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8081", {
          valor_imovel: imovel.valor_imovel.value,
          tam_imovel: imovel.tam_imovel.value,
          desc_imovel: imovel.desc_imovel.value,
          tipo_imovel: imovel.tipo_imovel.value,
          status_imovel: imovel.status_imovel.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    imovel.valor_imovel.value = "";
    imovel.tam_imovel.value = "";
    imovel.desc_imovel.value = "";
    imovel.tipo_imovel.value = "";
    imovel.status_imovel.value = "";

    setOnEdit(null);
    getImoveis();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Valor</Label>
        <Input name="valor_imovel" />
      </InputArea>
      <InputArea>
        <Label>Tamanho do Imóvel</Label>
        <Input name="tam_imovel" />
      </InputArea>
      <InputArea>
        <Label>Descrição</Label>
        <Input name="desc_imovel" type="text" />
      </InputArea>
      <InputArea>
        <Label>Tipo</Label>
        <Input name="tipo_imovel" type="text" />
      </InputArea>
      <InputArea>
        <Label>Statys</Label>
        <Input name="status_imovel" type="text" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
