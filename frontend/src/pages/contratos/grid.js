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
          <Th>ID</Th>
          <Th>Data do Contrato</Th>
          <Th>Vencimento</Th>
          <Th>Valor</Th>
          <Th>ID Imóvel</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <td width="20%">1</td>
          <td width="20%">2022-06-20</td>
          <td width="20%">2024-06-20</td>
          <td width="20%">2098.00</td>
          <td width="20%">1</td>
        </Tr>
        <Tr>
          <td width="20%">2</td>
          <td width="20%">2021-02-22</td>
          <td width="20%">2025-02-22</td>
          <td width="20%">1489.00</td>
          <td width="20%">2</td>
        </Tr>
        <Tr>
          <td width="20%">3</td>
          <td width="20%">2021-03-09</td>
          <td width="20%">2023-03-09</td>
          <td width="20%">1528.00</td>
          <td width="20%">3</td>
        </Tr>
        <Tr>
          <td width="20%">4</td>
          <td width="20%">2022-06-11</td>
          <td width="20%">2023-06-11</td>
          <td width="20%">1734.00</td>
          <td width="20%">4</td>
        </Tr>
        <Tr>
          <td width="20%">5</td>
          <td width="20%">2020-01-25</td>
          <td width="20%">2025-01-25</td>
          <td width="20%">1795.00</td>
          <td width="20%">5</td>
        </Tr>
        <Tr>
          <td width="20%">6</td>
          <td width="20%">2021-04-07</td>
          <td width="20%">2023-04-07</td>
          <td width="20%">1943.00</td>
          <td width="20%">6</td>
        </Tr>
        <Tr>
          <td width="20%">7</td>
          <td width="20%">2019-12-14</td>
          <td width="20%">2025-12-14</td>
          <td width="20%">1614.00</td>
          <td width="20%">7</td>
        </Tr>
        <Tr>
          <td width="20%">8</td>
          <td width="20%">2022-03-08</td>
          <td width="20%">2025-03-08</td>
          <td width="20%">1910.00</td>
          <td width="20%">8</td>
        </Tr>
        <Tr>
          <td width="20%">9</td>
          <td width="20%">2019-07-25</td>
          <td width="20%">2025-07-25</td>
          <td width="20%">1936.00</td>
          <td width="20%">9</td>
        </Tr>
        <Tr>
          <td width="20%">10</td>
          <td width="20%">2020-02-21</td>
          <td width="20%">2024-02-21</td>
          <td width="20%">2048.00</td>
          <td width="20%">10</td>
        </Tr>
        <Tr>
          <td width="20%">11</td>
          <td width="20%">2022-02-21</td>
          <td width="20%">2025-02-21</td>
          <td width="20%">1468.00</td>
          <td width="20%">11</td>
        </Tr>
        <Tr>
          <td width="20%">12</td>
          <td width="20%">2022-05-13</td>
          <td width="20%">2025-05-13</td>
          <td width="20%">2503.00</td>
          <td width="20%">12</td>
        </Tr>
        <Tr>
          <td width="20%">13</td>
          <td width="20%">2021-06-29</td>
          <td width="20%">2023-06-29</td>
          <td width="20%">1968.00</td>
          <td width="20%">13</td>
        </Tr>
        <Tr>
          <td width="20%">14</td>
          <td width="20%">2021-02-20</td>
          <td width="20%">2024-02-20</td>
          <td width="20%">2467.00</td>
          <td width="20%">14</td>
        </Tr>
        <Tr>
          <td width="20%">15</td>
          <td width="20%">2019-03-15</td>
          <td width="20%">2024-03-15</td>
          <td width="20%">2305.00</td>
          <td width="20%">15</td>
        </Tr>
        <Tr>
          <td width="20%">16</td>
          <td width="20%">2022-08-09</td>
          <td width="20%">2023-08-09</td>
          <td width="20%">1715.00</td>
          <td width="20%">16</td>
        </Tr>
        <Tr>
          <td width="20%">17</td>
          <td width="20%">2019-11-12</td>
          <td width="20%">2025-11-12</td>
          <td width="20%">1879.00</td>
          <td width="20%">17</td>
        </Tr>
        <Tr>
          <td width="20%">18</td>
          <td width="20%">2021-07-29</td>
          <td width="20%">2024-07-29</td>
          <td width="20%">1586.00</td>
          <td width="20%">18</td>
        </Tr>
        <Tr>
          <td width="20%">19</td>
          <td width="20%">2021-01-26</td>
          <td width="20%">2024-01-26</td>
          <td width="20%">1294.00</td>
          <td width="20%">19</td>
        </Tr>
        <Tr>
          <td width="20%">20</td>
          <td width="20%">2021-08-23</td>
          <td width="20%">2023-08-23</td>
          <td width="20%">1871.00</td>
          <td width="20%">20</td>
        </Tr>
        <Tr>
          <td width="20%">21</td>
          <td width="20%">2021-03-23</td>
          <td width="20%">2024-03-23</td>
          <td width="20%">2018.00</td>
          <td width="20%">21</td>
        </Tr>
        <Tr>
          <td width="20%">22</td>
          <td width="20%">2019-06-01</td>
          <td width="20%">2023-06-01</td>
          <td width="20%">2431.00</td>
          <td width="20%">22</td>
        </Tr>
        <Tr>
          <td width="20%">23</td>
          <td width="20%">2019-02-27</td>
          <td width="20%">2023-02-27</td>
          <td width="20%">1356.00</td>
          <td width="20%">23</td>
        </Tr>
        <Tr>
          <td width="20%">24</td>
          <td width="20%">2019-02-23</td>
          <td width="20%">2024-02-23</td>
          <td width="20%">1689.00</td>
          <td width="20%">24</td>
        </Tr>
        <Tr>
          <td width="20%">25</td>
          <td width="20%">2021-10-13</td>
          <td width="20%">2025-10-13</td>
          <td width="20%">1975.00</td>
          <td width="20%">25</td>
        </Tr>
        <Tr>
          <td width="20%">26</td>
          <td width="20%">2021-12-13</td>
          <td width="20%">2023-12-13</td>
          <td width="20%">1256.00</td>
          <td width="20%">26</td>
        </Tr>
        <Tr>
          <td width="20%">27</td>
          <td width="20%">2019-04-25</td>
          <td width="20%">2024-04-25</td>
          <td width="20%">1690.00</td>
          <td width="20%">27</td>
        </Tr>
        <Tr>
          <td width="20%">28</td>
          <td width="20%">2022-02-11</td>
          <td width="20%">2025-02-11</td>
          <td width="20%">1326.00</td>
          <td width="20%">28</td>
        </Tr>
        <Tr>
          <td width="20%">29</td>
          <td width="20%">2022-03-17</td>
          <td width="20%">2023-03-17</td>
          <td width="20%">1675.00</td>
          <td width="20%">29</td>
        </Tr>
        <Tr>
          <td width="20%">30</td>
          <td width="20%">2022-07-17</td>
          <td width="20%">2023-07-17</td>
          <td width="20%">2056.00</td>
          <td width="20%">30</td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
