import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #ff9b04;
  padding: 20px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
  padding: 20px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset black;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ contratos, setImovel, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id_imovel) => {
    await axios
      .delete("http://localhost:8081/" + id_imovel)
      .then(({ data }) => {
        const newArray = id_imovel.filter((user) => id_imovel !== id_imovel);

        setImovel(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Valor</Th>
          <Th>Tamanho</Th>
          <Th>Descrição</Th>
          <Th>Tipo</Th>
          <Th>Status</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <td width="20%">1799.00</td>
          <td width="20%">212.00</td>
          <td width="20%">moveis velhos </td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1170.00</td>
          <td width="20%">276.00</td>
          <td width="20%">vizinhança barulhenta</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1238.00</td>
          <td width="20%">216.00</td>
          <td width="20%">ótima opção para quem gosta de ar livre</td>
          <td width="20%">casa</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1527.00</td>
          <td width="20%">260.00</td>
          <td width="20%">sem muita iluminação natural</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1442.00</td>
          <td width="20%">158.00</td>
          <td width="20%">com janelas aprova de som</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1629.00</td>
          <td width="20%">268.00</td>
          <td width="20%">próximo ao metro</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1425.00</td>
          <td width="20%">284.00</td>
          <td width="20%">perto do shopping</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1765.00</td>
          <td width="20%">234.00</td>
          <td width="20%">próximo a muitas lojas</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1697.00</td>
          <td width="20%">232.00</td>
          <td width="20%">muito barulho ao redor</td>
          <td width="20%">apartamento</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>{" "}
        </Tr>
        <Tr>
          <td width="20%">1850.00</td>
          <td width="20%">150.00</td>
          <td width="20%">perto do metro</td>
          <td width="20%">apartamento</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1306.00</td>
          <td width="20%">146.00</td>
          <td width="20%">ótima pra quem tem pet</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">2190.00</td>
          <td width="20%">254.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1714.00</td>
          <td width="20%">250.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">2122.00</td>
          <td width="20%">178.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1935.00</td>
          <td width="20%">248.00</td>
          <td width="20%">muita chuva</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1493.00</td>
          <td width="20%">288.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1595.00</td>
          <td width="20%">144.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">casa</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1221.00</td>
          <td width="20%">168.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1119.00</td>
          <td width="20%">180.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">apartamento</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1646.00</td>
          <td width="20%">192.00</td>
          <td width="20%">rua esburacada</td>
          <td width="20%">casa</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1782.00</td>
          <td width="20%">238.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">apartamento</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">2173.00</td>
          <td width="20%">204.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">casa</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1204.00</td>
          <td width="20%">148.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1391.00</td>
          <td width="20%">272.00</td>
          <td width="20%">com moveis clássicos </td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1680.00</td>
          <td width="20%">286.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1034.00</td>
          <td width="20%">228.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1340.00</td>
          <td width="20%">208.00</td>
          <td width="20%">ótima ventilação porém pouca iluminada</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1136.00</td>
          <td width="20%">164.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">kitnet</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1374.00</td>
          <td width="20%">194.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">casa</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
        <Tr>
          <td width="20%">1884.00</td>
          <td width="20%">142.00</td>
          <td width="20%">Sem descrição</td>
          <td width="20%">sobrado</td>
          <td width="20%">ocupado</td>
          <Td alignCenter width="5%">
            <FaEdit />
          </Td>
          <Td alignCenter width="5%">
            <FaTrash />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
