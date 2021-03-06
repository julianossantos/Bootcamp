import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';

import * as Yup from 'yup';
import api from '~/services/api';

import { Container, Cover, Title, Content } from '~/styles/default';
import { ModalContainer } from './styles';

const schema = Yup.object().shape({
  answer: Yup.string()
    .max(255, 'maximum number of characters exceeded')
    .required('answer required'),
});

export default function HelpOrders() {
  const [helpOrder, setHelpOrder] = useState([]);
  const [modalHelpOrder, setModalHelpOrder] = useState();
  const [showModal, setShowModal] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  async function loadSuport() {
    const response = await api.get('/students/help-orders');
    setHelpOrder(response.data);
  }

  useEffect(() => {
    loadSuport();
  }, []);

  function handleHelpOrder(suport) {
    setModalHelpOrder(suport);
    setShowModal(true);
  }

  async function handleSubmit(data) {
    try {
      const { id } = modalHelpOrder;
      console.tron.log(`id: ${id}`);
      await api.post(`/students/help-orders/${id}/answer`, {
        ...data,
      });
      toast.success(`successfully answered`);
      setShowModal(false);
      loadSuport();
    } catch (error) {
      console.tron.log(error);
      toast.error(`error: ${error}`);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <Cover>
        <Title>
          <h1>Pedidos de auxílio</h1>
        </Title>
        <Content>
          <table>
            <thead>
              <tr>
                <td>Aluno</td>
                <td />
              </tr>
            </thead>
            <tbody>
              {helpOrder.map(suport => (
                <tr key={suport.id}>
                  <td>{suport.student.name}</td>
                  <td>
                    <button
                      className="orderResponse"
                      type="button"
                      onClick={() => handleHelpOrder(suport)}
                    >
                      responder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      </Cover>

      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContainer>
          <div>
            <button type="button" className="close" onClick={handleCloseModal}>
              <MdClose /> Fechar
            </button>
            <strong>
              PERGUNTA DO ALUNO:{' '}
              <span>{modalHelpOrder ? modalHelpOrder.student.name : null}</span>
            </strong>
            <span> {modalHelpOrder ? modalHelpOrder.question : null}</span>
          </div>
          <Form
            initialData={modalHelpOrder}
            schema={schema}
            onSubmit={handleSubmit}
          >
            <label>
              <strong>SUA RESPOSTA</strong>

              <Input multiline name="answer" placeholder="Resposta..." />
            </label>

            <button type="submit">Responder aluno</button>
          </Form>
        </ModalContainer>
      </ReactModal>
    </Container>
  );
}
